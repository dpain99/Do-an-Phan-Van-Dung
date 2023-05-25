import { IDataDistrict } from 'src/my-itinerary/interface';
import { BaDinhLocation } from './BaDinhLocations';
import { HoanKiemLocations } from './HoanKiemLocations';
import { TayHoLocations } from './TayHoLocations';
import { CauGiayLocations } from './CauGiayLocations';
import { DongDaLocations } from './DongDaLocations';
import { HaiBaTrungLocations } from './HaiBaTrungLocations';
import { ThanhXuanLocations } from './ThanhXuanLocations';
import { BacTuLiemLocations } from './BacTuLiemLocations';
import { NamTuLiemLocations } from './NamTuLiemLocations';
import { HoangMaiLocations } from './HoangMaiLocations';

export const locationsOnDistricts: IDataDistrict[] = [
  {
    src: 'BaDinhLocations-src',
    layer: 'BaDinhLocations-layer',
    color: 'white',
    id: 1,
    value: BaDinhLocation
  },
  {
    src: 'HoanKiem-src',
    layer: 'HoanKiem-layer',
    color: 'blue',
    id: 2,
    value: HoanKiemLocations
  },
  {
    src: 'TayHo-src',
    layer: 'TayHo-layer',
    color: 'yellow',
    id: 3,
    value: TayHoLocations
  },
  {
    src: 'CauGiay-src',
    layer: 'CauGiay-layer',
    color: 'green',
    id: 4,
    value: CauGiayLocations
  },
  {
    src: 'DongDa-src',
    layer: 'DongDa-layer',
    color: 'purple',
    id: 5,
    value: DongDaLocations
  },
  {
    src: 'HaiBaTrung-src',
    layer: 'HaiBaTrung-layer',
    color: 'pink',
    id: 6,
    value: HaiBaTrungLocations
  },
  {
    src: 'ThanhXuan-src',
    layer: 'ThanhXuan-layer',
    color: 'gray',
    id: 7,
    value: ThanhXuanLocations
  },
  {
    src: 'BacTuLiem-src',
    layer: 'BacTuLiem-layer',
    color: 'blue',
    id: 8,
    value: BacTuLiemLocations
  },
  {
    src: 'NamTuLiem-src',
    layer: 'NamTuLiem-layer',
    color: 'blue',
    id: 9,
    value: NamTuLiemLocations
  },
  {
    src: 'HoangMai-src',
    layer: 'HoangMai-layer',
    color: 'blue',
    id: 10,
    value: HoangMaiLocations
  }
];

export default locationsOnDistricts;
