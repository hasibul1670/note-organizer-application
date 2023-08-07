import { useQuery } from "@tanstack/react-query";
const useNotes = () => {
  const token = localStorage.getItem("token");
  const {
    data: course = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/api/v1/note", {
        headers: {
          authorization: `${token}`,
        },
      });
      return res.json();
    },
  });

  return [course, loading, refetch];
};

export default useNotes;
