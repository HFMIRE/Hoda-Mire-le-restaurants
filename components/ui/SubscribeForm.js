import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
export const SubscribeForm = () => {
  const [formValue, setFormValue] = useState(0);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  // need to context to trigger a close modal
  function onSubmit(values) {
    console.log("table number", values);
    setFormValue(values);
  }
  useEffect(() => {
    if (formValue) {
      localStorage.setItem("tableNumber", JSON.stringify(formValue));
    }
  }, [formValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="table-number">
        <FormLabel srOnly>Enter your table number</FormLabel>
        <Input
          color={"orange.100"}
          type="table-number"
          placeholder="table number"
          size="lg"
          fontSize="md"
          focusBorderColor={useColorModeValue("orange.500", "orange.200")}
          {...register("tableNumber")}
        />
      </FormControl>
      <br />
      <Stack>
        <Button
          type="submit"
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="md"
          colorScheme="orange"
          size="lg"
          p={5}
        >
          {/* Let's order */}
        </Button>
      </Stack>
    </form>
  );
};
