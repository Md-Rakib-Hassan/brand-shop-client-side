import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { myContext } from '../MainWithFunc';
import {AiOutlineHome,AiOutlineAppstoreAdd,AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSun} from 'react-icons/bs'




const Nav = () => {

    const context = useContext(myContext);
    const { user, logOut,isLoding } = context;
    const Navigate = useNavigate();
    const [theme,setTheme]=useState('light')

    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme', theme);
    },[theme])

    const handleToggleTheme=(e)=>{
        if(e.target.checked){
            setTheme('dark');
        }
        else setTheme('light');
    }



    

    const navcontent_lg = <>

        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-red-600 transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}><AiOutlineHome title='Home'></AiOutlineHome> </NavLink></li>
        <li> <NavLink to={'/add-products'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-red-600 transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}><AiOutlineAppstoreAdd title='Add Items'></AiOutlineAppstoreAdd></NavLink></li>
        
        <li> <NavLink to={'/carts'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-red-600 transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}><AiOutlineShoppingCart title='My Carts'></AiOutlineShoppingCart></NavLink></li>
        
  
    </>


const navcontent_md = <>

        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-red-600 transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}> <div className='flex items-center justify-start gap-4'><AiOutlineHome></AiOutlineHome> <p>Home</p></div>   </NavLink></li>
        
        <li><NavLink to={'/add-products'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-red-600 transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}> <div className='flex items-center justify-start gap-4'><AiOutlineAppstoreAdd ></AiOutlineAppstoreAdd> <p>Add Items</p></div>   </NavLink></li>

        <li><NavLink to={'/carts'} className={({ isActive }) => isActive ? 'font-medium bg-xprimary px-4 py-1 rounded-md text-red-600 transition-colors duration-1000' : ' transition-colors duration-1000 px-4 py-1.5 hover:bg-xsecondary rounded-md hover:transition-colors hover:duration-1000'}> <div className='flex items-center justify-start gap-4'><AiOutlineShoppingCart ></AiOutlineShoppingCart> <p>My Carts</p></div>   </NavLink></li>
        
  
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

<label className="swap swap-rotate px-3 duration-1000">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggleTheme} />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>


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