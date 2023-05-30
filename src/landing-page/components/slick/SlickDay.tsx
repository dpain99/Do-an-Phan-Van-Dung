import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function SlickDay() {
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
        src="https://nhipsonghanoi.hanoimoi.com.vn/Uploads/images/tuandiep/2020/06/09/Ho%20Nam%20Dong%20DzungArt%20Ng.jpg"
        sx={{
          width: '32vw',
          height: '229px',
          padding: '10px',
          objectFit: 'cover',
          borderRadius: '9px'
        }}
      />
      <Box
        key={1}
        component="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnkAQmjMboqFzy2yRhZMBmH2lwDd1ypso5wktcgexwT9h9T_Nff8EiMUV3nAQnMIjZyo&usqp=CAU"
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
        src="https://media-cdn.tripadvisor.com/media/photo-s/1b/a8/d1/8f/caption.jpg"
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
        src="https://danviet.mediacdn.vn/296231569849192448/2022/10/7/2-1665107026324275330531.jpg"
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
