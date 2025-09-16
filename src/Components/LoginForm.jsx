import { Box,  Button, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function LoginForm({ onLogin }) {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    onLogin(data); 
  };

  return (
    <Box as="form" onSubmit={handleSubmit(submit)} p={4} borderWidth="1px" borderRadius="md">
      <Stack spacing={3}>
        <Input placeholder="Email" {...register("email", { required: true })} />
        <Input type="password" placeholder="Password" {...register("password", { required: true })} />
        <Button type="submit">Login</Button>
      </Stack>
    </Box>
  );
}
