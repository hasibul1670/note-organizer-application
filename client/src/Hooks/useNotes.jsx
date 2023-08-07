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
      const res = await fetch("https://noteapp-amber.vercel.app/api/v1/note", {
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
