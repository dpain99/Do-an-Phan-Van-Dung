type dataType = {
  [key: number]: { coordinate: number[] };
};
export const convertCoordinate = (value: number) => {
  const data: dataType = {
    0: {
      coordinate: [105.79916464782501, 21.025787448417205]
    },
    1: {
      coordinate: [105.84637402590998, 21.03378672988997]
    },
    2: {
      coordinate: [105.84948428358271, 21.03574928505271]
    },
    3: {
      coordinate: [105.7877825682359, 20.982623859098375]
    },
    4: {
      coordinate: [105.8487388375465, 21.0326906912397]
    },
    5: {
      coordinate: [105.85132639558094, 21.036733300660313]
    },
    6: {
      coordinate: [105.84786662405548, 21.02967323703264]
    },
    7: {
      coordinate: [105.84902355289181, 21.029894551000858]
    },
    8: {
      coordinate: [105.85445362220119, 21.033746771905065]
    }
  };
  return data[value];
};
