import { type NextPage } from "next";
import dynamic from "next/dynamic";
import ActionsContent from "@/components/ActionsContent/ActionsContent";
import MapOptions from "@/components/MapOptions/MapOptions";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false });
  const { data: session } = useSession();
  return (
    <div className="px-3 text-gray-700">
      <MapOptions session={session} />
      <div className="flex gap-5 rounded bg-slate-50 p-3 shadow-md">
        <Map styles="w-1/2 h-[calc(100vh-9rem)]" />
        <ActionsContent />
      </div>
    </div>
  );
};

export default Home;
