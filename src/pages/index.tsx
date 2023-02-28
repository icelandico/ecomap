import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "@/utils/api";
import { Button } from "@mantine/core";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const Map = dynamic(() => import("@/components/Map/Map"), { ssr: false });

  return (
    <div className="text-gray-700 border-gray-300 ml-4 flex h-1/2 border-2 p-3 shadow-md">
      <Map />
    </div>
  );
};

export default Home;
