import "animate.css";
import { useLoaderData } from "react-router-dom";
import LuxuaryCard from "../LuxuaryCard/LuxuaryCard";
import { ToastContainer } from "react-toastify";

const LuxuaryList = () => {
    const luxuaries = useLoaderData();
    // console.log(luxuaries);

    return (
        <div className="container mx-auto">
            <div className="py-20">
                <h1 className="animate__animated animate__heartBeat text-center text-6xl mb-20">Luxury Proparty List</h1>
                <div>
                    {
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 w-full">
                            {luxuaries.map((luxuary) => (
                                <LuxuaryCard key={luxuary.id} luxuary={luxuary}></LuxuaryCard>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LuxuaryList;
