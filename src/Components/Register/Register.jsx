import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import auth from "../../Firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";

const Register = () => {
    const { createUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const signUpBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const imagelink = e.target.link.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, imagelink, email, password);

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }
        // if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        //     toast.error("Password must contain at least one uppercase and one lowercase letter");
        //     return;
        // }

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: imagelink,
                })
                    .then(() => {
                        console.log("profile updated successfully");
                        toast.success("registered successfully");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                signOut(auth)
                    .then(() => {
                        console.log("logged out after registration");
                        navigate("/signin");
                        // toast.success("registered successfully");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            });
    };

    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <Helmet>
                <title>Sign Up | Appon Luxury</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen">
                <div className="hero-content flex-col md:w-3/4 lg:w-1/2 2xl:w-1/4">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold">Register Page</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-gray-50 rounded-2xl">
                        <form className="card-body p-4 pb-2 md:p-8 md:pb-2" onSubmit={signUpBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input type="text" placeholder="Paste your image link" name="link" className="input input-bordered" required />
                            </div>
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
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered w-full" required />
                                    <div onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-2 -translate-x-2/4 -translate-y-2/4">
                                        <FaEye />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-1">
                                <button type="submit" className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">
                                    Register
                                </button>
                            </div>
                            <div className="z-50">
                                <ToastContainer />
                            </div>
                        </form>
                        <p className="pl-4 md:pl-8 pb-6 label-text-alt">
                            Already have an account? Please
                            <span className="link link-hover text-[#0356f9]">
                                <Link to="/signin"> Sign In</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
