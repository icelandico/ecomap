import { type NextPage } from "next";
import { PasswordInput, TextInput, Title } from "@mantine/core";
import { IconAt, IconLock, IconUser } from "@tabler/icons-react";

import { api } from "@/utils/api";
import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";

const Register: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmedPassword: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      username: (value) =>
        /([a-zA-Z]+){4,}/.test(value) ? null : "Invalid name",
      password: (value) =>
        /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$@%&? "]).*$/.test(value)
          ? null
          : "Invalid password",
      confirmedPassword: (value) =>
        value === form.values.password ? null : "Passwords don't match",
    },
  });

  return (
    <div className="m-0 m-auto flex w-1/5 flex-col items-center justify-center">
      <Title className="mb-4" order={2}>
        Create account
      </Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          className="mb-2 w-full"
          icon={<IconUser />}
          label="Your name"
          {...form.getInputProps("username")}
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
          {...form.getInputProps("confirmedPassword")}
        />
        <Button type="submit" className="mt-6 w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
