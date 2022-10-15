import React from "react";
import "./index.css";

import { useLoadScript } from "@react-google-maps/api";

export default function Home() {
  const {} = useLoadScript({
    googleMapsApiKey: "AIzaSyDgyNyKl4Nhz_7rnUtghvUskKZRx0khx-g",
  });
  return <div>map</div>;
}
