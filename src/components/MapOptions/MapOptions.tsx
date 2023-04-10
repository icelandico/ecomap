import { Button } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import OptionSelector from "@/components/MapOptions/OptionSelector";
import { useState } from "react";
import { type Session } from "next-auth";
import LinkButton from "@/components/Buttons/LinkButton";

export enum ACTION_OPTIONS {
  ACTIONS = "ACTIONS",
  LITTERED_AREAS = "LITTERED AREAS",
  EDUCATION = "EDUCATION",
}

interface IMapOptions {
  session: Session | null;
}

const MapOptions = ({ session }: IMapOptions) => {
  const [activeOption, setActiveOption] = useState<ACTION_OPTIONS>(
    ACTION_OPTIONS.ACTIONS
  );

  const handleChangeOption = (option: ACTION_OPTIONS) =>
    setActiveOption(option);

  return (
    <div className="mb-5 flex items-center justify-between rounded bg-slate-50 p-2 shadow-md">
      <div className="flex gap-3">
        <OptionSelector
          text={"Actions"}
          type={ACTION_OPTIONS.ACTIONS}
          isActive={activeOption === ACTION_OPTIONS.ACTIONS}
          handleChange={() => handleChangeOption(ACTION_OPTIONS.ACTIONS)}
        />
        <OptionSelector
          text={"Littered Areas"}
          type={ACTION_OPTIONS.LITTERED_AREAS}
          isActive={activeOption === ACTION_OPTIONS.LITTERED_AREAS}
          handleChange={() => handleChangeOption(ACTION_OPTIONS.LITTERED_AREAS)}
        />
        <OptionSelector
          text={"Educational actions"}
          type={ACTION_OPTIONS.EDUCATION}
          isActive={activeOption === ACTION_OPTIONS.EDUCATION}
          handleChange={() => handleChangeOption(ACTION_OPTIONS.EDUCATION)}
        />
      </div>
      <div>
        {session ? (
          <LinkButton
            variant={"outline"}
            leftIcon={<IconCirclePlus />}
            route={"/add-initiative"}
            text={"Create Initiative"}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MapOptions;
