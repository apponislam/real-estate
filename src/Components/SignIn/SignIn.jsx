import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
    const { signInUser, googleSignIn, setSuccessLogin } = useContext(AuthContext);

    const logInBtn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                setSuccessLogin(true);
                // toast.success("login successfully");
                // e.target.reset();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const googleSignInBtn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                // toast.success("login successfully");
                setSuccessLogin(true);
                // alert("login successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <Helmet>
                    <title>Sign In | Appon Luxury</title>
                </Helmet>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="hero-content flex-col w-1/4">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full shadow-2xl bg-gray-50 rounded-2xl">
                            <form className="card-body pb-3" onSubmit={logInBtn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-1">
                                    <button className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">Login</button>
                                </div>
                            </form>
                            <div className="flex items-center justify-between px-8 mb-4">
                                <label className="label pt-0 pb-0">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                                <label className="label pt-0 pb-0">
                                    <p className="label-text-alt link link-hover">
                                        You have no accout?{" "}
                                        <span className="link link-hover text-[#0356f9]">
                                            <Link to="/register">Sign Up Here</Link>
                                        </span>
                                    </p>
                                </label>
                            </div>
                            <div className="flex items-center justify-center gap-3 pb-3">
                                <button onClick={googleSignInBtn} className="text-3xl p-3 rounded-full shadow-2xl opacity-100	">
                                    <FcGoogle />
                                </button>
                                <button className="text-3xl p-3 rounded-full shadow-inner">
                                    <FaGithub />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;
