import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { LuMessagesSquare } from "react-icons/lu";

const Slider = () => {
    return (
        <div>
            <Swiper
                className="mySwiper"
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className="h-screen bg-[url('/picture1.jpg')] bg-cover">
                        <div className="h-full container mx-auto flex items-center">
                            <div className="bg-white shadow-2xl rounded-2xl p-8 mx-4 md:mx-4 xl:mx-0" data-aos="fade-right">
                                <p className="md:text-xl mb-4">Miami, Florida</p>
                                <h1 className="opacity-100 text-[#2e3652] font-bold text-3xl md:text-6xl mb-8">
                                    Luxury Penthouse <br /> with Ocean View
                                </h1>
                                <div className="flex justify-center items-center">
                                    <button className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">
                                        <LuMessagesSquare />
                                        Request a Property Appraisal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen bg-[url('/picture2.jpg')] bg-cover">
                        <div className="h-full container mx-auto flex items-center">
                            <div className="bg-white shadow-2xl rounded-2xl p-8 mx-4 md:mx-4 xl:mx-0" data-aos="fade-right">
                                <p className="md:text-xl mb-4">Maui, Hawaii</p>
                                <h1 className="opacity-100 text-[#2e3652] font-bold text-3xl md:text-6xl mb-8">
                                    Exclusive <br /> Beachfront Villa
                                </h1>
                                <div className="flex justify-center items-center">
                                    <button className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">
                                        <LuMessagesSquare />
                                        Request a Property Appraisal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen bg-[url('/picture3.jpg')] bg-cover">
                        <div className="h-full container mx-auto flex items-center">
                            <div className="bg-white shadow-2xl rounded-2xl p-8  mx-4 md:mx-4 xl:mx-0" data-aos="fade-right">
                                <p className="md:text-xl mb-4">Maldives</p>
                                <h1 className="opacity-100 text-[#2e3652] font-bold text-3xl md:text-6xl mb-8">
                                    Luxury Resort <br /> Retreat
                                </h1>
                                <div className="flex justify-center items-center">
                                    <button className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">
                                        <LuMessagesSquare />
                                        Request a Property Appraisal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
