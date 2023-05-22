export interface directionParams {
  vehicle: string;
  coordinate: number[];
  semiColon: string;
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

export interface IStateRedux {
  location: number[];
  tab: number;
  route: any;
}
