import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useGetSettings() {
  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
    error: (err) => {
      toast.error(err.message);
    },
  });

  return { data, isLoading };
}

export default useGetSettings;
