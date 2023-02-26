import { Text } from "@mantine/core";
import { IconCircleCheck, IconAlertCircle } from "@tabler/icons-react";
import { themeColors } from "@/styles/colors";

interface InformationBadgeProps {
  text: string;
  isError?: boolean;
}

const InformationBadge = ({ text, isError = false }: InformationBadgeProps) => {
  return (
    <div className="my-6 flex items-center justify-between p-2">
      {isError ? (
        <IconAlertCircle
          className="justify-left flex items-center"
          size={32}
          color={themeColors?.primaryRed}
        />
      ) : (
        <IconCircleCheck
          className="justify-left flex items-center"
          size={32}
          color={themeColors?.primaryGreen}
        />
      )}
      <Text className="ml-4">{text}</Text>
    </div>
  );
};

export default InformationBadge;
