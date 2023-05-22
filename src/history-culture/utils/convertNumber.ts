type dataType = {
  [key: number]: { label: string; src: string; id: string };
};
export const convertNumber = (value: number) => {
  const data: dataType = {
    0: {
      id: 'cot-co',
      label: 'Cột cờ Hà Nội',
      src: 'https://ik.imagekit.io/tvlk/blog/2022/08/cot-co-ha-noi-1.jpg?tr=dpr-2,w-675'
    },
    1: {
      id: 'den-quan-thanh',
      label: 'Đền Quán Thánh',
      src: 'https://loiphong.vn/uploaded/10.GOC-TU-VAN/305.den-quan-thanh/den-quan-thanh-01.jpg'
    },
    2: {
      id: 'nha-hat-lon',
      label: 'Nhà Hát Lớn',
      src: 'https://ik.imagekit.io/tvlk/blog/2022/08/nha-hat-lon-ha-noi-1.jpg?tr=dpr-2,w-675'
    },
    3: {
      id: 'nha-tu-hoa-lo',
      label: 'Nhà Tù Hỏa Lò',
      src: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/nha-tu-hoa-lo.jpg'
    },
    4: {
      id: 'ga-hang-co',
      label: 'Ga Hàng Cỏ (Ga Hà Nội)',
      src: 'https://owa.bestprice.vn/images/media/ga-hang-co-1-624ad46736914.jpg'
    },
    5: {
      id: 'cau-long-bien',
      label: 'Cầu Long Biên',
      src: 'https://nhn.1cdn.vn/2022/08/30/cdn-arttimes-vn-1657555284-caulongbien-lehuy_uxxz.jpg'
    },
    6: {
      id: 'cho-dong-xuan',
      label: 'Chợ Đồng Xuân',
      src: 'https://bieudienthuccanh.com/userfiles/image/ha-noi/2021/cho-dong-xuan/1-hinh-anh-cong-cho-dong-xuan.jpg'
    },
    7: {
      id: 'hoang-thanh-thang-long',
      label: 'Hoàng Thành Thăng Long',
      src: 'https://photo-cms-plo.epicdn.me/w850/Uploaded/2023/bzwvoxpc/2022_08_31/hoang-thanh-thang-long-834.jpg'
    },
    8: {
      id: 'den-ngoc-son',
      label: 'Đền Ngọc Sơn',
      src: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/cau-the-huc-den-ngoc-son.jpg'
    }
  };
  return data[value];
};
