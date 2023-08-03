import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useGetCoursesQuery } from "../../redux/features/course/courseApi";
import ProductCategorySwiper from "./ProductCategorySwiper";
import { filterProductsByCategory } from "./ProductFilter";

const BabyCare = () => {
  const { data } = useGetCoursesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products = data?.data;
  const petMedicineProducts = filterProductsByCategory(
    products,
    "Baby Medicine"
  );

  return (
    <ProductCategorySwiper
    SectionTitle="Baby Products & Medicine"
      category= "Baby Medicine"
      products={petMedicineProducts}
    />
  );
};

export default BabyCare;
