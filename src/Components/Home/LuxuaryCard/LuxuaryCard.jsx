import PropTypes from "prop-types";
import { GiVillage } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const LuxuaryCard = ({ luxuary }) => {
    const { image, estate_title, status, segment_name, location, area, price, id } = luxuary;
    // console.log(luxuary);
    return (
        <div className="border border-[#13131326] p-3 md:p-6 rounded-2xl w-auto mx-3 md:mx-0" data-aos="zoom-in-down">
            <div className="mb-4 relative">
                <img src={image} className="w-full" />
                <p className="bg-gray-950 absolute top-4 right-4 text-white p-2 rounded-md">{status}</p>
            </div>
            <p className="font-semibold mb-3">{estate_title}</p>
            <div className="flex items-center mb-4 text-green-600">
                <div className="text-2xl mr-3">
                    <GiVillage />
                </div>
                <p className="font-bold text-xl">{segment_name}</p>
            </div>
            <div className="flex items-center mb-4">
                <div className="flex items-center mr-8 text-blue-400">
                    <div className="text-xs mr-2">
                        <ImLocation />
                    </div>
                    <p className="text-xs">{location}</p>
                </div>
                <div className="flex items-center mr-8">
                    <div className="text-xs mr-2">
                        <IoHome />
                    </div>
                    <p className="text-xs">{area}</p>
                </div>
                <div className="flex items-center font-bold mr-8 text-yellow-600">
                    <p className="text-xs">For {status}</p>
                </div>
            </div>
            <h2 className="mb-4 font-black">
                Price: <span className="text-[#216c2a]">{price}</span>
            </h2>
            <Link to={`/${id}`}>
                <button className="btn btn-primary bg-[#0356f9] border-[#0356f9] hover:bg-[#0356f9] rounded-none text-white w-full">View Details</button>
            </Link>
        </div>
    );
};

LuxuaryCard.propTypes = {
    luxuary: PropTypes.object,
};

export default LuxuaryCard;
