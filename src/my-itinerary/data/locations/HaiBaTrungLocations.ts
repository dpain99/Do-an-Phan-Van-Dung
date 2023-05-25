import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const HaiBaTrungLocations: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Công viên Thống Nhất',
        id: 1,
        src: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/Ho_7_Mau_4-e1505183934226.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.84416343740699, 21.01290757095162]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Thủy Cung TimeCity',
        id: 2,
        src: 'https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/sites/default/files/styles/large/public/2022-08/thuy_cung_times_city.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.86765196789142, 20.995805828786377]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        name: 'Vincom Center Bà Triệu',
        src: 'https://vcdn-kinhdoanh.vnecdn.net/2022/10/28/-9548-1666925949.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=0Wm1Ym7congBxxAuJwXcDw'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.84947256618888, 21.011247959322958]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 4,
        name: 'Hà Nội Creative City',
        src: 'https://halotravel.vn/wp-content/uploads/2021/09/Hanoi-Creative-City-7.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.86310374132698, 21.012163433115845]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 5,
        name: 'Jump Arena Tăng Bạt Hổ',
        src: 'https://static.vinwonders.com/production/jump-arena-nhay-bat-nhun-ha-noi-banner.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.86015905735687, 21.01804255304641]
      }
    }
  ]
};
