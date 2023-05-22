import axiosInstance from 'src/common/utils/axios';

export const getSearch = (textValue: string) => {
  return axiosInstance.get(
    `geocoding/v5/mapbox.places/${textValue}.json?country=VN&language=vi&access_token=sk.eyJ1IjoiZHBhaW45OSIsImEiOiJjbGhzNzYyczQwNG5hM2VwNWg1NDV2ODJoIn0.zw62mSxlwqWmHO4kENBAfA`
  );
};
