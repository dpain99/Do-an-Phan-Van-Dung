import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const BaDinhLocation: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 1,
        name: 'Hoàng Thành Thăng Long',
        src: 'https://ik.imagekit.io/tvlk/blog/2022/03/hoang-thanh-thang-long-1.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.84020207983448, 21.035488454753732]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 2,
        name: 'Cột cờ Hà Nội',
        src: 'https://ik.imagekit.io/tvlk/blog/2022/08/cot-co-ha-noi-1.jpg?tr=dpr-2,w-675'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.83985753940092, 21.03289605776377]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        name: 'Lăng chủ tịch Hồ Chí Minh',
        src: 'https://ik.imagekit.io/tvlk/blog/2023/02/lang-chu-tich%E2%80%93ho-chi-minh-2.png?tr=dpr-2,w-675'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.8346452375467, 21.037037473100746]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 4,
        name: 'Nhà sàn Bác Hồ',
        src: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/nha-san-bac-ho.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.8332142394011, 21.03833139921561]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 5,
        name: 'Đền Quán Thánh',
        src: 'https://loiphong.vn/uploaded/10.GOC-TU-VAN/305.den-quan-thanh/den-quan-thanh-01.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.83649188172852, 21.043255513969836]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 6,
        name: 'Công viên thủ lệ',
        src: 'https://nemtv.vn/wp-content/uploads/2019/02/cong-vien-thu-le-ha-noi-10-nemtv.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.80557669707356, 21.030850563179094]
      }
    }
  ]
};
