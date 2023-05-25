import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const HoanKiemLocations: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Bốt Hàng Đậu',
        id: 1,
        src: 'https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/03_2020/bot-hang-dau-ha-noi-6.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.84760399502524, 21.040462151024208]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Nhà hát múa rối Thăng Long',
        id: 2,
        src: 'https://tl.cdnchinhphu.vn/Uploads/images/Nha%20hat%20mua%20roi%20Thang%20Long.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.85332513735392, 21.031922918918895]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
        name: 'Nhà thờ lớn Hà Nội',
        src: 'https://ik.imagekit.io/tvlk/blog/2022/08/nha-tho-lon-ha-noi-2-1024x683.jpg?tr=dpr-2,w-675'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.84898259502495, 21.02911640930194]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 4,
        name: 'Hồ Hoàn Kiếm',
        src: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/ho-hoan-kiem-1.png'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.85237542386041, 21.027893469717906]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 5,
        name: 'Phố cổ Hà Nội',
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1636012611/blog/oeggineijcovlggknlxr.webp'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.85061533735396, 21.034239231505957]
      }
    },
    {
      type: 'Feature',
      properties: {
        id: 6,
        name: 'Phố bích họa Phùng Hưng',
        src: 'https://media.mia.vn/uploads/blog-du-lich/pho-bich-hoa-phung-hung-diem-check-in-moi-cua-gioi-tre-ha-noi-02-1639525454.jpg'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.84566626674756, 21.034886611908174]
      }
    }
  ]
};
