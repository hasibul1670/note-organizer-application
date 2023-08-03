/* eslint-disable no-unused-vars */

import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import image from "../../assets/coursephoto/12.jpg";
import { useSingleCourseQuery } from "../../redux/features/course/courseApi";
import LoadingSpinner from "../Shared/LoadingSpinner";

import { useState } from "react";
import { useCreateCartMutation } from "../../redux/features/cart/cartApi";
import { useAppDispatch } from "./../../redux/hook";

const SingleCourseCard = () => {
  const { id } = useParams();
  const [createCart] = useCreateCartMutation();
  const [addedToCart, setAddedToCart] = useState(false);

  let courseData;

  const dispatch = useAppDispatch();

  const { data: course, isLoading } = useSingleCourseQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  if (course && course.data && course.data.length > 0) {
    courseData = course.data[0];
  } else {
    return (
      <div>
        No Course available.
        <LoadingSpinner />;
      </div>
    );
  }
  if (!courseData) {
    return <div>No Course available.</div>;
  }
  const instructorId = courseData?.instructor?.id;
  courseData = course.data[0];

  const email = localStorage.getItem("email");

  const handleAddToCart = async (course) => {
    try {
      const options = {
        data: { course: course, email: email },
      };
      const result = await createCart(options).unwrap();
      if (result.statusCode === 200) {
        setAddedToCart(true);
        toast.success("Course is Added to Cart Successfully!");
      }
    } catch (error) {
      toast.error("THis Course is Already Added to Cart ");
      setAddedToCart(true);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="py-20">
      <Helmet>
        <title>Course | {courseData.title}</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="text-xs font-bold">{id}</p>
            <h1 className="text-xl text-cyan-400 font-bold">
              {courseData.title}
            </h1>
            <p className=" text-md font-semibold ">
              Category : {courseData.category}
            </p>
            <p className=" text-md font-semibold ">
              Instructor :{" "}
              <Link
                className="link link-success"
                to={`/instructors/${instructorId}`}
              >
                {courseData?.instructor?.name?.firstName}
              </Link>
            </p>
            <p className=" text-md font-semibold ">
              Course Duration : {courseData.startMonth} to {courseData.endMonth}
            </p>
            <p className=" text-md font-semibold ">
              Price : {courseData.price}$
            </p>
            <p className=" text-md font-semibold ">
              Description :{" "}
              <span className="text-sm text-cyan-800">
                Summer Camp School is an educational institution that offers
                enriching programs during the summer break. Designed for
                children and teenagers, it provides a diverse range of
                activities and courses taught by experienced instructors. From
                outdoor adventures and sports to creative arts and academic
                subjects, Summer Camp School offers a dynamic learning
                environment that fosters personal growth and development.
              </span>
            </p>
            <p className=" text-md font-semibold ">
              Rating : {courseData.rating}
            </p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            {addedToCart ? (
              <Link
                to="/dashboard"
                className="btn btn-primary btn-sm mx-2     
      "
              >
                Go to Cart
              </Link>
            ) : (
              <button
                onClick={() => handleAddToCart(courseData)}
                className="btn btn-primary btn-sm mx-2"
              >
                Add to Cart
              </button>
            )}

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCard;
