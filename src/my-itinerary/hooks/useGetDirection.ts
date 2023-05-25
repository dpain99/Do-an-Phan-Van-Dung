import { getDirection } from '../service';

export function useGetDirection(vehicle: string, start: number[], end: number[]) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const fetchData = async () => {
      try {
        const response = await getDirection(vehicle, start, end);
        const json = response.data;
        const data = json.routes[0];
        resolve(data); // Trả về toàn bộ đối tượng dữ liệu route
      } catch (error) {
        reject(error); // Trả về lỗi thông qua Promise
      }
    };
    fetchData();
  });
}
