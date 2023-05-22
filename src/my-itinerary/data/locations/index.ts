import { IDataDistrict } from 'src/my-itinerary/interface';
import { BaDinhLocation } from './BaDinhLocations';

export const locationsOnDistricts: IDataDistrict[] = [
  {
    src: 'BaDinhLocations-src',
    layer: 'BaDinhLocations-layer',
    color: 'white',
    id: 1,
    value: BaDinhLocation
  }
  //   {
  //     src: 'HoanKiem-src',
  //     layer: 'HoanKiem-layer',
  //     color: 'blue',
  //     id: 2,
  //     value: HoanKiemDistrict
  //   },
  //   {
  //     src: 'TayHo-src',
  //     layer: 'TayHo-layer',
  //     color: 'yellow',
  //     id: 3,
  //     value: TayHoDistrict
  //   },
  //   {
  //     src: 'CauGiay-src',
  //     layer: 'CauGiay-layer',
  //     color: 'green',
  //     id: 4,
  //     value: CauGiayDistrict
  //   },
  //   {
  //     src: 'DongDa-src',
  //     layer: 'DongDa-layer',
  //     color: 'purple',
  //     id: 5,
  //     value: DongDaDistrict
  //   },
  //   {
  //     src: 'HaiBaTrung-src',
  //     layer: 'HaiBaTrung-layer',
  //     color: 'pink',
  //     id: 6,
  //     value: HaiBaTrungDistrict
  //   },
  //   {
  //     src: 'ThanhXuan-src',
  //     layer: 'ThanhXuan-layer',
  //     color: 'gray',
  //     id: 7,
  //     value: ThanhXuanDistrict
  //   },
  //   {
  //     src: 'BacTuLiem-src',
  //     layer: 'BacTuLiem-layer',
  //     color: 'blue',
  //     id: 8,
  //     value: ThanhXuanDistrict
  //   },
  //   {
  //     src: 'NamTuLiem-src',
  //     layer: 'NamTuLiem-layer',
  //     color: 'blue',
  //     id: 9,
  //     value: ThanhXuanDistrict
  //   }
];

export default locationsOnDistricts;
