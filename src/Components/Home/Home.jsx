import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LuxuaryList from "./LuxuaryList/LuxuaryList";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Appon Luxury</title>
            </Helmet>
            <Slider></Slider>
            <LuxuaryList></LuxuaryList>
            <ToastContainer />
        </div>
    );
};

export default Home;
