import axiosInstance from 'src/common/utils/axios';

export const getDirection = (
  vehicle: string,
  start: number[],
  end: number[],
  waypoints: string
) => {
  return axiosInstance.get(
    `directions/v5/mapbox/${vehicle}/${start[0]},${start[1]};${waypoints};${end[0]},${end[1]}?steps=true&language=vi&geometries=geojson&access_token=sk.eyJ1IjoiZHBhaW45OSIsImEiOiJjbGhzNzYyczQwNG5hM2VwNWg1NDV2ODJoIn0.zw62mSxlwqWmHO4kENBAfA`
  );
};
