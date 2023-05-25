import axiosInstance from 'src/common/utils/axios';

export const getSearch = (textValue: string) => {
  return axiosInstance.get(
    `geocoding/v5/mapbox.places/${textValue}.json?country=VN&language=vi&access_token=sk.eyJ1IjoiZHBhaW45OSIsImEiOiJjbGhzNzYyczQwNG5hM2VwNWg1NDV2ODJoIn0.zw62mSxlwqWmHO4kENBAfA`
  );
};

export const getDirection = (vehicle: string, start: number[], end: number[]) => {
  return axiosInstance.get(
    `directions/v5/mapbox/${vehicle}/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&language=vi&geometries=geojson&access_token=sk.eyJ1IjoiZHBhaW45OSIsImEiOiJjbGhzNzYyczQwNG5hM2VwNWg1NDV2ODJoIn0.zw62mSxlwqWmHO4kENBAfA`
  );
};
