import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Profile | Appon Luxury</title>
            </Helmet>
            <div className="h-screen flex items-center justify-center">
                <div className="shadow-2xl p-6 rounded-xl w-2/3 relative" data-aos="fade-down">
                    <div className="mb-4">
                        <p className="font-bold text-2xl text-center">
                            <span className="font-medium">Name :</span> {user.displayName || "No Name"}
                        </p>
                    </div>
                    <div className="flex justify-center mb-5">
                        <div className="p-1 border-2 rounded-full border-green-500">
                            <img className="h-60 w-60 rounded-full" src={user.photoURL || "null.png"} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-bold">
                                <span className="font-medium">Email :</span> {user.email || "No Email"}
                            </p>
                        </div>
                        <div>
                            <p className="font-bold">
                                <span className="font-medium">Username :</span> {user.reloadUserInfo.screenName || "No Username"}
                            </p>
                        </div>
                        <div>
                            <p className="font-bold">
                                <span className="font-medium">Number :</span> {user.phoneNumber || "No Number"}
                            </p>
                        </div>
                        <div>
                            <p className={`font-bold ${user.emailVerified ? "text-green-600" : "text-red-600"}`}>
                                <span className="font-medium text-black">Email Verified :</span> {user.emailVerified ? "Verified" : "Not Verified"}
                            </p>
                        </div>
                    </div>
                    <Link to="/updateprofile">
                        <div className="absolute text-2xl top-6 right-6 tooltip" data-tip="Update Your Profile">
                            <FaUserEdit />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
