import { LoadingOverlay } from "@mantine/core";

const Loader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full">
      <LoadingOverlay visible={isVisible} />
    </div>
  );
};

export default Loader;
