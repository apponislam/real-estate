import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="container mx-auto">
                <div className="flex justify-between items-center p-2">
                    <div className="skeleton h-14 w-64"></div>
                    <div className="items-center gap-2 hidden lg:flex">
                        <div className="skeleton h-9 w-20"></div>
                        <div className="skeleton h-9 w-20"></div>
                        <div className="skeleton h-9 w-20"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="skeleton h-14 w-24"></div>
                        <div className="skeleton h-14 w-24"></div>
                    </div>
                </div>
            </div>
        );
    }

    const links = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/updateprofile">Update Profile</NavLink>
            </li>
            <li>
                <NavLink to="/aboutus">About Us</NavLink>
            </li>
        </>
    );

    const links2 = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/signin">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Sign Up</NavLink>
            </li>
        </>
    );

    const logOutbtn = () => {
        logOut()
            .then(() => {
                console.log("Successfully logged out");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            {user ? links : links2}
                        </ul>
                    </div>
                    <Link to="/">
                        <button className="btn btn-ghost text-3xl hidden md:block">Appon Luxury</button>
                        <button className="btn btn-ghost text-xl block md:hidden">AL</button>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">{user ? links : links2}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center">
                            <div className="p-1 border-2 rounded-full tooltip tooltip-bottom z-50" data-tip={user.displayName || "Set Your Name"}>
                                <img className="h-11 w-11 rounded-full" src={user.photoURL || "null.png"} />
                            </div>
                            <button className="btn ml-3 bg-[#2e3652] border-[#2e3652] hover:bg-[#0356f9] text-white" onClick={logOutbtn}>
                                Sign Out
                            </button>
                            {/* <Link to="/register">
                                <button className="btn bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">{user.email}</button>
                            </Link> */}
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <Link to="/signin">
                                <button className="btn mr-1 md:mr-3 bg-[#2e3652] border-[#2e3652] hover:bg-[#0356f9] text-white">Sign In</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">Sign Up</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
