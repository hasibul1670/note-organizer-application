import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useGetCoursesQuery } from "../../redux/features/course/courseApi";
import ProductCategorySwiper from "./ProductCategorySwiper";
import { filterProductsByCategory } from "./ProductFilter";

const FiverAndPain = () => {
  const { data } = useGetCoursesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products = data?.data;

  const petMedicineProducts = filterProductsByCategory(
    products,
    "Fever & Pain"
  );

  return (
    <ProductCategorySwiper
      category="Fever & Pain"
      SectionTitle="Fever & Pain"
      products={petMedicineProducts}
    />
  );
};

export default FiverAndPain;
