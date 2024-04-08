import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Slider = () => {
    return (
        <div>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <img src="picture1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="picture2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="picture3.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
