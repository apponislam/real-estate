import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { sendEmailVerification, updateEmail } from "firebase/auth";

const UpdateProfile = () => {
    const { user, updateUser, setLoading } = useContext(AuthContext);

    const updateProfileBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const updatedProfileData = {
            displayName: name,
            photoURL: image,
        };
        console.log(name, image);
        updateUser(user, updatedProfileData)
            .then(() => {
                console.log("profile updated successfully");
                setTimeout(() => {
                    toast.success("Profile updated successfully");
                }, 100);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setTimeout(() => {
                    toast.error("Profile update failed");
                }, 100);
                setLoading(false);
            });
    };

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Update your Profile | Appon Luxury</title>
            </Helmet>
            <div className="py-12 md:py-24 flex items-center justify-center">
                <div className="w-full md:w-7/12 mx-4 md:mx-0">
                    <div className="w-full flex justify-center items-center mb-6">
                        <div className="shadow-2xl p-6 rounded-xl gap-6 w-3/4" data-aos="fade-down">
                            <div className="flex justify-center items-center mb-4">
                                <div className="p-1 border-2 rounded-full border-green-500">
                                    <img className="h-32 w-32 rounded-full" src={user.photoURL || "null.png"} />
                                </div>
                            </div>
                            <div className="flex lg:items-center flex-col lg:flex-row lg:justify-between gap-4 flex-1">
                                <div>
                                    <p className="font-bold">
                                        <span className="font-medium">Name :</span> {user.displayName || "No Name"}
                                    </p>
                                </div>
                                {/* <div>
                                <p className="font-bold">
                                    <span className="font-medium">Username :</span> {user.reloadUserInfo.screenName || "No Username"}
                                </p>
                            </div> */}
                                <div>
                                    <p className="font-bold">
                                        <span className="font-medium">Email :</span> {user.email || "No Email"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl p-6 rounded-xl" data-aos="fade-up">
                        <form onSubmit={updateProfileBtn}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" placeholder="Image URL" name="image" className="input input-bordered" required />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white w-full">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;
