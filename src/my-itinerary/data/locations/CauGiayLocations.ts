import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const CauGiayLocations: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Công viên ngoại giao đoàn',
        id: 1,
        src: 'https://imgs.vietnamnet.vn/Images/2015/10/01/17/20151001172401-l1.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.78735600667058, 21.065152400868246]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Keangnam Landmark 72',
        id: 2,
        src: 'https://lsvinacns.vn/Upload/project/Hanoi-Landmark72-01-s.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.7842434680378, 21.018442570684066]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        name: 'Bảo tàng dân tộc học',
        src: 'https://icdn.dantri.com.vn/zoom/1200_630/2022/05/03/bao-tang-dan-toc-hoc-crop-1651584320570.jpeg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.79875827913105, 21.04052341855799]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 4,
        name: 'Chợ nhà Xanh',
        src: 'https://icdn.dantri.com.vn/thumb_w/680/2022/12/12/2a86ecb859268078d937-1670779084257.jpg?watermark=true'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.78602685269622, 21.03729514154517]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 5,
        name: 'Công viên Cầu Giấy',
        src: 'https://dulich3mien.vn/wp-content/uploads/2021/12/cong-vien-cau-giay-5.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.79092182570918, 21.02840569556215]
      }
    }
  ]
};
