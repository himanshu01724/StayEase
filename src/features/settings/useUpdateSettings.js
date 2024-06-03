import { updateSetting } from "../../services/apiSettings";
import { useMutation, QueryClient } from "@tanstack/react-query";

function useUpdateSettings() {
  const queryClient = new QueryClient();
  const { mutate, isLoading: isPending } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { mutate, isPending };
}

export default useUpdateSettings;
