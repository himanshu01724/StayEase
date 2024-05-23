import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
    error: (err) => {
      toast.message(err.message);
    },
  });

  return { cabins, isLoading };
}
