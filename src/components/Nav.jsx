import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { myContext } from '../MainWithFunc';
import {AiOutlineHome,AiOutlineAppstoreAdd,AiOutlineShoppingCart} from 'react-icons/ai'



const Nav = () => {

    const context = useContext(myContext);
    const { user, logOut,isLoding } = context;
    const Navigate = useNavigate();


    const navcontent_lg = <>

        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-white transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}><AiOutlineHome title='Home'></AiOutlineHome> </NavLink></li>
        <li> <NavLink to={'/add-products'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-white transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}><AiOutlineAppstoreAdd title='Add Items'></AiOutlineAppstoreAdd></NavLink></li>
        
        <li> <NavLink to={'/carts'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-white transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}><AiOutlineShoppingCart title='My Carts'></AiOutlineShoppingCart></NavLink></li>
        
  
    </>


const navcontent_md = <>

        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-white transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}> <div className='flex items-center justify-start gap-4'><AiOutlineHome></AiOutlineHome> <p>Home</p></div>   </NavLink></li>
        
        <li><NavLink to={'/add-products'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-white transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}> <div className='flex items-center justify-start gap-4'><AiOutlineAppstoreAdd ></AiOutlineAppstoreAdd> <p>Add Items</p></div>   </NavLink></li>

        <li><NavLink to={'/carts'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-white transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}> <div className='flex items-center justify-start gap-4'><AiOutlineShoppingCart ></AiOutlineShoppingCart> <p>My Carts</p></div>   </NavLink></li>
        
  
    </>


    return (








        <div className={` ${isLoding && 'hidden'} navbar bg-base-100`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-52">
                        {navcontent_md}
                    </ul>
                </div>

                <NavLink to={'/'}>
                    <span className='lg:text-3xl md:text-2xl hidden md:inline-block font-bold'>Kroy Tech</span>
                </NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 text-2xl gap-4">
                    {navcontent_lg}
                </ul>
            </div>


            <div className="navbar-end">
                <div className=" hidden md:flex  ">

                    <div className=' flex justify-end items-center' >

                        {
                            user && <p className='mr-4 '>{user?.displayName}</p>
                        }
                        {
                            user == null ? <Link to={'/login'}><button className="btn">Login</button></Link> : <div className="dropdown dropdown-end ">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 h-12 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><button onClick={logOut}>Logout</button></li>
                                </ul>
                            </div>
                        }


                    </div>

                </div>


                {user != null ? <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><button onClick={() => { Navigate('/dashboard') }}>{user?.displayName}</button></li>
                        <li><button onClick={logOut}>Logout</button></li>
                    </ul>
                </div> : <Link to={'/login'}><button className="btn md:hidden">Login</button></Link>}



            </div>



































        </div>








    );
};

export default Nav;