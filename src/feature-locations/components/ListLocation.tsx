import { Box, Card, Stack, Tooltip, Typography } from '@mui/material';
import 'animate.css';
import Iconify from 'src/common/components/Iconify';

export default function ListLocation() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Tooltip
        placement="top-start"
        title="Lên đầu trang"
        sx={{ position: 'fixed', right: '23px', top: '73vh' }}
      >
        <Box>
          <Iconify
            sx={{
              fontSize: '25px',
              position: 'fixed',
              right: '23px',
              top: '70vh',
              zIndex: 999,
              width: '30px',
              height: '40px',
              color: 'red'
            }}
            icon="material-symbols:keyboard-double-arrow-up-rounded"
            onClick={() => {
              const topPage = document.getElementById('top-page');
              topPage?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </Box>
      </Tooltip>

      <Typography
        sx={{ fontFamily: 'Helvetica', fontWeight: 600, fontSize: '35px' }}
        id="top-page"
      >
        Danh sách 9 địa điểm du lịch Hà Nội nổi bật
      </Typography>

      <Typography>D Pain, 03/04/2023, 9 min read</Typography>

      <Stack spacing={3} sx={{ width: '70vw', marginTop: 3, justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 600, lineHeight: 2, textAlign: 'justify' }}>
          <b>
            <i>
              Chất chứa rất nhiều bản sắc văn hóa lâu đời, các địa điểm du lịch ở Hà Nội
              không chỉ mang đến một cảm giác hoài niệm về lịch sử nghìn năm văn hiến mà
              còn khiến du khách ấn tượng không thể quên với không khí sầm uất của 36 phố
              phường và nét thanh lịch của con người Hà Nội.
            </i>
          </b>
          <br />
          Đến Hà Nội, bạn sẽ cảm nhận được một cuộc sống đầy náo nhiệt và năng động từ
          buổi sớm tinh mơ cho đến tận khuya. Bên cạnh đó là các di tích lịch sử nổi
          tiếng, với hơn 600 đền, chùa, cùng nhiều công trình văn hóa khác tạo nên một bản
          sắc rất riêng. D Pain xin giới thiệu các địa điểm du lịch ở Hà Nội không thể bỏ
          qua nếu bạn có dịp ghé thăm nơi đây nhé:
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Card
            sx={{
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
              height: '230px',
              width: '300px'
            }}
            onClick={() => {
              const vanMieu = document.getElementById('van-mieu');
              vanMieu?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Box
              component="img"
              src="https://toquoc.mediacdn.vn/2020/6/29/bin3264-15933854919411848975973.jpg"
              alt="anh"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
            <Typography>Văn miếu Quốc Tử Giám</Typography>
          </Card>

          <Card
            sx={{
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
              height: '230px',
              width: '300px'
            }}
            onClick={() => {
              const chuaMotCot = document.getElementById('chua-mot-cot');
              chuaMotCot?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Box
              component="img"
              src="https://ik.imagekit.io/tvlk/blog/2022/09/chua-mot-cot-1.jpg?tr=dpr-2,w-675"
              alt="anh"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
            <Typography>Chùa Một Cột</Typography>
          </Card>
          <Card
            sx={{
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
              height: '230px',
              width: '300px'
            }}
            onClick={() => {
              const chuaTranQuoc = document.getElementById('chua-tran-quoc');
              chuaTranQuoc?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Box
              component="img"
              src="https://ximgo.com/upload/2020/07/24/_DSC2580.jpg"
              alt="anh"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
            <Typography>Chùa Trấn Quốc</Typography>
          </Card>
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Card
            sx={{
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
              height: '230px',
              width: '300px'
            }}
            onClick={() => {
              const nhaThoLon = document.getElementById('nha-tho-lon');
              nhaThoLon?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Box
              component="img"
              src="https://www.vietfuntravel.com.vn/image/data/Ha-Noi/nha-hat-lon-ha-noi/gioi-thieu-nha-tho-lon-o-ha-noi-5.jpg"
              alt="anh"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
            <Typography>Nhà Thờ Lớn Hà Nội</Typography>
          </Card>
          <Card
            sx={{
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
              height: '230px',
              width: '300px'
            }}
            onClick={() => {
              const thuyCung = document.getElementById('thuy-cung');
              thuyCung?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Box
              component="img"
              src="https://ximgo.com/upload/2020/07/27/timesity.jpg"
              alt="anh"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
            <Typography>Thủy cung TimeCity</Typography>
          </Card>
          <Card
            sx={{
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
              height: '230px',
              width: '300px'
            }}
            onClick={() => {
              const phoCo = document.getElementById('pho-co');
              phoCo?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Box
              component="img"
              src="https://tl.cdnchinhphu.vn/Uploads/images/pho%20co(2).jpg"
              alt="anh"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
            <Typography>Phố cổ Hà Nội</Typography>
          </Card>
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Card
            sx={{
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
              height: '230px',
              width: '300px'
            }}
            onClick={() => {
              const hoHoanKiem = document.getElementById('ho-hoan-kiem');
              hoHoanKiem?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Box
              component="img"
              src="https://thibanglai.edu.vn/ho-hoan-kiem-o-ha-noi/imager_13291.jpg"
              alt="anh"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
            <Typography>Hồ Hoàn Kiếm</Typography>
          </Card>
          <Card
            sx={{
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
              height: '230px',
              width: '300px'
            }}
            onClick={() => {
              const quangTruong = document.getElementById('quang-truong');
              quangTruong?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Box
              component="img"
              src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/11_2020/gioi-thieu-quang-truong-ba-dinh-min_1.jpg"
              alt="anh"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
            <Typography>Quảng trường Ba Đình - Lăng Bác</Typography>
          </Card>
          <Card
            sx={{
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
              height: '230px',
              width: '300px'
            }}
            onClick={() => {
              const hoTay = document.getElementById('ho-tay');
              hoTay?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Box
              component="img"
              src="https://nhipsonghanoi.hanoimoi.com.vn/Uploads/images/phananh/2020/11/12/ho-tay.jpg"
              alt="anh"
              sx={{
                objectFit: 'cover',
                width: '100%',
                height: '200px'
              }}
            />
            <Typography>Hồ Tây</Typography>
          </Card>
        </Stack>

        <Stack sx={{ width: '50vw', alignSelf: 'center' }} id="van-mieu">
          <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
              1. Văn miếu Quốc Tử Giám
            </Typography>
            Là nơi thờ Khổng Tử, các bậc Hiền triết của Nho giáo và Tư nghiệp Quốc tử giám
            Chu Văn An, đồng thời cũng là trường đại học đầu tiên của Việt Nam. Văn Miếu
            Quốc Tử Giám được xây dựng vào năm 1076 dưới thời vua Lý Nhân Tông. Không chỉ
            là một di tích mang ý nghĩa lịch sử và văn hóa quan trọng bậc nhất của Thủ đô
            và cả nước, nơi đây còn là một công trình mang đậm nét kiến trúc cổ của Việt
            Nam thời Lý, xứng đáng được gìn giữ và bảo tồn.
          </Typography>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/Hanoi_Temple_of_Literature_%28cropped%29.jpg"
            alt="anh"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '330px'
            }}
          />
          <Typography sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}>
            Văn Miếu Quốc Tử Giám – Trường đại học đầu tiên của Việt Nam. @HTV
          </Typography>
        </Stack>

        <Stack sx={{ width: '50vw', alignSelf: 'center' }} id="chua-mot-cot">
          <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
              2. Chùa Một Cột
            </Typography>
            Sẽ rất đáng tiếc nếu bạn đến các điểm du lịch Hà Nội mà không dừng chân tại
            Chùa Một Cột. Đây là một công trình kiến trúc cổ cực kỳ độc đáo mà đến nay năm
            xây dựng chính xác của Chùa vẫn còn khiến các nhà sử học tranh cãi. Ngôi chùa
            được xây dựng bằng gỗ, bao gồm đài Liên Hoa hình vuông, dựng trên một cột cao
            4 mét. Đài Liên Hoa có mái ngói, uốn cong bốn góc, trên đỉnh có Lưỡng long
            chầu nguyệt. Từ xưa, Rồng là một biểu tượng linh thiêng, thể hiện cho quyền uy
            và sức mạnh, ẩn trong đó nhiều giá trị nhân văn, ước vọng của con người.
          </Typography>
          <Box
            component="img"
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1636345208/blog/yflvlqlmfskfhpoi6gbk.webp"
            alt="anh"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '330px'
            }}
          />
          <Typography sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}>
            Chùa Một Cột – Đóa sen nghìn năm tuổi giữa lòng thủ đô. @panoramio.com
          </Typography>
        </Stack>

        <Stack sx={{ width: '50vw', alignSelf: 'center' }} id="chua-tran-quoc">
          <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
              3. Chùa Trấn Quốc
            </Typography>
            Chùa Trấn Quốc nằm cuối đường Thanh Niên, quận Ba Đình, bên cạnh Hồ Tây, là
            một trong những ngôi chùa cổ nhất Việt Nam hiện nay với lịch sử trên 1.500 năm
            tuổi. Chùa Trấn Quốc dưới thời Pháp thuộc từng được công nhận là một trong 10
            công trình có giá trị lịch sử bậc nhất trên toàn xứ Đông Dương. Với những giá
            trị về lịch sử, tín ngưỡng cũng như kiến trúc, chùa Trấn Quốc là một trong các
            điểm du lịch Hà Nội thu hút không chỉ tín đồ Phật tử đến hành lễ mà còn là
            điểm đến thu hút khách tham quan trong và ngoài nước.
          </Typography>
          <Box
            component="img"
            src="https://disantrangan.vn/wp-content/uploads/2021/06/chua_tran_quoc_03.jpg"
            alt="anh"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '330px'
            }}
          />
          <Typography sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}>
            Quang cảnh Chùa Trấn Quốc lúc hoàng hôn. @chathanoi.com
          </Typography>
        </Stack>
        <Stack sx={{ width: '50vw', alignSelf: 'center' }} id="nha-tho-lon">
          <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
              4. Nhà Thờ Lớn Hà Nội
            </Typography>
            Nhà Thờ Lớn được người Pháp xây dựng vào những năm đầu của thế kỷ 19, theo
            phong cách kiến trúc trung cổ của Châu Âu. Nhà thờ được xây dựng theo nguyên
            mẫu của Nhà thờ Đức Bà Paris với các mái vòm rộng, uốn cong hướng lên bầu
            trời. Nhà thờ có chiều rộng 20,5m và dài 64,5m, hai tháp chuông cao 31,5m.
            <br />
            Với cảnh quan thoáng đãng với nhiều cây xanh, Nhà Thờ Lớn Hà Nội là một trong
            các địa điểm du lịch Hà Nội thu hút được giới trẻ. Buổi sáng các bạn có thể
            ngồi uống cafe vỉa hè đặc trưng và hưởng thụ khí trời se lạnh của Hà Nội. Đến
            tối cùng họp hội bạn bè bên ly trà chanh bàn chuyện phiếm.
          </Typography>
          <Box
            component="img"
            src="https://ik.imagekit.io/tvlk/blog/2022/08/nha-tho-lon-ha-noi-4.jpg?tr=dpr-2,w-675"
            alt="anh"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '330px'
            }}
          />
          <Typography sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}>
            Nhà Thờ Lớn Hà Nội với phong cách kiến trúc Glothic thời trung cổ.
            @vietket.net
          </Typography>
        </Stack>
        <Stack sx={{ width: '50vw', alignSelf: 'center' }} id="thuy-cung">
          <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
              5. Thuỷ cung Times City
            </Typography>
            Thuỷ cung Times City là thuỷ cung duy nhất tại Hà Nội có diện tích gần 4.000
            m² tương đương 3 triệu lít nước biển, đồng thời là thủy cung đầu tiên có đường
            hầm với góc nhìn 180 độ. Times City gồm 4 khu vực tham quan chính gồm: khu
            nước ngọt, hang động bò sát, khu nước mặn và khu trưng bày mẫu vật. Tại đây đã
            có hơn 30.000 cá thể sinh vật đến từ "năm châu bốn biển" như chim cánh cụt,
            cua nhện khổng lồ...
          </Typography>
          <Box
            component="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3WGC9ETLgOWck2eNHQmKvG4Q_qhdFIWY3A&usqp=CAU"
            alt="anh"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '330px'
            }}
          />
          <Typography sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}>
            Ảnh: Aquarium Times City
          </Typography>
        </Stack>
        <Stack sx={{ width: '50vw', alignSelf: 'center' }} id="pho-co">
          <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
              6. Phố cổ Hà Nội
            </Typography>
            Một trong những địa điểm du lịch ở Hà Nội không thể bỏ qua chính là Phố Cổ.
            Phố Cổ là những ngôi nhà, con đường, góc phố mang đậm kiến trúc của người Pháp
            thể kỷ 19. Qua bao thăng trầm của lịch sử và thời gian, nơi đây vẫn giữ được
            nguyên vẹn nét kiến trúc như thuở ban đầu.
            <br />
            Có thể khẳng định Phố Cổ chính là linh hồn, là nét đặc trưng của riêng Hà Nội.
            Đến đây các bạn sẽ cảm nhận được nét đẹp thanh lịch trong tâm hồn của những
            con người Hà Nội.
          </Typography>
          <Box
            component="img"
            src="https://6f3ebe2ff971707.cmccloud.com.vn/tour/wp-content/uploads/2022/01/pho-co-ha-noi.jpeg"
            alt="anh"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '330px'
            }}
          />
          <Typography sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}>
            Một góc yên bình của phố cổ Hà Nội. @2.bp.blogspot.com
          </Typography>
        </Stack>
        <Stack sx={{ width: '50vw', alignSelf: 'center' }} id="ho-hoan-kiem">
          <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
              7. Hồ Hoàn Kiếm
            </Typography>
            Hồ Hoàn Kiếm còn được gọi là Hồ Gươm, nằm ngay giữa trung tâm của Thủ đô Hà
            Nội. Được xem là biểu tượng của Hà Nội, Hồ Hoàn Kiếm có ý nghĩa văn hóa và
            lịch sử lâu đời làm nên nét đẹp của Thủ Đô nghìn năm văn hiến. <br />
            Không chỉ mang giá trị lịch sử to lớn, Hồ Hoàn Kiếm còn là nơi vui chơi giải
            trí của người dân thủ đô và du khách giữa sự ồn ào, náo nhiệt của thành phố.
            Trong khuôn viên của Hồ Hoàn Kiếm là những địa điểm du lịch ở Hà Nội đầy ấn
            tượng luôn thu hút được du khách đến tham quan như: đài Nghiên, Tháp Bút, cầu
            Thê Húc, Đền Ngọc Sơn.
          </Typography>
          <Box
            component="img"
            src="https://baotangphunu.org.vn/wp-content/uploads/2020/03/hoan-kiem-860x575.jpg"
            alt="anh"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '330px'
            }}
          />
          <Typography sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}>
            Hồ Hoàn Kiếm với cầu Thê Húc, Đền Ngọc Sơn. @vifep
          </Typography>
        </Stack>
        <Stack sx={{ width: '50vw', alignSelf: 'center' }} id="quang-truong">
          <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
              8. Quảng trường Ba Đình – Lăng Chủ tịch Hồ Chí Minh
            </Typography>
            Một trong các điểm du lịch Hà Nội không thể bỏ qua chính là Quảng trường Ba
            Đình lịch sử, nơi Bác Hồ đọc tuyên ngôn độc lập khai sinh ra nước CHXHCN Việt
            Nam. Bên trong quảng trường chính là Lăng Bác, nơi lưu giữ thi hài của Chủ
            tịch Hồ Chí Minh. Đây là nơi mà mỗi người con đất Việt đều muốn viếng thăm một
            lần trong đời để bày tỏ tấm lòng thành kính với vị cha già kính yêu của dân
            tộc. Lăng Bác mở cửa vào buổi sáng 5 ngày trong tuần: thứ 3, thứ 4, thứ 5, thứ
            7 và chủ nhật. Khách đến viếng thăm bắt buộc phải tuân theo một số yêu cầu như
            ăn mặc chỉnh tề, không sử dụng các thiết bị ghi hình và giữ trật tự trong
            lăng.
          </Typography>
          <Box
            component="img"
            src="https://dulichkhampha24.com/wp-content/uploads/2020/01/quang-truong-ba-dinh-ha-noi-4.png"
            alt="anh"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '330px'
            }}
          />
          <Typography sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}>
            Quảng Trường Ba Đình lịch sử và Lăng Chủ tịch Hồ Chí Minh. @24h.com.vn
          </Typography>
        </Stack>
        <Stack sx={{ width: '50vw', alignSelf: 'center' }} id="ho-tay">
          <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
              9. Hồ Tây
            </Typography>
            Hồ Tây có diện tích lớn nhất Hà Nội, được ví như là phổi xanh của Thủ đô với
            diện tích rộng hơn 500 ha, chu vi vòng quanh hồ lên tới 17km cùng bề dày lịch
            sử mấy nghìn năm. Hồ Tây không chỉ đẹp bởi mặt nước trong xanh mênh mông mà
            còn được điểm thêm sắc đỏ tím của hoa Bằng Lăng, hoa Phượng và màu xanh của
            cây lá. Đến với Hồ Tây, các bạn có thể thuê xe đạp nước hoặc du thuyền quanh
            hồ.
          </Typography>
          <Box
            component="img"
            src="https://poliva.vn/wp-content/uploads/2019/07/ho-tay.jpg"
            alt="anh"
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '330px'
            }}
          />
          <Typography sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}>
            Một góc Hồ Tây về đêm. @scland.vn
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
