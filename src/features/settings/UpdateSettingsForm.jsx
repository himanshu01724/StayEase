import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { toast } from "react-hot-toast";
import { StyledFormRow, Label } from "../../ui/FormRow";
import useGetSettings from "./useGetSetting";
import Spinner from "../../ui/Spinner";
import useUpdateSettings from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { mutate, isPending } = useUpdateSettings();

  const {
    data: {
      breakfastPricing,
      maxGuestPerStay,
      maxBookingLength,
      minBookingLenght,
    } = {},
    isLoading,
  } = useGetSettings();

  function handleForm(e, filed) {
    console.log(e.target.value, filed);
    const { value } = e.target;
    if (!value) return;
    mutate(
      { [filed]: value },
      {
        onSuccess: () => {
          toast.success("Settings updated successfully");
        },
      }
    );
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <StyledFormRow>
        <Label>Minimum nights/booking</Label>
        <Input
          type="number"
          id="minBookingLenght"
          defaultValue={minBookingLenght}
          onBlur={(e) => handleForm(e, "minBookingLenght")}
          disabled={isPending}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Label>Maximum nights/booking</Label>
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleForm(e, "maxBookingLength")}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Label>Maximum guests/booking</Label>
        <Input
          type="number"
          id="maxGuestPerStay"
          defaultValue={maxGuestPerStay}
          onBlur={(e) => handleForm(e, "maxGuestPerStay")}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Label>Breakfast price</Label>
        <Input
          type="number"
          id="breakfastPricing"
          defaultValue={breakfastPricing}
          onBlur={(e) => handleForm(e, "breakfastPricing")}
        />
      </StyledFormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
