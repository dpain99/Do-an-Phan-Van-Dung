import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function SlickNight() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 300,
    cssEase: 'linear'
  };
  return (
    <Slider {...settings}>
      <Box
        key={1}
        component="img"
        src="https://haycafe.vn/wp-content/uploads/2022/06/Anh-Ha-Noi-ve-dem....jpg"
        sx={{
          width: '32vw',
          height: '229px',
          padding: '10px',
          objectFit: 'cover'
        }}
      />
      <Box
        key={1}
        component="img"
        src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/07/vi-sao-noi-ha-noi-dep-nhat-ve-dem-6.jpg"
        sx={{
          width: '32vw',
          height: '229px',
          padding: '10px',
          objectFit: 'cover'
        }}
      />
      <Box
        key={1}
        component="img"
        src="https://lh3.googleusercontent.com/9qn8mWhRjQ9kjWzGi7ahq8XozvJg8S8ZBanJxohB-HkYxMO8TFySKkTZ11AGVfcXTepwz5-tJpp9IB1ovZRXuQy87RUy-VigbLQl9Yr6JtZXDP6m03h_11ofYfGnpVTjUCLsDsJm"
        sx={{
          width: '32vw',
          height: '229px',
          padding: '10px',
          objectFit: 'cover'
        }}
      />
      <Box
        key={1}
        component="img"
        src="https://opox.vn/storage/travel-blogs/must-thing-to-do/hanoi-dem.jpg"
        sx={{
          width: '32vw',
          height: '229px',
          padding: '10px',
          objectFit: 'cover'
        }}
      />
    </Slider>
  );
}
