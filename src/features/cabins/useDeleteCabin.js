import { deleteCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, mutate };
}
