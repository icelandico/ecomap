import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface IMap {
  styles?: string;
}

const Map = ({ styles }: IMap) => {
  return (
    <MapContainer
      className={`z-0 h-screen ${styles}`}
      center={[54.505, 18.33]}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
