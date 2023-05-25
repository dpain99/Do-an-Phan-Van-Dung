import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const HoangMaiLocations: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 1,
        name: 'Công Viên Yên Sở',
        src: 'https://vcdn-kinhdoanh.vnecdn.net/2019/02/22/gamuda-yen-so-1-7152-1550808311.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=bL2TekghaZ3Cdy-gRWEd2Q'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.85456727783225, 20.964368534585113]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 2,
        name: 'Đền Lừ',
        src: 'https://mytourcdn.com/upload_images/Image/Minh%20Hoang/ha%20noi/den%20lu/81695890.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.85743949687232, 20.981850499624752]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        name: 'Chùa Pháp Vân',
        src: 'https://images2.thanhnien.vn/Uploaded/vuphuong/2022_06_01/chua-phap-van15-6948.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.84208052385877, 20.968610047531374]
      }
    }
  ]
};
