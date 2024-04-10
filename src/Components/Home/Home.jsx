import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Appon Luxury</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;
