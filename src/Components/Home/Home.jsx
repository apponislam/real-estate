import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Appon Luxury</title>
            </Helmet>
            <Slider></Slider>
            <ToastContainer />
        </div>
    );
};

export default Home;
