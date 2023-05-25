import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const DongDaLocations: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Văn miếu Quốc Tử Giám',
        id: 1,
        src: 'https://toquoc.mediacdn.vn/2020/6/29/bin3264-15933854919411848975973.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.8357550257092, 21.028337796015883]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Chùa Phổ Giác',
        id: 2,
        src: 'https://mytourcdn.com/upload_images/Image/Minh%20Hoang/ha%20noi/chua%20pho%20giac/37155899.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.83813435084713, 21.027100754569766]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        name: 'Hồ Đống Đa',
        src: 'https://cdn.baogiaothong.vn/upload/images/2020-2/article_img/2020-06-17/ho-hoa-ng-ca-u-1492135247-1592378783-width1004height565.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.82008436674114, 21.017878052299995]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 4,
        name: 'Gò Đống Đa',
        src: 'https://image.sggp.org.vn/1200x630/Uploaded/2023/ymzmf/2019_02_09/dodongda_ZZKG.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.82432217584626, 21.013021941046112]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 5,
        name: 'Khuê Văn Các',
        src: 'https://static.cand.com.vn/Files/Image/honghai/2020/11/11/e8153735-7771-4549-8060-e0519d1670c8.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.83594091475379, 21.02882012185699]
      }
    }
  ]
};
