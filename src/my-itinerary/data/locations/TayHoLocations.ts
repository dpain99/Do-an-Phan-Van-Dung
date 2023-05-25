import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const TayHoLocations: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 1,
        name: 'Hồ Tây',
        src: 'https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-ho-tay-ve-chieu.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.8197875467852, 21.05278420452467]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 2,
        name: 'Công viên nước Hồ Tây',
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1641984261/blog/nd8r5yvkv8ncna8vkgmc.webp'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.81723027937065, 21.07318260696251]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        name: 'Chùa Trấn Quốc',
        src: 'https://ik.imagekit.io/tvlk/blog/2022/08/chua-tran-quoc-1-1024x683.jpg?tr=dpr-2,w-675'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.8367346947132, 21.048022501789386]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 4,
        name: 'Phủ Tây Hồ',
        src: 'https://kosmotayhoview.com/wp-content/uploads/2018/06/Ph%E1%BB%A7-T%C3%A2y-H%E1%BB%93-Huy%E1%BB%81n-tho%E1%BA%A1i-linh-thi%C3%AAng-t%C3%ADn-ng%C6%B0%E1%BB%A1ng-th%E1%BB%9D-M%E1%BA%ABu-Tam-T%E1%BB%A9-Ph%E1%BB%A7.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.81957856607752, 21.055201262982187]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 5,
        name: 'Thung lũng hoa Hồ Tây',
        src: 'https://dulichlive.com/ha-noi/wp-content/uploads/sites/8/2020/08/Thung-lung-hoa-Ho-Tay-03.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.81949569471415, 21.074916127964173]
      }
    }
  ]
};
