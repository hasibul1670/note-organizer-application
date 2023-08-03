import { useQuery } from "@tanstack/react-query";

const useCourses = () => {
  const {
    data: course = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await fetch(
        "https://summer-camp-school-server-sigma.vercel.app/api/v1/courses"
      );
      return res.json();
    },
  });

  return [course, loading, refetch];
};

export default useCourses;
