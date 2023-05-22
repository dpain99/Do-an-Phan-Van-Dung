type dataType = {
  [key: number]: { label: string; link: string };
};
export const convertNumber = (value: number) => {
  const data: dataType = {
    0: {
      label: 'Văn miếu Quốc Tử Giám',
      link: 'https://cdnstepup.r.worldssl.net/wp-content/uploads/2020/10/van-mieu-quoc-tu-giam-tieng-anh-2.jpg'
    },
    1: {
      label: 'Chùa Một Cột',
      link: 'https://hanoitop10.net/wp-content/uploads/chua-mc-1625044885707964385264.jpg'
    },
    2: {
      label: 'Chùa Trấn Quốc',
      link: 'https://media.thuonghieucongluan.vn/uploads/2019_04_02/chua-tran-quoc-1554138524.jpg'
    },
    3: {
      label: 'Nhà Thờ Lớn Hà Nội',
      link: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/35000/35779-St-Joseph-Cathedral.jpg'
    },
    4: {
      label: 'Thủy cung Times City',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssnPVxfyJNh6yaq8_wq_WFj8UB7r0OHD9Tw&usqp=CAU'
    },
    5: {
      label: 'Phố cổ Hà Nội',
      link: 'https://hanoitop10.com/wp-content/uploads/2023/01/anh-pho-co-ha-noi_3.jpg'
    },
    6: {
      label: 'Hồ Hoàn Kiếm',
      link: 'https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Ho-Guom.jpg'
    },
    7: {
      label: 'Quảng trường Ba Đình - Lăng Bác',
      link: 'https://img1.kienthucvui.vn/uploads/2019/07/19/hinh-anh-dep-cua-lang-bac_112811391.jpg'
    },
    8: {
      label: 'Hồ Tây',
      link: 'https://img4.thuthuatphanmem.vn/uploads/2020/05/12/anh-dep-ben-ho-tay_104017969.jpg'
    }
  };
  return data[value];
};
