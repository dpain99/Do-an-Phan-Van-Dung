type dataType = {
  [key: number]: { label: string; src: string; id: string };
};
export const convertNumber = (value: number) => {
  const data: dataType = {
    0: {
      id: 'pho-cuon-huong-mai',
      label: 'Phở cuốn Hương Mai',
      src: 'https://media.foody.vn/res/g21/207744/prof/s/foody-upload-api-foody-mobile-anh-ava-200714100331.jpg'
    },
    1: {
      id: 'pho-bat-dan',
      label: 'Phở Bát Đàn',
      src: 'https://media.mia.vn/uploads/blog-du-lich/Pho-bat-dan-pho-gia-truyen-100-nam-tuoi-tai-ha-noi-01-1639325605.jpg'
    },
    2: {
      id: 'cha-ca-la-vong',
      label: 'Chả cá Lã Vọng',
      src: 'https://cdn.tgdd.vn/Files/2020/03/31/1245702/cach-lam-cha-ca-la-vong-cha-ca-lang-thom-ngon-c-760x367.jpg'
    },
    3: {
      id: 'banh-cuon-ba-hoanh',
      label: 'Bánh cuốn Bà Hoành',
      src: 'https://noinaucongnghiep.com/wp-content/uploads/2020/03/a1-1.jpg'
    },
    4: {
      id: 'bun-cha-hang-quat',
      label: 'Bún chả Hàng Quạt',
      src: 'https://images.foody.vn/res/g7/69740/prof/s576x330/foody-mobile-bun-cha-hang-quat-jp-613-635851736193120325.jpg'
    },
    5: {
      id: 'bun-oc-co-hue',
      label: 'Bún Ốc Cô Huệ',
      src: 'https://media.foody.vn/res/g28/277357/prof/s/foody-mobile-bun-oc2-jpg-334-636144529221594486.jpg'
    },
    6: {
      id: 'pho-ly-quoc-su',
      label: 'Phở Lý Quốc Sư',
      src: 'https://foodtourviet.com/wp-content/uploads/2020/08/ph%E1%BB%9F-s%E1%BB%91-10-l%C3%BD-qu%E1%BB%91c-s%C6%B0-e1597827976625.jpg'
    },
    7: {
      id: 'chao-suon-ngo-huyen',
      label: 'Cháo sườn Ngõ Huyện',
      src: 'https://images.foody.vn/video/s800x450/foody-chao%20suong-636377892419375794.jpg'
    },
    8: {
      id: 'ca-phe-giang',
      label: 'Cà phê Giảng',
      src: 'https://media.foody.vn/res/g1/9247/prof/s/foody-mobile-45564654-jpg-313-636127521466786573.jpg'
    }
  };
  return data[value];
};
