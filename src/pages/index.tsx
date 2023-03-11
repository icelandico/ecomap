import { type NextPage } from "next";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false });

  return (
    <div className="ml-4 flex h-1/2 border-2 border-gray-300 p-3 text-gray-700 shadow-md">
      <Map />
    </div>
  );
};

export default Home;
