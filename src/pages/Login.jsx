import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { myContext } from "../MainWithFunc";



const Login = () => {

    const contex = useContext(myContext);
    const { signInUser, googleSignInbyPop } = contex;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email, password)
            .then(() => {
                Swal.fire('Logged In', 'You successfully done Login', 'success')
                navigate('/');
            })

            .catch((error) => {
                Swal.fire('Error', `${error.message}`, 'error')

            })
    }

    const handleGoogleSignInPopup = () => {
        googleSignInbyPop()
            .then(() => {
                Swal.fire('Logged In', 'You successfully done Login', 'success')
                navigate('/');
            })

            .catch((error) => {
                Swal.fire('Error', `${error.message}`, 'error')

            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleSubmit}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 text-gray-400">Welcome Back! We are delighted to see you again. Please enter your credentials to access your account. If you are new here, you can also sign up for an account below.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">

                                    <Link to={'/register'}><a className="label-text-alt link link-hover">New Here?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-blue-700 border-none hover:bg-blue-800 text-white font-medium">Login</button>
                            </div>

                            <div className="form-control mt-6">
                                <hr />
                                <div className="mt-6 flex justify-center">

                                    <img onClick={handleGoogleSignInPopup} className="w-8 hover:cursor-pointer" src="https://i.ibb.co/F5PGrQ6/google.png" alt="" />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </form>



        </div>








    );
};

export default Login;