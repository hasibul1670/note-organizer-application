/* eslint-disable react/no-unescaped-entities */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LocalStorageImg from "../../Helpers/LocalStorageImg";
import img1 from "../../assets/home/01.jpg";
import img3 from "../../assets/home/03.jpg";
import img4 from "../../assets/home/06.jpg";

import ImagePreLoader from "./../../Helpers/ImagePreLoader";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper";

const Banner = () => {
  const imageUrls = [img1, img3, img4];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <ImagePreLoader imageUrls={imageUrls} />
        <LocalStorageImg imageUrls={imageUrls} />

        <SwiperSlide className="relative  w-full">
          <LazyLoadImage src={img1} className="rounded-xl" alt="Image 1" />
          <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)]">
            <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">
              <h2 className="md:text-5xl text-xl md:mt-0  font-bold">
                {" "}
                <br className="md:flex hidden" />
                <span className="text-pink-500">
                  <span className="text-white">Join the</span> Sunlight Academy
                  !
                </span>{" "}
                <br />
                Summer School Camp
              </h2>

              <h6 className="font-bold md:text-sm text-xs text-gray-300">
                Experience the ultimate summer school camp adventure at Sunlight
                Academy! Join us for an enriching and exciting summer filled
                with learning, exploration,
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative  w-full">
          <LazyLoadImage src={img4} className="rounded-xl" alt="Image 1" />
          <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)]">
            <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">
              <h2 className="md:text-5xl text-xl md:mt-0  font-bold">
                {" "}
                <br className="md:flex hidden" />
                <span className="text-yellow-400">
                  <span className="text-white">Join the</span> Sunlight Academy
                  !
                </span>{" "}
                <br />
                Summer School Camp
              </h2>

              <h6 className="font-bold md:text-sm text-xs text-gray-300">
                Experience the ultimate summer school camp adventure at Sunlight
                Academy! Join us for an enriching and exciting summer filled
                with learning, exploration, and unforgettable memories.
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative  w-full">
          <LazyLoadImage src={img3} className="rounded-xl" alt="Image 1" />
          <div className="absolute h-full flex rounded-xl md:p-0  py-16 items-center  left-0 top-0  bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)]">
            <div className="text-white md:space-y-7 md:w-2/3 w-full pl-12">
              <h2 className="md:text-5xl text-xl md:mt-0  font-bold">
                {" "}
                <br className="md:flex hidden" />
                <span className="text-green-500">
                  <span className="text-white">Join the</span> Sunlight Academy
                  !
                </span>{" "}
                <br />
                Summer School Camp
              </h2>

              <h6 className="font-bold md:text-sm text-xs text-gray-300">
                Experience the ultimate summer school camp adventure at Sunlight
                Academy! Join us for an enriching and exciting summer filled
                with learning, exploration.
              </h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
