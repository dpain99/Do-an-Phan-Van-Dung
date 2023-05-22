export interface ICoordinates {
  locations: number[];
}

export interface DirectionsParams {
  vehicle: string;
  coordinates: string;
  geometries?: string;
  access_token: string;
}

export interface IDataReturnDirections {
  waypoints: [
    {
      location: number[];
      name: string;
    }
  ];
  routes: [
    {
      legs: [
        {
          steps: string[];
          weight: number;
          distance: number;
          summary: string;
          duration: number;
        }
      ];
      weight_name: string;
      geometry: {
        coordinates: [number[]];
        type: string;
      };
      weight: number;
      distance: number;
      duration: number;
    }
  ];
  code: string;
}
