type dataType = {
  [key: number]: { coordinate: number[] };
};
export const convertCoordinate = (value: number) => {
  const data: dataType = {
    0: {
      coordinate: [105.83978094336483, 21.032762040827553]
    },
    1: {
      coordinate: [105.83649188172852, 21.043215460662015]
    },
    2: {
      coordinate: [105.8577236375463, 21.024312555866715]
    },
    3: {
      coordinate: [105.84644590870998, 21.025509942070858]
    },
    4: {
      coordinate: [105.84111475289167, 21.02457063078069]
    },
    5: {
      coordinate: [105.86084770871051, 21.04443339264707]
    },
    6: {
      coordinate: [105.84996359336498, 1.038403735797047]
    },
    7: {
      coordinate: [105.84028791056464, 21.035548537834146]
    },
    8: {
      coordinate: [105.85231662220113, 21.03101343372532]
    }
  };
  return data[value];
};
