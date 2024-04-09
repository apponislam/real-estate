import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const signUpBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const imagelink = e.target.link.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, imagelink, email, password);
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <div className="flex items-center justify-center min-h-screen">
                <div className="hero-content flex-col w-1/4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Page</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-gray-50 rounded-2xl">
                        <form className="card-body" onSubmit={signUpBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input type="text" placeholder="Paste your image link" name="link" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
