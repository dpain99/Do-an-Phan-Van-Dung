import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const NamTuLiemLocations: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Bảo tàng Hà Nội',
        id: 1,
        src: 'https://statics.vinpearl.com/bao-tang-ha-noi-01_1678381369.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.7865491582417, 1.010324002709606]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Làng cổ Tây Mỗ',
        id: 2,
        src: 'https://cdn3.ivivu.com/2014/04/ngoi-lang-len-hang-tram-bo-phim-viet-nam-ivivu4.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.74625892385968, 21.001958228429828]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        name: 'Làng Hoa Tây Tựu',
        src: 'https://laodongthudo.vn/stores/news_dataimages/quocdai/032017/23/09/4311_lang_hoa_tay_tYu.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.74286375454597, 21.0728432663721]
      }
    }
  ]
};
