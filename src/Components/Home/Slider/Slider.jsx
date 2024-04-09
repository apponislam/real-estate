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
                    <div className="h-screen bg-[url('picture1.jpg')] bg-cover">
                        <div className="h-full container mx-auto flex items-center">
                            <div className="bg-white shadow-2xl rounded-2xl p-8" data-aos="fade-right">
                                <p className="text-xl mb-4">Chorley, United Kingdom</p>
                                <h1 className="opacity-100 text-[#2e3652] font-bold text-6xl mb-8">
                                    Exquisite Homes <br /> Await You Here
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
                    <div className="h-screen bg-[url('picture2.jpg')] bg-cover">
                        <div className="h-full container mx-auto flex items-center">
                            <div className="bg-white shadow-2xl rounded-2xl p-8" data-aos="fade-right">
                                <p className="text-xl mb-4">Chorley, United Kingdom</p>
                                <h1 className="opacity-100 text-[#2e3652] font-bold text-6xl mb-8">
                                    Luxury Living <br /> Redefined for You
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
                    <div className="h-screen bg-[url('picture3.jpg')] bg-cover">
                        <div className="h-full container mx-auto flex items-center">
                            <div className="bg-white shadow-2xl rounded-2xl p-8" data-aos="fade-right">
                                <p className="text-xl mb-4">Chorley, United Kingdom</p>
                                <h1 className="opacity-100 text-[#2e3652] font-bold text-6xl mb-8">
                                    Elegant Homes <br /> for Discerning Buyers
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
