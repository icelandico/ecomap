import { ACTION_OPTIONS } from "@/components/MapOptions/MapOptions";

interface IOptionSelector {
  text: string;
  isActive: boolean;
  type: ACTION_OPTIONS;
  handleChange: (option: ACTION_OPTIONS) => void;
}

const OptionSelector = ({
  text,
  isActive,
  type,
  handleChange,
}: IOptionSelector) => {
  const activeBorder = isActive ? "border-primaryGreen" : "";

  const getActionColor = () => {
    switch (type) {
      case ACTION_OPTIONS.ACTIONS:
        return "bg-primaryBlue";
      case ACTION_OPTIONS.LITTERED_AREAS:
        return "bg-primaryOrange";
      case ACTION_OPTIONS.EDUCATION:
        return "bg-primaryYellow";
    }
  };

  return (
    <div
      className={`flex cursor-pointer items-center justify-between gap-3 rounded border border-solid border-primaryGray p-3 ${activeBorder}`}
      onClick={handleChange}
    >
      <div className={`h-4 w-4 rounded-full ${getActionColor()}`}></div>
      <div className="">{text}</div>
    </div>
  );
};

export default OptionSelector;
