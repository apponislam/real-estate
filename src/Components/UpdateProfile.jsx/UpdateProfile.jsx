import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Update your Profile | Appon Luxury</title>
            </Helmet>
            <h1>This Is Update Profile Page</h1>
            <div className="container mx-auto">
                <div className="flex justify-between items-center p-2">
                    <div className="skeleton h-14 w-64"></div>
                    <div className="skeleton h-14 w-64"></div>
                    <div className="skeleton h-14 w-64"></div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
