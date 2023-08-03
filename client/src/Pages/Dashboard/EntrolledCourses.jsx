/* eslint-disable no-unused-vars */

import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetcartQuery,
  useUpdateCartMutation,
} from "../../redux/features/cart/cartApi";
import LoadingSpinner from "./../Shared/LoadingSpinner";
const EntrolledCourses = () => {
  const email = localStorage.getItem("email");
  const { data, isLoading } = useGetcartQuery(email, {
    refetchOnMountOrArgChange: true,
  });

  const handleCartItemDelete = async (id) => {
    fetch(
      `https://summer-camp-school-server-sigma.vercel.app/api/v1/cart/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          toast.success("Successfully  Deleted !");
        }
      });
  };
  const [updateCart] = useUpdateCartMutation();
  const handleEnroll = async () => {
    const options = {
      email: email,
      enrolled: true,
    };
    const result = await updateCart(options).unwrap();

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your selected courses successfully Enrolled!",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const filteredData = data?.data?.filter((course) => course.enrolled);

  let totalPrice = 0;
  if (filteredData?.length > 0) {
    filteredData.map((f) => {
      totalPrice += f?.course.price ?? 0;
    });
  }

  if (isLoading) {
    <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col w-full  lg:flex-row">
      <div className="grid flex-grow justify-center h-96 card  rounded-box place-items-center  overflow-y-auto">
        <div className="container mx-auto  ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
            {filteredData &&
              filteredData.map((course) => (
                <div
                  key={course._id}
                  className="bg-white card w-full  rounded-lg p-5 shadow-md"
                >
                  <>
                    <div className="flex justify-between">
                      <p className="mt-2">{course.course?.id}</p>
                      <button
                        onClick={() => handleCartItemDelete(course?._id)}
                        className="text-2xl text-blue-600 text btn-outline ml-10"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                    <h1 className="text-xl r  text-cyan-700 font-semibold">
                      {course.course.title}
                    </h1>
                    <h1 className="font-semibold">
                      category: {course?.course?.category}
                    </h1>

                    <progress
                      className="progress m-2 progress-info w-72"
                      value="10"
                      max="100"
                    ></progress>
                    <Link
                      className="border-1 flex justify-center rounded bg-teal-400 p-1"
                      to={`/courses/${course.course?.id}`}
                    >
                      Continue Course
                    </Link>
                  </>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrolledCourses;
