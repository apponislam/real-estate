import { Helmet } from "react-helmet-async";
import { GiVillage } from "react-icons/gi";
import { useLoaderData, useParams } from "react-router-dom";

const LuxuaryDetails = () => {
    const luxuaries = useLoaderData();
    const id = useParams();
    // console.log(luxuaries.length);
    const numID = parseInt(id.luxuaryId);
    // console.log(numID);

    const luxuary = luxuaries.find((luxuary) => luxuary.id === numID);
    const { image, estate_title, segment_name, description, facilities, area, location, price, status } = luxuary;
    console.log(luxuary);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title> {estate_title} | Appon Luxuary </title>
            </Helmet>
            <div className="py-10 md:py-20 mx-4 md:mx-4 xl:mx-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-12 mx-3 md:mx-0">
                    <div data-aos="fade-right">
                        <img src={image} className="w-full object-cover h-full" />
                    </div>
                    <div data-aos="fade-left">
                        <p className="font-semibold mb-3">Name: {estate_title}</p>
                        <div className="flex items-center py-4 mb-4 text-green-600 border-y">
                            <div className="text-2xl mr-3">
                                <GiVillage />
                            </div>
                            <p className="font-bold text-xl">{segment_name}</p>
                        </div>
                        <h5 className="font-medium worksans mb-6">
                            <span className="font-bold">Review : </span>
                            {description}
                        </h5>
                        <div>
                            <p className="font-bold">Facilities :</p>
                            <ul className="gap-3 worksans pb-5 mb-5 border-b border-[#13131326] list-disc pl-7">
                                {facilities.map((faciliti, idx) => (
                                    <li className="font-normal" key={idx}>
                                        {faciliti}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center mb-3 worksans">
                            <p className="w-28">Area : </p>
                            <p className="font-semibold"> {area}</p>
                        </div>
                        <div className="flex items-center mb-3 worksans">
                            <p className="w-28">Location : </p>
                            <p className="font-semibold">{location}</p>
                        </div>
                        <div className="flex items-center mb-3 worksans">
                            <p className="w-28">Price : </p>
                            <p className="font-semibold">{price}</p>
                        </div>
                        <div className="flex items-center mb-3 worksans">
                            <p className="w-28">Status : </p>
                            <p className="font-semibold">{status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuxuaryDetails;
