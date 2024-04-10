import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

const NonSignIn = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <ThreeCircles visible={true} height="100" width="100" color="#0356f9" ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass="" />
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin"></Navigate>;
};

NonSignIn.propTypes = {
    children: PropTypes.node,
};

export default NonSignIn;
