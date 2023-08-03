/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import HomePageCard from "../products/HomePageCard";

const ProductCategorySwiper = ({ category, products, SectionTitle }) => {
  return (
    <div className="container px-10 mb-5">
      <div className="flex justify-between mb-5">
        <p className="text-xl font-semibold text-red-500">{SectionTitle}</p>

        <Link to="products/category">
          {" "}
          <button className="btn btn-primary">See more</button>
        </Link>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        autoplay={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products?.slice(0, 5).map((product) => (
          <SwiperSlide key={product?._id}>
            <HomePageCard key={product?._id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCategorySwiper;
