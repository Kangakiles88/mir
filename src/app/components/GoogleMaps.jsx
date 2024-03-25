import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMaps = () => {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "quarterly",
      });

      const { Map, InfoWindow } = await loader.importLibrary("maps");

      const locationInMap = {
        lat: 37.31031216687911,
        lng: 126.831385164418,
      };

      // MARKER
      const { Marker } = await loader.importLibrary("marker");

      const options = {
        center: locationInMap,
        zoom: 15,
        mapId: "DEMO_MAP_ID",
      };

      const map = new Map(mapRef.current, options);

      // add the marker in the map
      const marker = new Marker({
        map: map,
        position: locationInMap,
      });

      const infoWindow = new InfoWindow({
        content:
          "<div><strong>경기도 안산시 단원구 광덕2로 185-4 301호<br/> 미르노래광장<br/><a href='tel:01062855760'>010-6285-5760</a></strong></div>",
      });

      infoWindow.open(map, marker);
    };

    initializeMap();
  }, []);

  return (
    <div
      className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] items-center rounded-lg opacity-80 p-4 md:p-0"
      ref={mapRef}
    ></div>
  );
};

export default GoogleMaps;
