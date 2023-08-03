/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import defaultImage from "../../assets/coursephoto/p1.jpg"
const HomePageCard = ({ product }) => {
  
  return (
    <div className="card w-64 h-72 p-1 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl">
      <figure className=" pt-2">
        <img alt="example" src={product?.url || defaultImage } height={200} width={200} />
   
      </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="font-bold text-cyan-700 ">{product?.name}</h6>

        <p className="text-bold text-cyan-400">
          Brand:{product?.company}
        </p>
      
        <h6 className="font-bold  ">
          {product?.price}
        </h6>

        <Link href={`/products/${product?._id}`}>
          <button className="btn  btn-primary  btn-sm">Add to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePageCard;
