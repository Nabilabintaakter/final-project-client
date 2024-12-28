import { FaCircleUser } from 'react-icons/fa6';
import cart from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className={({isActive})=>`${isActive && 'font-bold text-[#EEFF25]'}`}>HOME</NavLink></li>
        <li>CONTACT US</li>
        <li>DASHBOARD</li>
        <li>OUR MENU</li>
        <li>OUR SHOP</li>
    </>
    return (
        <div className='font-inter text-white'>
            <div className="navbar flex justify-between bg-green-900 px-4">
                <div className="navbar-start w-auto">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-green-950 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to='/' className="font-cinzel hidden lg:block">
                        <p className='text-[32px] font-black'>BISTRO BOSS</p>
                        <p className='text-2xl font-bold tracking-widest'>RESTAURANT</p>
                    </NavLink>
                </div>
                {/* mobile */}
                <div className="navbar-center lg:hidden md:text-center flex w-auto">
                    <NavLink to='/' className="font-cinzel ">
                        <p className='text-2xl font-black'>BISTRO BOSS</p>
                        <p className=' font-bold tracking-widest'>RESTAURANT</p>
                    </NavLink>
                </div>
                <div className="navbar-end w-auto">
                    {/* laptop */}
                    <ul className="w-fit hidden lg:flex items-center gap-8  px-1">
                        {links}
                    </ul>
                    <div className='flex items-center gap-3'>
                        <img className='w-[49px] h-[40px]' src={cart} alt="" />
                        <p>SIGN OUT</p>
                        <FaCircleUser className='w-8 h-8' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;