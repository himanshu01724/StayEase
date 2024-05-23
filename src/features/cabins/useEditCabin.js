import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabinApi } from "../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditLoading } = useMutation({
    mutationFn: ({ newCabin, id }) => editCabinApi(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editCabin, isEditLoading };
}
