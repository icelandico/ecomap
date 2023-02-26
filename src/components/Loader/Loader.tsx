import { LoadingOverlay } from "@mantine/core";

const Loader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <LoadingOverlay
      visible={isVisible}
      loaderProps={{
        size: "lg",
        color: "green.6",
        variant: "bars",
      }}
    />
  );
};

export default Loader;
