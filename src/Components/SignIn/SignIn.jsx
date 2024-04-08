import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignIn = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <div className="flex items-center justify-center min-h-screen">
                <div className="hero-content flex-col w-1/4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-gray-50 rounded-2xl">
                        <form className="card-body pb-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9]">Login</button>
                            </div>
                        </form>
                        <label className="label pl-8 pt-0 pb-0">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                        <div className="flex items-center justify-center gap-3 pb-3">
                            <button className="text-3xl p-3 rounded-full shadow-2xl opacity-100	">
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
    );
};

export default SignIn;
