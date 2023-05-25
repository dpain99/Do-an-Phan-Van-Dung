import { HoangMaiDistrict } from './HoangMaiDistrict';
import { IDataDistrict } from '../interface';
import { BaDinhDistrict } from './BaDinhDistrict';
import { BacTuLiemDistrict } from './BacTuLiemDistrict';
import { CauGiayDistrict } from './CauGiayDistrict';
import { DongDaDistrict } from './DongDaDistrict';
import { HaiBaTrungDistrict } from './HaiBaTrungDistrict';
import { HoanKiemDistrict } from './HoanKiemDistrict';
import { NamTuLiemDistrict } from './NamTuLiemDistrict';
import { TayHoDistrict } from './TayHoDistrict';
import { ThanhXuanDistrict } from './ThanhXuanDistrict';

const districts: IDataDistrict[] = [
  {
    src: 'BaDinh-src',
    layer: 'BaDinh-layer',
    color: 'red',
    id: 1,
    value: BaDinhDistrict
  },
  {
    src: 'HoanKiem-src',
    layer: 'HoanKiem-layer',
    color: 'blue',
    id: 2,
    value: HoanKiemDistrict
  },
  {
    src: 'TayHo-src',
    layer: 'TayHo-layer',
    color: 'yellow',
    id: 3,
    value: TayHoDistrict
  },
  {
    src: 'CauGiay-src',
    layer: 'CauGiay-layer',
    color: 'green',
    id: 4,
    value: CauGiayDistrict
  },
  {
    src: 'DongDa-src',
    layer: 'DongDa-layer',
    color: 'purple',
    id: 5,
    value: DongDaDistrict
  },
  {
    src: 'HaiBaTrung-src',
    layer: 'HaiBaTrung-layer',
    color: 'pink',
    id: 6,
    value: HaiBaTrungDistrict
  },
  {
    src: 'ThanhXuan-src',
    layer: 'ThanhXuan-layer',
    color: 'gray',
    id: 7,
    value: ThanhXuanDistrict
  },
  {
    src: 'BacTuLiem-src',
    layer: 'BacTuLiem-layer',
    color: 'blue',
    id: 8,
    value: BacTuLiemDistrict
  },
  {
    src: 'NamTuLiem-src',
    layer: 'NamTuLiem-layer',
    color: 'blue',
    id: 9,
    value: NamTuLiemDistrict
  },
  {
    src: 'HoangMai-src',
    layer: 'HoangMai-layer',
    color: 'blue',
    id: 10,
    value: HoangMaiDistrict
  }
];

export default districts;
// { value: 1, label: 'Quan Ba Dinh' },
// { value: 2, label: 'Quan Hoan Kiem' },
// { value: 3, label: 'Quan Tay Ho' },
// { value: 5, label: 'Quan Cau Giay' },
// { value: 6, label: 'Quan Dong Da' },
// { value: 7, label: 'Quan Hai Ba Trung' },
// { value: 9, label: 'Quan Thanh Xuan' },
// { value: 10, label: 'Quan Bac Tu Liem' },
// { value: 11, label: 'Quan Nam Tu Liem' },
// { value: 12, label: 'Quan Ha Dong' }
