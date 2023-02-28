import { type NextPage } from "next";
import { PasswordInput, TextInput, Title } from "@mantine/core";
import { IconAt, IconLock, IconUser } from "@tabler/icons-react";
import { Modal, Button } from "@mantine/core";

import { api } from "@/utils/api";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import Loader from "@/components/Loader/Loader";
import { useState } from "react";
import { useRouter } from "next/router";
import InformationBadge from "@/components/InformationBadge/InformationBadge";

type CreateUserForm = {
  name: string;
  password: string;
  email: string;
};

const Register: NextPage = () => {
  const [confirmationOpened, setConfirmationOpened] = useState(false);
  const router = useRouter();

  const createUser = api.user.createUser.useMutation({
    onSuccess: () => setConfirmationOpened(true),
  });

  const handleAfterRegister = async () => {
    setConfirmationOpened(false);
    form.reset();
    await router.push("/login");
  };

  const createUserSchema = z
    .object({
      name: z.string().min(4, { message: "Name too short" }),
      email: z.string().email({ message: "Invalid email" }),
      password: z
        .string()
        .min(8, { message: "Password too short" })
        .refine(
          (value) => /^.*[!#$@%&?_].*$/.test(value),
          "Must contain special character: !#$@%&?_"
        ),
      confirmPassword: z
        .string()
        .min(1, { message: "Confirm password is required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords don't match",
    });

  const form = useForm({
    validate: zodResolver(createUserSchema),
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegisterUser = (user: CreateUserForm) => {
    setConfirmationOpened(true);
    createUser.mutate({
      name: user.name,
      password: user.password,
      email: user.email,
    });
  };

  return (
    <div className="relative m-0 m-auto flex w-1/5 flex-col items-center justify-center">
      <Loader isVisible={createUser.isLoading} />
      <Title className="mb-4" order={2}>
        Create account
      </Title>
      <form onSubmit={form.onSubmit((values) => handleRegisterUser(values))}>
        <TextInput
          className="mb-2 w-full"
          icon={<IconUser />}
          label="Your name"
          {...form.getInputProps("name")}
        />
        <TextInput
          className="mb-2 w-full"
          icon={<IconAt />}
          label="Your email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          className="mb-2 w-full"
          icon={<IconLock />}
          label="Your password"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          className="mb-2 w-full"
          icon={<IconLock />}
          label="Confirm password"
          {...form.getInputProps("confirmPassword")}
        />
        <Button
          type="submit"
          className="mt-6 w-full"
          loading={createUser.isLoading}
        >
          Submit
        </Button>
      </form>
      <Modal
        opened={confirmationOpened}
        onClose={() => void handleAfterRegister()}
        title="User Registered"
      >
        <InformationBadge
          text={"Account created. You'll be redirected to Login page."}
        />
        <Button onClick={() => void handleAfterRegister()}>Close</Button>
      </Modal>
    </div>
  );
};

export default Register;
