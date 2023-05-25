import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const BacTuLiemLocations: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Công viên Hòa Bình',
        id: 1,
        src: 'https://imgs.vietnamnet.vn/Images/2015/10/01/17/20151001172401-l1.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.78749548153255, 21.06512236530748]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Làng cổ Đông Ngạc',
        id: 2,
        src: 'https://kenh14cdn.com/thumb_w/650/2016/img-0855-1472394501310.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.78424636619113, 21.091685612272673]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        name: 'Miếu Đồng cổ',
        src: 'https://bactuliem.hanoi.gov.vn/documents/67915/945235/image003.jpg/b79d6f48-617b-49e9-9358-dafcb090a00e?t=1590467527044'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.74108351036766, 21.05003682525761]
      }
    }
  ]
};
