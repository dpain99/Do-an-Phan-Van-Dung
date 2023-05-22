type dataType = {
  [key: number]: { coordinate: number[] };
};
export const convertCoordinate = (value: number) => {
  const data: dataType = {
    0: {
      coordinate: [105.83565846638278, 21.02831776735798]
    },
    1: {
      coordinate: [105.83349154918317, 21.036051756957065]
    },
    2: {
      coordinate: [105.83670250871057, 21.048162683803593]
    },
    3: {
      coordinate: [105.84903623940082, 21.029096380748555]
    },
    4: {
      coordinate: [105.86756613798705, 20.995485300039892]
    },
    5: {
      coordinate: [105.85052950685578, 21.03430932901148]
    },
    6: {
      coordinate: [105.85265437380043, 21.0296359578504]
    },
    7: {
      coordinate: [105.83565846638278, 21.02831776735798]
    },
    8: {
      coordinate: [105.83457013569227, 21.037137610503432]
    }
  };
  return data[value];
};
