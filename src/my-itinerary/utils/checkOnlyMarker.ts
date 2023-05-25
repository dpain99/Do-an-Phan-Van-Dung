import mapboxgl from 'mapbox-gl';
import { useState } from 'react';

interface Marker {
  coord: number[];
  marker: mapboxgl.Marker;
}

export function checkOnlyMarker(coord: number[], map: mapboxgl.Map): void {
  const [markers, setMarkers] = useState<Marker[]>([]);

  const existingMarker = findMarkerByCoordinate(coord, markers);
  if (!existingMarker) {
    const marker = new mapboxgl.Marker().setLngLat([coord[0], coord[1]]).addTo(map);
    setMarkers((prevMarkers) => [...prevMarkers, { coord, marker }]);
  }
}

function findMarkerByCoordinate(coord: number[], markers: Marker[]): Marker | undefined {
  return markers.find(
    (marker) => marker.coord[0] === coord[0] && marker.coord[1] === coord[1]
  );
}
