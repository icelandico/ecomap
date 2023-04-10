import { type NextPage } from "next";
import dynamic from "next/dynamic";
import ActionsContent from "@/components/ActionsContent/ActionsContent";
import MapOptions from "@/components/MapOptions/MapOptions";
import { useSession } from "next-auth/react";
import Header from "@/components/Texts/Header";
import { Flex, TextInput } from "@mantine/core";
import {useForm, zodResolver} from "@mantine/form";
import { z } from "zod";
import {loginSchema} from "@/pages/auth/login";

enum InitiativeCategory {
  EDUCATION = "EDUCATION",
  ACTION = "ACTION",
  LITTERED_AREA = "LITTERED_AREA",
}

enum InitiativeStatus {
  PLANNED = "PLANNED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export const initiativeSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(25),
  category: z.nativeEnum(InitiativeCategory),
  ownerId: z.string(),
  status: z.nativeEnum(InitiativeStatus),
  startDate: z.date(),
  endDate: z.date(),
  place: z.string(),
  coordinates: z.tuple([z.number(), z.number()]),
});

const AddInitiative: NextPage = () => {
  const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false });
  const { data: session } = useSession();

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      category: null,
      ownerId: "189237",
      status: InitiativeStatus.PLANNED,
      startDate: null,
      endDate: null,
      municipality: null,
      place: "",
      coordinates: null,
    },
    validate: zodResolver(initiativeSchema),
  });

  return (
    <div className="px-3 text-gray-700">
      <div className="flex flex-col items-center justify-center gap-5 rounded bg-slate-50 p-3 shadow-md">
        <Header text={"Add Initiative"} />
        <Flex align="flex-start" justify="center">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="Name"
              {...form.getInputProps("name")}
            />
          </form>
        </Flex>
      </div>
    </div>
  );
};

export default AddInitiative;
