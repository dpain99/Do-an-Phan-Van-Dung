import { getDirection } from '../service';

export function useGetDirection(
  vehicle: string,
  start: number[],
  end: number[],
  waypoints: string
) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const fetchData = async () => {
      try {
        const response = await getDirection(vehicle, start, end, waypoints);
        const json = response.data;
        const data = json.routes[0];
        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    fetchData();
  });
}
