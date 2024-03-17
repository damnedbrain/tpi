import { RoutePages } from './router';

import facebookButton from '@assets/icons/facebook-button.png';
import youtubeButton from '@assets/icons/youtube-button.png';
const item1_link1 = ' https://www.facebook.com/chieuxatoanphat';
const item1_link2 = ' https://www.youtube.com/channel/UCJoEaA2uVz0YXs2iWCanQOA';
const item2_link1 = ' https://www.facebook.com/kholanhtoanphat';
const item2_link2 = ' https://www.youtube.com/channel/UCJoEaA2uVz0YXs2iWCanQOA';

import BS_ChieuXaIcon from '@assets/best-services/chieu-xa.png';
import BS_LuuTruIcon from '@assets/best-services/luu-tru.png';
import BS_VanChuyenIcon from '@assets/best-services/van-chuyen.png';

import addressIcon from '@assets/icons/address.png';
import hotlineIcon from '@assets/icons/hotline.png';
import phoneIcon from '@assets/icons/phone.png';
import mailIcon from '@assets/icons/mail.png';
import taxIcon from '@assets/icons/tax.png';

import cobaltIMG from '@assets/chieu-xa/Cobalt-60.jpg';
import ebeamIMG from '@assets/chieu-xa/ebeam.jpg';
import xrayIMG from '@assets/chieu-xa/X-Ray.png';
import { Asset } from 'next/font/google';

export const headerMenu = [
  {
    locale: 'vi',
    titles: [
      { title: 'Giới thiệu', status: '', link: RoutePages.ABOUT_US },
      {
        //Binh add
        title: 'Logistics HUB',
        sub: [
          {
            title: 'Chiếu xạ',
            status: 'sub',
            link: RoutePages.CHIEU_XA,
          },
          {
            title: 'Kho lạnh lưu trữ',
            status: 'sub',
            link: RoutePages.COLD_STORAGE,
          },
          {
            title: 'Vận chuyển',
            status: 'sub',
            link: RoutePages.Logistics_HUB,
          },
        ],
        status: 'wrapper',
        link: '',
      },

      { title: 'Vị trí', status: '', link: RoutePages.LOCATION },      {
        title: `Tin tức`,
        status: '',
        link: RoutePages.MARKET,
      }, // new
      {
        title: 'FAQs',
        status: '',
        link: RoutePages.QUESTION_AND_ANSWER,
      }, //new
      {
        title: `Liên hệ`,
        status: '',
        link: RoutePages.CONTACT,
      }, // new
      {
        title: `Đăng nhập`,
        status: '',
        link: RoutePages.LOGIN,
      }, // new
    ],
  },
  {
    locale: 'en-US',
    titles: [
      { title: 'About Us', status: '', link: RoutePages.ABOUT_US },
      {
        //Binh add
        title: 'Logistics HUB',
        sub: [
          {
            title: 'Irradiation',
            status: 'sub',
            link: RoutePages.CHIEU_XA,
          },
          {
            title: 'Refrigerated Warehouse',
            status: 'sub',
            link: RoutePages.COLD_STORAGE,
          },
          {
            title: 'Transport',
            status: 'sub',
            link: RoutePages.Logistics_HUB,
          },
        ],
        status: 'wrapper',
        link: '',
      },
      { title: 'Location', status: '', link: RoutePages.LOCATION }, // new
      {
        title: `News`,
        status: '',
        link: RoutePages.MARKET,
      }, // new
      {
        title: 'FAQs',
        status: '',
        link: RoutePages.QUESTION_AND_ANSWER,
      }, //new
      {
        title: `Contact`,
        status: '',
        link: RoutePages.CONTACT,
      }, // new
      {
        title: `Login`,
        status: '',
        link: RoutePages.LOGIN,
      },
    ],
  },
];

export const introduce = [
  {
    locale: 'vi',
    id:1,
    title: 'Lịch sử phát triển TOANPHAT GROUP',
    videoLink: '/TPG_timeline.mp4',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem etiam
            luctus amet ultrices sapien id gravida iaculis mattis.`,
    button: `Chi tiết`,
  },
  {
    locale: 'en-US',
    id:2,
    title: 'Company Milestones and Achievement',
    videoLink: '/TPG_timeline_ENG.mp4',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem etiam
            luctus amet ultrices sapien id gravida iaculis mattis.`,
    button: `Detail`,
  },
];

export const bestServices = [
  {
    locale: 'vi',
    title: 'Lĩnh vực tiên phong',
    sub: [
      {
        title: 'Chiếu Xạ',
        desc: ` TPG là một trong những đơn vị tiên phong trên thị trường hiện nay ứng dụng cả 3 công nghệ chiếu xạ: Cobalt-60, E-Beam, X-ray nhằm đẩy nhanh tiến độ xử lý hàng hóa và đảm bảo chất lượng tốt nhất cho Nông - Thuỷ sản. `,
        linksrc: RoutePages.CHIEU_XA,
        icon: BS_ChieuXaIcon,
        btnText: 'Xem thêm >>'
      },
      {
        title: 'Kho Lạnh Lưu Trữ',
        desc: ` TPG xây dựng và đưa vào vận hành Kho Lạnh Toàn Phát với tổng số vị trí 12.000 pallet, tương đương với sức chứa lưu trữ tối đa lên đến 12.000 tấn. Nhiệt độ lưu trữ từ -20°C (+/-2°C), kho làm lạnh nhanh: -35°C.`,
        linksrc: RoutePages.COLD_STORAGE,
        icon: BS_LuuTruIcon,
        btnText: 'Xem thêm >>'
      },
      {
        title: 'Vận Chuyển',
        desc: ` Chúng tôi hướng đến trở thành một Trung tâm Logistics với đầy đủ chức năng: Chiếu xạ - Lưu trữ - Vận chuyển, nhằm tối ưu chi phí, tạo đòn bẩy cạnh tranh cho hoạt động xuất khẩu Nông - Thủy sản.`,
        linksrc: RoutePages.Logistics_HUB,
        icon: BS_VanChuyenIcon,
        btnText: 'Xem thêm >>'
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Outstanding services',
    sub: [
      {
        title: 'Irradiation service',
        desc: `With a view to accelerating the processing of the merchandise, TPG is one of the leading companies on the market today; in order to be certain of providing a good quality of Agricultural – Fishing products, TPG applies all three irradiation technologies - namely, Cobalt-60, E-Beam and X- ray.`,
        linksrc: RoutePages.CHIEU_XA,
        icon: BS_ChieuXaIcon,
        btnText: 'Read more >>'
      },
      {
        title: 'Refrigerated Warehouse rental service',
        desc: `The Toan Phat Refrigerated Warehouse has been constructed and operated by the TPG with a total of 12.000 pallets, enough to allow for a maximum capacity of 12.000 tons. The storage temperature ranges from -20 degrees Celsius (+/-2 degrees Celsius) to the quick cooling warehouse: -35 degrees Celsius.`,
        linksrc: RoutePages.COLD_STORAGE,
        icon: BS_LuuTruIcon,
        btnText: 'Read more >>'
      },
      {
        title: 'Transport service',
        desc: `We aim to become a Logistics Center supplying a variety of services: Irradiation, Storage, and Transport, developing to optimize expenses, and creating a competitive avenue for exports of Agricultural and Aquacultural products.`,
        linksrc: RoutePages.Logistics_HUB,
        icon: BS_VanChuyenIcon,
        btnText: 'Read more >>'
      },
    ],
  },
];

export const sixWord = [
  {
    locale: 'vi',
    title: '6 Giá Trị Cốt Lõi',
    sub: [
      {
        title: 'TRỌNG',
        desc: `Trong mọi hoàn cảnh, TPG luôn đề cao giá trị của sự TÔN TRỌNG: tôn trọng bản thân, đồng nghiệp, tập thể, đối tác và khách hàng, đó là kim chỉ nam cho sự phát triển bền vững và gắn kết những mối quan hệ lâu dài. Hơn thế nữa, sự TỰ TRỌNG cũng là một điều thiết yếu, từng cá nhân luôn biết coi trọng những phẩm chất tốt đẹp của bản thân, coi trọng danh dự, uy tín của tổ chức, hình thành nên một tập thể chính trực và luôn coi trọng lẽ phải.`,
      },
      {
        title: 'TÍN',
        desc: `Chữ TÍN là giá trị chuẩn mực mà mỗi thành viên TPG đặt lên hàng đầu trong quá trình làm việc với khách hàng, đối tác. Từng mỗi dịch vụ cung cấp đều đem lại giá trị thực, minh bạch trong tất cả các giao dịch, chuyên nghiệp trong mọi quy trình để đảm bảo chất lượng, hiệu quả và uy tín thương hiệu.`,
      },
      {
        title: 'TÂM',
        desc: `Với chúng tôi, hành động từ TÂM là tham chiếu cho sự trường tồn của TPG. Đó là cái tâm, cái đức trong những dịch vụ mang đến cho khách hàng, trong việc đối xử với CBCNV hay cả trong những hành động có ảnh hưởng đến sự phát triển của cộng đồng xã hội. Khi xuất phát từ những giá trị tốt đẹp, chúng tôi tin rằng sẽ tạo được nền tảng vững chắc để vươn đến những tầm cao mới.`,
      },
      {
        title: 'TRÍ',
        desc: ` TPG lấy TRÍ làm sức mạnh cạnh tranh và nguồn năng lượng cho sự sáng tạo. Luôn khuyến khích toàn bộ CBCNV nghiên cứu, học hỏi, khai phá giá trị tiềm năng của mỗi người; từ đó ứng dụng công nghệ vào quản trị, vận hành, kỹ thuật để ngày một nâng cao các giá trị và chất lượng dịch vụ.`,
      },
      {
        title: 'PHÁT',
        desc: `Chúng tôi luôn tạo động lực và thúc đẩy tinh thần dám nghĩ dám làm của tập thể CBCNV trong công ty. Vì sự tiến bộ của mỗi cá nhân, sự nỗ lực để vượt qua những giới hạn và thách thức đó là điều kiện thiết yếu tạo nên một tập thể PHÁT TRIỂN vững mạnh, thành công.`,
      },
      {
        title: 'ÍCH',
        desc: `Với tâm niệm LỢI ÍCH của khách hàng/đối tác/cộng đồng phải được đặt lên trên hết, chúng tôi luôn lấy đó làm trọng tâm để phụng sự, cống hiến vì sự phát triển chung của xã hội. Ở khía cạnh khác, Ban lãnh đạo TPG luôn coi trọng lợi ích của từng thành viên đã đồng hành, gắn bó vì sự phát triển của tập thể. Khi mỗi cá nhân luôn giữ tinh thần cầu tiến, biết trau dồi nội lực và tích cực đóng góp, đó là giữ vững lợi ích của chính mình.`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: '6 CORE VALUES ',
    sub: [
      {
        title: 'RESPECT',
        desc: `Regardless of the circumstances, TPG always places a high importance on RESPECT to our company, our colleagues, our team, our partners, and our customers, and that is the practical guide for sustainable development and binding permanent relationships. Additionally, RESPECT is a fundamental element, meaning that each individual has a high self-esteem for his/her moral quality, honor, and the prestige that has built up the group on integrity and justice.`,
      },
      {
        title: 'PRESTIGE',
        desc: `The PRESTIGE is the standard, and must be the top priority in the process of working with customers and partners by every member of TPG. In each service, we bring real values, transparency in payments, and professionalism in actions to ensure the quality, effectiveness, and prestigious reputation. `,
      },
      {
        title: 'HEART',
        desc: `Every action we take from the bottom of the HEART is a measure of the stability of TPG. The heart and virtue appear in our services supplied to customers, the way we treat our staff, and also actions impacting on the social community’s development. When the actions we take are based on good values, we believe that we will create a solid foundation to reach new heights.`,
      },
      {
        title: 'MINDSET',
        desc: `TPG chooses MINDSET as our competitive strength and our source of energy for creativity. We always encourage all our employees to research, to keep learning, and to discover the potential value of each person, thereby applying technology to management, operation, and our techniques, always with the aim of improving our value and the quality of our services.`,
      },
      {
        title: 'DEVELOPMENT',
        desc: `We place an emphasis on creating motivation and promoting the enterprising spirit of the group of employees in the company, because developing and enabling each individual to give the effort to overcome limits and challenges is an essential condition to building a strong and successful DEVELOPMENT for the team.`,
      },
      {
        title: 'BENEFIT',
        desc: `In view of our belief that the BENEFIT of customers, partners, and communities must be our first priority, it has always been the main point in serving, and then contributing to the common development of society. On the other hand, the board of TPG always values the benefits of each member who has accompanied and contributed to the development of the group. Each individual understands that having a progressive spirit, proactively cultivating internal strength and actively contributing is the best way to maintain their own interests.`,
      },
    ],
  },
];

export const irradiationFlow = [
  {
    locale: 'vi',
    title: 'Quy trình chiếu xạ',
    sub: [
      {
        title: 'Nhập hàng',
        desc: `Khách hàng vận chuyển sản phẩm cần chiếu xạ đến nhà máy chiếu xạ Toàn Phát. Sau khi hoàn thành thông tin thủ tục, sản phẩm được đưa vào phòng chờ, chuẩn bị xử lý.`,
      },
      {
        title: 'Xử lý',
        desc: `Băng chuyền đưa sản phẩm vào phòng chiếu, đảm bảo sản phẩm được chiếu đều các mặt và đưa sản phẩm ra ngoài sau khi đã chiếu đủ liều. Toàn bộ quá trình xử lý nhanh gọn và được thực hiện tự động hóa bằng máy móc với độ chính xác gần như tuyệt đối.`,
      },
      {
        title: 'Sau xử lý',
        desc: `Ở đầu ra của dây chuyền sau khi hàng hoá được chiếu xạ xong, nhân viên của TPG sẽ xếp sản phẩm lên pallet, các pallet hàng hóa sẽ được xe nâng điện chở ra khu vực phòng chờ.`,
      },
      {
        title: 'Xuất hàng',
        desc: `Ở giai đoạn này xe nâng điện sẽ chở các pallet sản phẩm chất ra xe. Khách hàng hoàn thành thủ tục chứng từ còn lại sau đó chở hàng hoá ra về, hoặc đăng ký sử dụng dịch vụ thuê kho lạnh lưu trữ của TPG nếu có nhu cầu.`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Provide Best Services Industries',
    sub: [
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
    ],
  },
];

export const partners = [
  {
    locale: 'vi',
    title: 'Được tin cậy bởi các đối tác hàng đầu',
  },
  {
    locale: 'en-US',
    title: 'Trusted by our leading organisations',
  },
];

export const teamMember = [
  {
    locale: 'vi',
    title: 'Đội ngũ nhân sự & Văn hóa doanh nghiệp',
    titleMain: 'Đội ngũ nhân sự',
    desc: `Mỗi cá nhân sẽ tạo nên tập thể, từng đóng góp nhỏ là tiền đề của những thành quả lớn. Tại TPG, chúng tôi trân trọng giá trị của từng cá nhân, từ lãnh đạo, quản lý cấp cao am hiểu kiến thức chuyên môn đến những người trẻ với nguồn năng lượng tích cực và ham học hỏi. Một tập thể luôn coi trọng lợi ích chung và hướng đến sự cải tiến sẽ tạo nên một doanh nghiệp phát triển vững mạnh. Và tất cả những giá trị, kết quả tích cực đó đều được hình thành từ việc coi trọng Văn hóa doanh nghiệp. `,
    
  },
  {
    locale: 'en-US',
    title: 'Human resources',
    titleMain: 'Human resources',
    desc: `Each person will be an integral part of the team, because even the smallest of contributions can be a key to a great achievement. At TPG, we respect the value of each individual, from leaders and senior managers with professional knowledge to young people with positive energy and eagerness to learn. A successful business will be a team that values common interests and seeks improvement. A respect of corporate culture is at the heart of all these values and positive results.`,
    
  },
];

export const certificate = [
  {
    locale: 'vi',
    title: 'Đội ngũ nhân sự & Văn hóa doanh nghiệp',
    titleMain: 'Chất lượng được bảo chứng Quốc tế',
    desc: `Nhằm mục đích đảm bảo chất lượng, hiệu quả, an toàn trong mỗi dịch vụ cung cấp đến khách hàng, TOANPHAT GROUP luôn tuân thủ các nguyên tắc về ngành nghề hoạt động và chuẩn hóa mọi quy trình phù hợp với tiêu chuẩn quốc tế. Chất lượng, uy tín của TOANPHAT GROUP được bảo chứng bởi các cơ quan, tổ chức quốc tế.`,
    sub: [
      {
        title: 'Tên',
        desc: `Cục Kiểm dịch động thực vật (APHIS) trực thuộc Bộ Nông nghiệp Hoa Kỳ (USDA) công nhận Nhà máy Chiếu xạ Toàn Phát đủ điều kiện thực hiện chiếu xạ trái cây tươi sang thị trường Hoa Kỳ.`,
      },
      {
        title: 'Tên',
        desc: `Bureau Veritas công nhận Nhà máy Chiếu xạ Toàn Phát đạt tiêu chuẩn quốc tế HACCP (Hazard Analysis and Critical Control Points) về hệ thống quản lý chất lượng vệ sinh an toàn thực phẩm.`,
      },
      {
        title: 'Tên',
        desc: `Bureau Veritas công nhận Nhà máy Chiếu xạ Toàn Phát đạt tiêu chuẩn Hệ thống quản lý chất lượng quốc tế ISO 9001:2015`,
      },
      
    ],
  },
  {
    locale: 'en-US',
    title: 'Đội ngũ nhân sự & Văn hóa doanh nghiệp',
    titleMain: 'International Quality Assurance',
    desc: `In order to ensure quality, efficiency, and safety in every service provided to customers, TOANPHAT GROUP always adheres to industry practices and standardizes all processes in accordance with international standards. The quality and reputation of TOANPHAT GROUP are guaranteed by international agencies and organizations.`,
    sub: [
      {
        title: 'Tên',
        desc: `The Animal and Plant Health Inspection Service (APHIS) under the United States Department of Agriculture (USDA) recognizes Toan Phat Irradiation as eligible to perform irradiation on fresh fruits for the US market.`,
      },
      {
        title: 'Tên',
        desc: `Bureau Veritas certifies that Toan Phat Irradiation meets the international standard of Hazard Analysis and Critical Control Points (HACCP) for food safety and hygiene management systems.`,
      },
      {
        title: 'Tên',
        desc: `Bureau Veritas certifies that Toan Phat Irradiation meets the international standard of the ISO 9001:2015 Quality Management System.`,
      },
      
    ],
  },
];

export const companyCulture = [
  {
    locale: 'vi',
    title: 'Văn hóa doanh nghiệp',
    desc: `Từ những con người với những cá tính khác biệt, để kiến tạo nên một tập thể đồng lòng, gắn kết và đặt mục tiêu vì sự phát triển chung, chúng tôi xây dựng văn hoá doanh nghiệp dựa trên 03 tiêu chí:`,
    subDesc: [
      { desc: `Sự đa dạng hòa hợp` },
      { desc: `Phát triển không ngừng` },
      { desc: `Gắn kết và thấu hiểu` },
    ],
    button: `Chi tiết`,
  },
  {
    locale: 'en-US',
    title: 'Corporate culture',
    desc: `By engaging individuals with different personalities, creating a united, cohesive team and setting goals for the common development, we are building a corporate culture based on the following three criteria:`,
    subDesc: [
      { desc: `Compatible diversity` },
      { desc: `Consistent developments` },
      { desc: `The ability to work together and to comprehend our values.` },
    ],
    button: `Read more`,
  },
];

export const humanResource = [
  {
    locale: 'vi',
    title: 'Đội ngũ nhân sự',
    desc: `Mỗi cá nhân sẽ tạo nên tập thể, từng đóng góp nhỏ là tiền đề của những thành quả lớn. Tại TPG, chúng tôi trân trọng giá trị của từng cá nhân, từ lãnh đạo, quản lý cấp cao am hiểu kiến thức chuyên môn đến những người trẻ với nguồn năng lượng tích cực và ham học hỏi. Một tập thể luôn coi trọng lợi ích chung và hướng đến sự cải tiến sẽ tạo nên một doanh nghiệp phát triển vững mạnh. Và tất cả những giá trị, kết quả tích cực đó đều được hình thành từ việc coi trọng Văn hóa doanh nghiệp.`,
    subDesc: [{ desc: `` }, { desc: `` }, { desc: `` }],
    button: `Chi tiết`,
  },
  {
    locale: 'en-US',
    title: 'Human resources',
    desc: `Each individual bonds together to form a team and every little contribution is the foundation for great success. At TPG, we appreciate the value of every individual, whether they are a leader, a senior manager with professional qualifications, or young people having positive energy and enthusiasm for learning. A prosperous business must be built upon a team that always values common interests and aims for improvement. A respect of Corporate Culture is at the core of all those values and brings good results.`,
    subDesc: [{ desc: `` }, { desc: `` }, { desc: `` }],
    button: `Details`,
  },
];

export const testimonial = [
  {
    locale: 'vi',
    title: 'Nhận xét của khách hàng',
    desc: `Khách hàng nói về các dịch vụ của chúng tôi!`,
    comments: [
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Justus Menke',
        title: 'CEO Eronaman',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Britain Eriksen',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Justus Menke',
        title: 'CEO Eronaman',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Britain Eriksen',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Testimonial',
    desc: `Hear what our previous clients had to say about our services!`,
    comments: [
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Justus Menke',
        title: 'CEO Eronaman',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Britain Eriksen',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Justus Menke',
        title: 'CEO Eronaman',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Britain Eriksen',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
    ],
  },
];

export const GalleryDesc = [
  {
    locale: 'vi',
    title: 'Thư viện',
    mainTitle: 'Hình ảnh',
    desc: `Những hình ảnh về hoạt động, dịch vụ tại Nhà Máy Chiếu Xạ Toàn Phát & Kho Lạnh Toàn Phát của chúng tôi `,
  },
  {
    locale: 'en-US',
    title: 'Library',
    mainTitle: 'Images Gallery',
    desc: `Activities and services at Toan Phat Irradiation & Toan Phat Refrigerated Warehouse`,
  },
];

export const newsSection = [
  {
    locale: 'vi',
    title: 'Thị trường',
    latestNews: {
      title: 'NHIỀU LƯỢT XEM',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar 
      etiam facilisi porttitor nunc malesuada`,
      readMore: 'Đọc Thêm',
    },
    subNews: [
      {
        title: 'MÔ TẢ',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Đọc Thêm',
      },
      {
        title: 'MÔ TẢ',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Đọc Thêm',
      },
      {
        title: 'MÔ TẢ',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Đọc Thêm',
      },
      {
        title: 'MÔ TẢ',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Đọc Thêm',
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Market News',
    latestNews: {
      title: 'BEST PRACTICES',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar 
      etiam facilisi porttitor nunc malesuada`,
      readMore: 'Read More',
    },
    subNews: [
      {
        title: 'CASE STUDY',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Read More',
      },
      {
        title: 'CASE STUDY',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      },
      {
        title: 'CASE STUDY',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Read More',
      },
      {
        title: 'CASE STUDY',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Read More',
      },
    ],
  },
];

export const question = [
  {
    locale: 'vi',
    title: 'Bạn có câu hỏi nào không?',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            leo, id gravida eget gravida. Ultrices est sollicitudin risus
            molestie commodo netus nam.`,
    button: `Đọc Thêm`,
    subFAQ: [
      {
        title: `Câu hỏi ở đây?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Câu hỏi ở đây?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Câu hỏi ở đây?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Câu hỏi ở đây?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Any questions? We got you.',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            leo, id gravida eget gravida. Ultrices est sollicitudin risus
            molestie commodo netus nam.`,
    button: `More FAQs`,
    subFAQ: [
      {
        title: `Question goes here?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Question goes here?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Question goes here?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Question goes here?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
    ],
  },
];

export const foodIrradiationSystem = [
  {
    locale: 'vi',
    title: 'Chiếu xạ',
    desc: `TPG là một trong những đơn vị tiên phong ứng dụng cả 03 công nghệ chiếu xạ tiên tiến nhất hiện nay: Cobalt-60, E-Beam, X-ray. Mỗi công nghệ có những đặc tính riêng nhưng đều đảm bảo được tính an toàn cho các thực phẩm và hàng hóa khi chiếu xạ. Nhờ ứng dụng công nghệ hiện đại, TPG đẩy nhanh tiến độ xử lý hàng hóa chiếu xạ, nâng cao chất lượng dịch vụ, giảm thời gian chờ đợi và tối ưu hóa chi phí cho khách hàng.
    
    Đặc biệt, TPG tự hào là đơn vị chiếu xạ đã thành công trong việc sản xuất, lắp đặt dây chuyền cơ khí, phần mềm điều khiển cho hệ thống chiếu xạ Cobalt-60, thực hiện bởi đội ngũ của công ty 100% người Việt Nam được Cục An toàn Bức xạ và Hạt nhân (Bộ Khoa học và Công nghệ Việt Nam) cấp phép. Đồng thời được APHIS (USDA) công nhận đủ điều kiện thực hiện chiếu xạ trái cây tươi sang thị trường Hoa Kỳ.

    Với sự kết hợp của cả ba công nghệ, cùng việc không ngừng mở rộng nghiên cứu phát triển, TPG đã ứng dụng đa dạng hóa vào các mặt hàng chiếu xạ, đáp ứng tối đa nhu cầu của khách hàng và khẳng định vị thế vững mạnh trên thị trường.`,
    subDesc: [
      {
        title: 'Hệ thống máy chiếu xạ bằng nguồn Cobalt-60 sử dụng tia Gamma',
        eventKey: 'cobalt-60',
        imgSrc: cobaltIMG,
        desc: `Phương pháp chiếu xạ bằng tia Gamma sử dụng bức xạ tạo ra bởi sự phân rã của đồng vị phóng xạ Cobalt-60. Những chất này phát ra các photon có năng lượng cao (1,17MeV và 1,33MeV), có khả năng xuyên thấu vào thực phẩm đến độ sâu vài chục cm, vậy nên đặc biệt thích hợp để xử lý các sản phẩm có tỷ trọng cao. Quá trình chiếu xạ Gamma được ứng dụng để khử trùng, xử lý hiệu quả nhiều loại sản phẩm khác nhau như: thiết bị y tế, dược phẩm, mỹ phẩm, thực phẩm và thiết bị gia dụng…`,
        midTitle: `Ưu điểm của phương pháp chiếu xạ bằng tia Gamma`,
        desc2: [
          {
            descc: `Phương pháp thích hợp và an toàn để chiếu xạ hầu hết các loại thực phẩm.`,
          },
          {
            descc: `Đạt được liều lượng đồng đều cao trong xử lý sản phẩm.`,
          },
          {
            descc: `Không phụ thuộc vào hình dáng, nhiệt độ, áp suất, không tiêu hao vật chiếu.`,
          },
          {
            descc: `Có khả năng xuyên thấu tốt, giúp xử lý hiệu quả các gói hàng có tỷ trọng cao.`,
          },
        ],
      },
      {
        title: 'Hệ thống máy chiếu xạ E-Beam sử dụng chùm tia Electron',
        eventKey: 'e-beam',
        imgSrc: ebeamIMG,
        desc: `Quá trình chiếu xạ bằng công nghệ E-Beam sử dụng bức xạ ion hoá là Electron năng lượng cao. Các Electron được tạo ra bởi Electron Gun, được gia tốc bởi sóng cao tần qua cấu trúc cộng hưởng sử dụng nguồn điện. Electron có điện tích âm, khối lượng nhỏ do đó dễ dàng tương tác với các nguyên tử trong thực phẩm và gây ra phản ứng rất nhanh trên các phân tử hoặc vi sinh vật.`,
        midTitle: `Ưu điểm của phương pháp chiếu xạ bằng chùm tia Electron`,
        desc2: [
          {
            descc: `Tốc độ xử lý nhanh chóng và hiệu quả, tối ưu hóa thời gian chiếu xạ.`,
          },
          { descc: `Có khả năng đáp ứng yêu cầu chiếu xạ sản lượng lớn.` },
          {
            descc: `An toàn, không để lại chất phóng xạ tồn dư trên các sản phẩm sau khi xử lý.`,
          },
          {
            descc: `Sử dụng nguồn năng lượng điện tử an toàn và thân thiện với môi trường.`,
          },
        ],
      },
      {
        title: 'Hệ thống máy chiếu xạ Bremsstrahlung (X-ray) sử dụng tia X',
        eventKey: 'x-ray',
        imgSrc: xrayIMG,
        desc: `Công nghệ chiếu xạ bằng tia X là một phương pháp được phát triển dựa trên công nghệ chiếu xạ bằng chùm tia điện tử. Electron được tạo ra trong thiết bị có năng lượng từ 5MeV - 7,5MeV. Các Electron tương tác với tấm Titanium tạo ra Tia X - Bremsstrahlung (bức xạ hãm).`,
        midTitle: `Ưu điểm của công nghệ chiếu xạ bằng tia X`,
        desc2: [
          {
            descc: `Quá trình xử lý sản phẩm chiếu xạ nhanh chóng và đạt chuẩn.`,
          },
          {
            descc: `An toàn và hiệu quả cao trong việc xử lý nhiều loại sản phẩm với tỷ trọng khác nhau.`,
          },
          {
            descc: `Cải thiện khả năng thâm nhập của năng lượng photon, tăng khả năng xuyên thấu qua sản phẩm (tương tự như tia Gamma).`,
          },
          {
            descc: `Tính linh hoạt cao, có khả năng xử lý nhiều sản phẩm với các yêu cầu khác nhau về liều chiếu trong cùng một chu kỳ chiếu xạ.`,
          },
        ],
      },
    ],
    concludeDesc: `Đây là 3 công nghệ chiếu xạ tiên tiến nhất hiện nay nhằm đẩy nhanh tiến độ xử lý hàng hóa; nâng cao chất lượng dịch vụ, đáp ứng tối đa nhu cầu khách hàng; giảm thời gian chờ đợi và tiết kiệm chi phí tối ưu nhất. Đặc biệt, TPG là đơn vị tiên phong duy nhất hiện nay đã sản xuất, lắp đặt thành công phần mềm điều khiển, dây chuyền cơ khí vận hành bằng nguồn Cobalt 60 phát triển bởi đội ngũ kỹ thuật công ty 100% người Việt Nam và được APHIS công nhận đủ điều kiện chiếu xạ trái cây tươi cho thị trường Hoa Kỳ. Với sự kết hợp của cả ba công nghệ, cùng việc không ngừng mở rộng nghiên cứu, TPG có thể ứng dụng đa dạng hóa vào nhiều mặt hàng chiếu xạ và tiếp tục khẳng định vị thế trên thị trường. `,
  },
  {
    locale: 'en-US',
    title: 'Irradiation ',
    desc: `In order to speed up the handling of goods and ensure the highest quality for Agricultural and Fisheries, TPG is one of the leading companies which use all three irradiation technologies: Cobalt-60, E-Beam, and X-ray. Even though each type of technology has its own features, they must all ensure the safety of food and goods during the irradiation process. Through the application of modern technology, TPG accelerates the processing of irradiated goods, improves service quality, decreases waiting time, and optimizes costs for customers.
    
    In particular, TPG is proud to be one of the irradiation groups that has succeeded in manufacturing and installing mechanical lines and the controlling software for the Cobalt-60 irradiation system, which has been implemented by the company's team of 100% Vietnamese staffs and licensed by the Department of Radiation and Nuclear Safety (Ministry of Science and Technology of Vietnam). Additionally, our group has been recognized by APHIS (USDA) as being eligible to carry out irradiation for fresh fruits exported to the US market.
    
    Along with the consistent expansion of research and development, TPG has applied the combination of all three technologies in various ways into irradiation products in order to meet the needs of its customers and to guarantee its firm position in the market.`,
    subDesc: [
      {
        title: 'Cobalt-60 irradiation system by gamma rays',
        eventKey: 'cobalt-60',
        imgSrc: cobaltIMG,
        desc: `The gamma irradiation process is generated by the decay of the radioisotope Cobalt-60. These emit the resultant high energy photons (1.17MeV and 1.33MeV), which are able to penetrate food to a depth of several tens of centimeters, so they are especially suitable for handling products with a high density. Gamma irradiation is applied to sterilize and to handle many varieties of products effectively. Examples of these products include medical equipment, pharmaceuticals, cosmetics, food, and household appliances.`,
        midTitle: `Advantages of Gamma-ray irradiation`,
        desc2: [
          {
            descc: `It is a suitable and safe irradiation method for most kinds of foods.`,
          },
          {
            descc: `It can achieve high dosages in product handling.`,
          },
          {
            descc: `It can still achieve independently of shape, temperature, and pressure and there will be no damage to the other products.`,
          },
          {
            descc: `It can be effective in having a good penetration of high-density packages.`,
          },
        ],
      },
      {
        title:
          'E-Beam irradiation system by Electron beam',
        eventKey: 'e-beam',
        imgSrc: ebeamIMG,
        desc: `The irradiation process by E-Beam technology uses ionizing radiation with high energy electrons. Electrons are generated by the Electron Gun, and then accelerated by high frequency waves through a resonance structure using an electrical source. Electrons have a negative charge and a small mass, so they easily interact with atoms in food and cause very rapid reactions on molecules or microorganisms.`,
        midTitle: `Advantages of Electron beam irradiation`,
        desc2: [
          {
            descc: `There is a fast and efficient processing speed, optimizing irradiation time.`,
          },
          { descc: `It is capable of meeting irradiation requirements for large outputs.` },
          {
            descc: `There are only safe and nonradioactive residues on products after irradiation.`,
          },
          {
            descc: `E-beam irradiation uses electronic energy sources that are safe and friendly to the environment.`,
          },
        ],
      },
      {
        title: 'Bremsstrahlung irradiation system by X-rays',
        eventKey: 'x-ray',
        imgSrc: xrayIMG,
        desc: `The X-ray irradiation is a method that has been developed by using electron beams to irradiate. Electrons are generated in the device with energy from between 5MeV and 7.5MeV. Electrons interact with the Titanium plate to produce X-Rays in what is known as Bremsstrahlung (braking) radiation.`,
        midTitle: `Advantages of X-ray irradiation technology`,
        desc2: [
          {
            descc: `The processing of irradiated products is quick and ensures standardization.`,
          },
          {
            descc: `It Is a safe and highly effective way of handling a wide range of products with different densities.`,
          },
          {
            descc: `It improves the penetration of photon energy, increasing the penetration to products (similar to Gamma rays).`,
          },
          {
            descc: `It has a high flexibility, which can be used in the same irradiation cycle for a variety of products with different dose requirements.`,
          },
        ],
      },
    ],
    concludeDesc: `Đây là 3 công nghệ chiếu xạ tiên tiến nhất hiện nay nhằm đẩy nhanh tiến độ xử lý hàng hóa; nâng cao chất lượng dịch vụ, đáp ứng tối đa nhu cầu khách hàng; giảm thời gian chờ đợi và tiết kiệm chi phí tối ưu nhất. Đặc biệt, TPG là đơn vị tiên phong duy nhất hiện nay đã sản xuất, lắp đặt thành công phần mềm điều khiển, dây chuyền cơ khí vận hành bằng nguồn Cobalt 60 phát triển bởi đội ngũ kỹ thuật công ty 100% người Việt Nam và được APHIS công nhận đủ điều kiện chiếu xạ trái cây tươi cho thị trường Hoa Kỳ. Với sự kết hợp của cả ba công nghệ, cùng việc không ngừng mở rộng nghiên cứu, TPG có thể ứng dụng đa dạng hóa vào nhiều mặt hàng chiếu xạ và tiếp tục khẳng định vị thế trên thị trường. `,
  },
];

export const productOfIrradiation = [
  {
    locale: 'vi',
    title: 'Các sản phẩm được chiếu xạ tại Nhà máy Chiếu xạ Toàn Phát',
    subDesc: [
      { desc: 'Trái cây tươi' },
      { desc: 'Trái cây đông lạnh' },
      { desc: 'Thủy sản đông lạnh' },
      { desc: 'Thực phẩm chế biến' },
      { desc: 'Thiết bị y tế' },
      { desc: 'Đồ thủ công mỹ nghệ' },
      { desc: 'Sản phẩm bằng tre, gỗ' },
      { desc: 'Hoá mỹ phẩm' },
      { desc: 'Dược liệu, đông nam dược' },
      { desc: 'Đá trang sức' },
      { desc: 'Gia vị' },
      { desc: 'Thức ăn thú cưng' },
    ],
  },
  {
    locale: 'en-US',
    title: 'Irradiated products at Toan Phat Irradiation Factory',
    subDesc: [
      { desc: 'Fresh fruits' },
      { desc: 'Frozen fruits' },
      { desc: 'Frozen seafoods' },
      { desc: 'Processed foods' },
      { desc: 'Medical equipment' },
      { desc: 'Handicrafts' },
      { desc: 'Bamboo and other wooden products' },
      { desc: 'Cosmetics and pharmaceuticals' },
      { desc: 'Herbal medicine and oriental medicine' },
      { desc: 'Gems' },
      { desc: 'Spices' },
      { desc: 'Pet foods' },
    ],
  },
];

export const subMethodIrradiation = [
  {
    locale: 'vi',
    title: 'Phương án 1:',
    sub: [
      { title: 'Bước 1', desc: 'Mô tả', number: 1, fullLine: true },
      { title: 'Bước 1', desc: 'Mô tả', number: 2, fullLine: true },
      { title: 'Bước 1', desc: 'Mô tả', number: 3, fullLine: false },
    ],
  },
  {
    locale: 'en-US',
    title: 'Option 1:',
    sub: [
      { title: 'Step 1', desc: 'Step Description', number: 1, fullLine: true },
      { title: 'Step 2', desc: 'Step Description', number: 2, fullLine: true },
      { title: 'Step 3', desc: 'Step Description', number: 3, fullLine: false },
    ],
  },
];

export const LogisticssAndSocial = [
  {
    locale: 'vi',
    sub: [
      {
        title: 'Vận chuyển',
        desc: `Với định hướng trở thành một trung tâm Logisticss với đầy đủ chức năng: vận tải - phân phối - lưu trữ - chiếu xạ. Trong tương lai kho lạnh Toàn Phát sẽ kết hợp chặt chẽ với các doanh nghiệp vận chuyển lạnh để có thể đáp ứng tối đa nhu cầu của khách hàng tạo dựng chuỗi cung ứng khép kín hiện đại nhất.
Một kho lạnh đạt chuẩn.
Cung ứng xe tải đông lạnh riêng để vận chuyển hàng hóa.`,
      },
      {
        title: 'Phân phối',
        desc: `Hệ thống kho lạnh Toàn Phát định hướng phát triển trở thành một trung tâm phân phối Logisticss với đầy đủ chức năng đáp ứng hầu hết nhu cầu của khách hàng.
Nhiều dịch vụ đa dạng: vận chuyển, bốc xếp, dán nhãn, đóng gói hàng nhỏ lẻ, xử lý đơn hàng, giao nhận.
Nhập hàng an toàn, nhanh chóng, phục vụ tốt.
Có khu vực riêng để xử lý đơn hàng, áp dụng tính công nghệ cao.
Cầu nối giữa nhà cung cấp và khách hàng`,
      },
    ],
  },
  {
    locale: 'en-US',
    sub: [
      {
        title: 'Transport',
        desc: `With the orientation to become a Logisticss center with full functions: transport - distribution - storage - irradiation. In the future, Toan Phat cold storage will work closely with cold transport businesses to be able to meet the needs of customers to create the most modern closed supply chain.
A standard cold storage.
Provide separate refrigerated trucks to transport goods.`,
      },
      {
        title: 'Distribution',
        desc: `Toan Phat cold storage system is oriented to become a Logisticss distribution center with full functions to meet most of the needs of customers.
Various services: transportation, loading and unloading, labeling, packaging of small goods, order processing, delivery.
Import goods safely, quickly, good service.
There is a separate area for order processing, applying high technology.
Bridge between suppliers and customers`,
      },
    ],
  },
];

export const newsBlock = [
  {
    locale: 'vi',
    title: `Tin tức mới nhất`,
    sub: [
      {
        time: `08/02/2022`,
        title: `Doanh nhân Vương Hiếu, CEO Công ty TNHH Chiếu xạ Toàn Phát (TPI): Càng khó, càng muốn chinh phục`,
        desc: `CEO Vương Hiếu nói, trong quá trình khởi nghiệp, anh may mắn vì được người thân và các đối tác ủng hộ...`,
      },
      {
        time: `23/05/2022`,
        title: `Lễ khởi công kho lạnh Toàn Phát - kho vận`,
        desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to `,
      },
      {
        time: `08/03/2022`,
        title: `Happy Woman’s Day - NHỮNG BÔNG HOA CỦA ĐẠI GIA ĐÌNH TPI`,
        desc: `Cảm ơn "các nàng" đã luôn đồng hành của TPI trong suốt hành trình qua!`,
      },
      {
        time: `08/02/2022`,
        title: `Doanh nhân Vương Hiếu, CEO Công ty TNHH Chiếu xạ Toàn Phát (TPI): Càng khó, càng muốn chinh phục`,
        desc: `CEO Vương Hiếu nói, trong quá trình khởi nghiệp, anh may mắn vì được người thân và các đối tác ủng hộ...`,
      },
      {
        time: `08/03/2022`,
        title: `Happy Woman’s Day - NHỮNG BÔNG HOA CỦA ĐẠI GIA ĐÌNH TPI`,
        desc: `Cảm ơn "các nàng" đã luôn đồng hành của TPI trong suốt hành trình qua!`,
      },
      {
        time: `23/05/2022`,
        title: `Lễ khởi công kho lạnh Toàn Phát - kho vận`,
        desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to `,
      },
    ],
  },
  {
    locale: 'en-US',
    title: `Latest news`,
    sub: [
      {
        time: `02/08/2022`,
        title: `Entrepreneur Vuong Hieu, CEO of Toan Phat Irradiation Co., Ltd. (TPI): The harder it is, the more you want to conquer`,
        desc: `CEO Vuong Hieu said, in the process of starting a business, he was fortunate to have the support of his family and partners...`,
      },
      {
        time: `05/23/2022`,
        title: `Groundbreaking ceremony of Toan Phat cold storage - Logisticss`,
        desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to`,
      },
      {
        time: `03/08/2022`,
        title: `Happy Women's Day - THE FLOWERS OF THE BIGGEST FAMILY TPI`,
        desc: `Thank you "girls" for always accompanying TPI during the past journey!`,
      },
      {
        time: `02/08/2022`,
        title: `Entrepreneur Vuong Hieu, CEO of Toan Phat Irradiation Co., Ltd. (TPI): The harder it is, the more you want to conquer`,
        desc: `CEO Vuong Hieu said, in the process of starting a business, he was fortunate to have the support of his family and partners...`,
      },
      {
        time: `03/08/2022`,
        title: `Happy Women's Day - THE FLOWERS OF THE BIGGEST FAMILY TPI`,
        desc: `Thank you "girls" for always accompanying TPI during the past journey!`,
      },
      {
        time: `05/23/2022`,
        title: `Groundbreaking ceremony of Toan Phat cold storage - Logisticss`,
        desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to`,
      },
    ],
  },
];

export const coldStorageTopContent = [
  {
    locale: 'vi',
    title: 'Kho lạnh lưu trữ',
    midTitle: ' Ưu thế vượt trội',
    desc: [
      { descc: `Quy mô: 10.000m²` },
      { descc: `Tổng vị trí: 12.000 pallet` },
      { descc: `Khả năng lưu trữ tối đa lên đến 12.000 tấn` },
      { descc: `Thời gian hoạt động: 24/7 ` },
      {
        descc: `Nhiệt độ lưu trữ: -20°C (+/-2°C), có kho làm lạnh nhanh: -35°C`,
      },
    ],
    sub: [
      {
        title: `Vị trí cửa ngõ`,
        desc: `Toạ lạc tại Lô A24-2, Đường Ngang 1, Khu công nghiệp Phú An Thạnh, xã An Thạnh, huyện Bến Lức, tỉnh Long An; Kho Lạnh Toàn Phát kết nối dễ dàng, nhanh chóng đến các trục đường huyết mạch, hệ thống cảng sông, cảng biển, cảng hàng không và các tỉnh thành lân cận. Nhờ đó giúp các doanh nghiệp thuận tiện trong việc vận chuyển hàng hóa khi xuất khẩu.`,
      },
      {
        title: `Đầu tư công nghệ hiện đại`,
        desc: `Hệ thống kho lạnh được đầu tư công nghệ hiện đại nhất về bảo quản - lưu trữ, trang thiết bị kỹ thuật cập nhật tiên tiến; thường xuyên bảo dưỡng, nâng cấp hệ thống kho; nhờ đó luôn đảm bảo quá trình xử lý vận hành thông minh, tinh gọn và đạt tiêu chuẩn.`,
      },
      {
        title: `Tiết kiệm chi phí`,
        desc: `Lợi thế vị trí đắc địa cùng việc sở hữu đồng thời cả kho lạnh lưu trữ và nhà máy chiếu xạ, TPG giúp các doanh nghiệp xuất khẩu Nông - Thủy sản tiết kiệm chi phí vận chuyển, chi phí bốc dỡ khi xuất - nhập hàng hóa. Đặc biệt, chúng tôi luôn cam kết đồng hành về giá và mang đến những chính sách tối ưu nhất cho khách hàng.`,
      },
      {
        title: `Gói thuê kho lạnh linh hoạt`,
        desc: ` Đề cao tiêu chí linh hoạt và tối ưu hóa cho doanh nghiệp, tại Kho Lạnh Toàn Phát khách hàng có thể đăng ký gói thuê kho lạnh lưu trữ dựa trên nhu cầu thực tế. Có thể thuê theo thời gian ngắn hạn, trung hạn, dài hạn và tính theo trọng lượng hàng hóa thực tế hoặc tính theo số lượng vị trí (pallet).`,
      },
      {
        title: `Dịch vụ bổ trợ đa dạng`,
        desc: `Ngoài dịch vụ lưu trữ nhiệt lạnh, Kho Lạnh Toàn Phát cung cấp nhiều dịch vụ bổ trợ khác như: đóng gói, dán tem, thay bao bì, phân loại hàng hóa, quấn PE,… với mức phí cạnh tranh nhất.`,
      },
      {
        title:`Hoạt động 24/7`,
        desc: `Kho lạnh Toàn Phát hoạt động 24/7, dịch vụ tốc hành, đội ngũ chuyên nghiệp luôn xử lý nhanh gọn các yêu cầu và thắc mắc của khách hàng; đáp ứng tối đa nhu cầu lưu trữ và xuất nhập hàng trong mọi thời điểm cần thiết.`,
      },
      {
        title: `Tốc độ xuất nhập hàng nhanh`,
        desc: `Với hệ thống điều khiển và quản lý bằng phần mềm tối ưu; đội ngũ vận hành - xử lý dịch vụ lưu trữ được huấn luyện bài bản, luôn thận trọng, tuân thủ quy trình; Kho Lạnh Toàn Phát đảm bảo tốc độ xuất nhập hàng nhanh, chính xác, an toàn, đáp ứng cao các yêu cầu của khách hàng.`,
      },
      {
        title: `Đảm bảo chất lượng hàng hóa`,
        desc: `Hàng hóa của doanh nghiệp khi lưu trữ và bảo quản tại Kho Lạnh Toàn Phát sẽ được đảm bảo an toàn tối đa nhờ hệ thống quản lý và quy trình nghiêm ngặt. Nhiệt độ và độ ẩm của kho luôn được kiểm soát phù hợp, mỗi loại hàng được phân khu và khai thác ở các khu vực hợp lý để không làm ảnh hưởng đến chất lượng hàng hóa.`,
      },
      {
        title: `Chính trực, minh bạch trong công việc`,
        desc: `Kho Lạnh Toàn Phát luôn tuân thủ các nguyên tắc, đạo đức nghề nghiệp. Đó là sự trung thực trong các giao dịch, chính xác trong việc xử lý số liệu xuất - nhập hàng hóa và rõ ràng khi thực hiện các quy trình, thủ tục đối với khách hàng. Mặt khác, cam kết bảo mật thông tin và hoạt động kinh doanh của đối tác/khách hàng.`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Refrigerated Warehouse',
    midTitle: 'Dominances',
    desc: [
      { descc: `Scale: 10.000m²` },
      { descc: `Total of position: 12.000 pallets` },
      { descc: `Maximum storage up to 12.000 tons` },
      { descc: `Opening time: 24/7` },
      {
        descc: `Storage temperature: -20 degree Celsius (+/-2 degree Celsius), the quick cooling warehouse: - 35 degree Celsius.`,
      },
    ],
    sub: [
      {
        title: `Gateway Location`,
        desc: `Located at Lot A24-2, Ngang 1 Road, Phu An Thanh Industrial Park, An Thanh Commune, Ben Luc District, Long An Province, which is a prime location to connect arterial roads with the riverport and seaport system to the international airport as well as neighboring provinces. As a result, a refrigerated warehouse will make it convenient for businesses in the transportation of cargo when they are exporting.`,
      },
      {
        title: `Investment of modern technology`,
        desc: `The refrigerated warehouse system is equipped with the most modern of preserves, i.e., refrigerated technology, which has been updated with the latest technical equipment. This equipment is regularly maintained and upgraded as a storage system, thereby always ensuring that the process of operating and handling is intelligent and lean, and will always meet the required standards.`,
      },
      {
        title: `Cost-saving`,
        desc: `Having its advantageous location and owning the refrigerated warehouse and the irradiation factory, TPG has helped many businesses to save on transport expenses as well as loading/unloading costs of goods in exporting Agricultural - Fisheries products. In particular, we always make a commitment for a reasonable price for companionship and bring the most optimal policies to customers.`,
      },
      {
        title: `Flexibility in refrigerated warehouse rental service packages`,
        desc: `In order to facilitate the flexibility and optimize the operation of enterprises at the Toan Phat Refrigerated Warehouse, customers can register for a refrigerated storage rental package according to their specific needs. It is possible to rent for short-, medium- and long-term periods, depending on the actual weight of the goods or the required number of positions (or pallets).`,
      },
      {
        title: `Variety of additional services `,
        desc: `Besides the refrigerated warehouse rental service, the Toan Phat Refrigerated Warehouse also offers a wide range of additional services such as packaging, stamping, packaging change, goods classification, PE wrapping, etc., with the most competitive prices.`,
      },
      {
        title: `24/7 Operation`,
        desc: `The Toan Phat Refrigerated Warehouse operates 24/7 with an express service implemented by a professional team to handle customer requests quickly as well as responding to questions as soon as possible. This will meet the maximizing of the needs of storage and importing and exporting goods at all necessary times.`,
      },
      {
        title: `Fast import-export speed`,
        desc: `With the optimal software control and management system, the operation team which handles the storage service is well-trained, always cautious, and complies with the process. The Toan Phat Refrigerated Warehouse ensures fast, accurate, safe import and export speeds, always satisfying customer requirements.`,
      },
      {
        title: `Quality assurance of goods`,
        desc: `Due to the strict management system and procedures, enterprise goods shall be ensured optimum safety when stored and maintained in the Toan Phat Refrigerated Warehouse. The warehouse temperature and humidity shall be maintained in an appropriate manner to avoid affecting the quality of the stored goods. Moreover, all types of goods shall be classified and processed according to the necessary storage requirements.`,
      },
      {
        title: `Integrity and transparency at work`,
        desc: `Professional principles and ethics are always followed by the Toan Phat Refrigerated Warehouse. This includes honesty in commercial transactions, an accuracy of import and export data handling as well as clarity with regard to the implementation of customer procedures. In addition, it also adheres to the obligation of keeping confidential information and business activities for partners and customers.`,
      },
    ],
  },
];

export const LocationMapContent = [
  {
    locale: 'vi',
    title: 'Vị trí cửa ngõ',
    ttt: 1,
    desc: `Nhà máy Chiếu Xạ Toàn Phát và Kho Lạnh Toàn Phát được đặt tại Khu công nghiệp Phú An Thạnh (Bến Lức - Long An). Đây là vị trí vàng để kết nối đến các tuyến đường huyết mạch quốc gia, các “trục xương sống” trong hạ tầng giao thông của Đồng bằng sông Cửu Long. Đồng thời là tâm điểm kết nối đến hệ thống cảng sông, cảng biển và cảng hàng không quốc tế của khu vực. Lợi thế về vị trí sẽ giúp các doanh nghiệp tiết kiệm được chi phí lớn trong lộ trình vận chuyển hàng hoá đến cơ sở chiếu xạ, hay từ kho lạnh lưu trữ đến hệ thống cảng để xuất khẩu Nông - Thuỷ sản ra nước ngoài.`,
    sub: [
      {
        desc: `Ngay nút giao Cao tốc Trung Lương - Bến Lức, cách Quốc lộ 1A: 3km`,
      },
      { desc: `Cách Cảng Hiệp Phước: 35km` },
      {
        desc: `Cách Cảng Cát Lái: 40km`,
      },
      {
        desc: `Cách Cảng Quốc tế Long An: 40km`,
      },
      {
        desc: `Cách Cảng Cái Mép: 95km`,
      },
      {
        desc: `Cách Cảng Hàng không Quốc tế Tân Sơn Nhất: 42 km`,
      },
      {
        desc: `Giáp ranh với huyện Bình Chánh (TP. HCM)`,
      },
      {
        desc: `Cách trung tâm TP. HCM: 36km`,
      },
      {
        desc: `Tương lai gần kết nối trực tiếp đến cao tốc Bến Lức - Long Thành`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Gateway location',
    ttt: 2,
    desc: `Toan Phat Irradiation and the Toan Phat Refrigerated Warehouse are located in Phu An Thanh Industrial Park (Ben Luc - Long An). This is a prime location to link to the national arterial roads, which form the "backbone" of the transport infrastructure of the Mekong Delta. Furthermore, this is also the central point of connection with the river port and seaport system and the international airport in the region. Because of the advantageous location, enterprises can save on transport expenses when delivering cargo to the irradiation factories as well as from refrigerated warehouse to the port system for the export of agricultural - fishing products into foreign markets.`,
    sub: [
      {
        desc: `Turn right on the intersection of Trung Luong and Ben Luc Expressway, 3km from National Highway 1A`,
      },
      {
        desc: `To Hiep Phuoc Port: 35km`,
      },
      {
        desc: `To Cat Lai Port: 40km`,
      },
      {
        desc: `To Long An International Port: 40km`,
      },
      {
        desc: `To Cai Mep International Terminal: 95km`,
      },
      {
        desc: `To Tan Son Nhat International Airport: 42km`,
      },
      {
        desc: `Bordering with Binh Chanh district (HCMC)`,
      },
      {
        desc: `To HCMC centre: 36km`,
      },
      {
        desc: `This will directly connect to Ben Luc - Long Thanh highway very soon.`,
      },
    ],
  },
];

export const contactInfo = [
  {
    locale: 'vi',
    title: 'Thông tin liên hệ',
    desc: ``,
    
    directContact: {
      title: `Liên hệ trực tiếp`,
      sub: [
        {
          title: `Chiếu Xạ`,
          desc: [
            `Công ty TNHH Chiếu Xạ Toàn Phát`,          
          ],
          desc2: [
            {
              icon: taxIcon,
              desc: `1101846577`,
            },           
            {
              icon: phoneIcon,
              desc: `093 100 0001`,
            },           
            {
              icon: hotlineIcon,
              desc: `0272 378 6888`,
            },          
            {
              icon: mailIcon,
              desc: `thongtin@tpirr.vn
              tiepnhan@tpirr.vn`,
            },
            {
              icon: addressIcon,
              desc: `Lô A24-1, Đường Ngang 1,
              KCN Phú An Thạnh, Xã An Thạnh,
              Huyện Bến Lức, Tỉnh Long An.`,
            },
          ],
          button1: facebookButton,
          link1: item1_link1,
          button2: youtubeButton,
          link2: item1_link2,
        },
        {
          title: `Kho Lạnh`,
          desc: [
            `Công ty TNHH Kho Vận Toàn Phát`,          
          ],
          desc2: [
            {
              icon: taxIcon,
              desc: `1101966433`,
            },           
            {
              icon: phoneIcon,
              desc: `093 100 0001`,
            },           
            {
              icon: hotlineIcon,
              desc: `0272 391 6999`,
            },          
            {
              icon: mailIcon,
              desc: `thongtin@tprw.vn
              tiepnhan@tprw.vn`,
            },
            {
              icon: addressIcon,
              desc: `Lô A24-2, Đường Ngang 1,
              KCN Phú An Thạnh, Xã An Thạnh,
              Huyện Bến Lức, Tỉnh Long An.`,
            },
          ],
          button1: facebookButton,
          link1: item2_link1,
          button2: youtubeButton,
          link2: item2_link2,
        },
      ],
    },
  },
  {
    locale: 'en-US',
    title: 'Contact Info',
    desc: ``,
    
    directContact: {
      title: `Liên hệ trực tiếp`,
      sub: [
        {
          title: `Irradiation`,
          desc: [
            `Toan Phat Irradiation Co., Ltd`,          
          ],
          desc2: [
            {
              icon: taxIcon,
              desc: `1101846577`,
            },           
            {
              icon: phoneIcon,
              desc: `(+84) 93 100 0001`,
            },           
            {
              icon: hotlineIcon,
              desc: `(+84) 272 378 6888`,
            },          
            {
              icon: mailIcon,
              desc: `thongtin@tpirr.vn
              tiepnhan@tpirr.vn`,
            },
            {
              icon: addressIcon,
              desc: `Block A24-1, Ngang 1 Road,
              Phu An Thanh Industrial Park, 
              An Thanh Commune,
              Ben Luc District, Long An Province.`,
            },
          ],
          button1: facebookButton,
          link1: item1_link1,
          button2: youtubeButton,
          link2: item1_link2,
        },
        {
          title: `Refrigerated Warehouse`,
          desc: [
            `Toan Phat Logistics Co., Ltd `,          
          ],
          desc2: [
            {
              icon: taxIcon,
              desc: `1101966433`,
            },           
            {
              icon: phoneIcon,
              desc: `(+84) 93 100 0001`,
            },           
            {
              icon: hotlineIcon,
              desc: `(+84) 272 391 6999`,
            },          
            {
              icon: mailIcon,
              desc: `thongtin@tprw.vn
              tiepnhan@tprw.vn`,
            },
            {
              icon: addressIcon,
              desc: `Block A24-2, Ngang 1 Road,
              Phu An Thanh Industrial Park, 
              An Thanh Commune,
              Ben Luc District, Long An Province.`,
            },
          ],
          button1: facebookButton,
          link1: item2_link1,
          button2: youtubeButton,
          link2: item2_link2,
        },
      ],
    },
  },
];

export const supportContent = [
  {
    locale: 'vi',
    title: 'Hỗ trợ',
    sub: [
      {
        title: 'Chiếu xạ',
        desc: `Công ty TNHH Chiếu Xạ Toàn Phát
        Địa chỉ: Lô A24-1, Đường Ngang 1, Khu Công Nghiệp Phú An Thạnh, Xã An Thạnh, Huyện Bến Lức, Tỉnh Long An.
        MST: 1101846577.
        Đăng ký dịch vụ:
        Email:
        SĐT:`,
      },
      {
        title: 'Thuê kho lạnh',
        desc: `Công ty TNHH Toàn Phát - Kho Vận 
        Địa chỉ: Lô A24-2, Đường Ngang 1, Khu Công Nghiệp Phú An Thạnh, Xã An Thạnh, Huyện Bến Lức, Tỉnh Long An. 
        MST: 1101966433. 
        Đăng ký thuê kho: 
        Email:
        SĐT:`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Support',
    sub: [
      {
        title: 'Irradiation',
        desc: `Toan Phat Irradiation Co., Ltd
Address: Lot A24-1, Ngang 1 Street, Phu An Thanh Industrial Park, An Thanh Commune, Ben Luc District, Long An Province.
MST: 1101846577.
Register Service:
Email:
Tel:`,
      },
      {
        title: 'Cold storage rental',
        desc: `Toan Phat Co., Ltd - Warehouse
Address: Lot A24-2, Ngang 1 Street, Phu An Thanh Industrial Park, An Thanh Commune, Ben Luc District, Long An Province.
MST: 1101966433.
Register to rent a warehouse:
Email:
Tel:`,
      },
    ],
  },
];

export const goalsMain = [
  {
    locale: 'vi',
    title: 'Mục tiêu phát triển',
    sub: [
      {
        number: 1,
        desc: `TPI hứa hẹn sẽ vươn xa tầm quốc tế và mang lại giá trị bền vững đến đối tác cũng như toàn cộng đồng.`,
      },
      {
        number: 2,
        desc: `Tất cả đội ngũ, CBNV cùng vươn lên, tỏa sáng và tập thể luôn đồng lòng, gắn kết như những viên đá quý.`,
      },
      {
        number: 3,
        desc: `Từ lãnh đạo đến đội ngũ nhân viên các cấp các đội đều được đối xử bình đẳng, sẻ chia và được lắng nghe.`,
      },
      {
        number: 4,
        desc: `Từ lãnh đạo đến đội ngũ nhân viên các cấp các đội đều được đối xử bình đẳng, sẻ chia và được lắng nghe.`,
      },
      {
        number: 5,
        desc: `Sự gắn kết thể hiện trong đời sống sinh hoạt thường nhật tại công ty như những bữa ăn cùng nhau, những buổi tụ họp sinh nhật hay liên hoan.`,
      },
      {
        number: 6,
        desc: `Đội ngũ CBNV luôn hướng về mục tiêu chung, mỗi bộ phận luôn đảm nhiệm vai trò nhất định không thể tách rời. Từng mục tiêu nhỏ hướng về mục tiêu lớn đưa TPI ngày càng lớn mạnh và vươn xa tầm khu vực.`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Goals',
    sub: [
      {
        number: 1,
        desc: `TPI promises to go beyond the international reach and bring sustainable value to partners as well as the whole community.`,
      },
      {
        number: 2,
        desc: `All teams and employees rise up, shine and the team is always united and connected like gems.`,
      },
      {
        number: 3,
        desc: `From leaders to staff at all levels, all teams are treated equally, shared and heard.`,
      },
      {
        number: 4,
        desc: `From leaders to staff at all levels, all teams are treated equally, shared and heard.`,
      },
      {
        number: 5,
        desc: `Cohesion manifests in daily life at the company such as meals together, birthday gatherings or parties.`,
      },
      {
        number: 6,
        desc: `The staff is always aiming for the common goal, each department always takes on a certain role that cannot be separated. Each small goal towards the big goal makes TPI grow stronger and reach out to the region.`,
      },
    ],
  },
];

export const goalsLogisticssAndSocial = [
  {
    locale: 'vi',
    sub: [
      {
        title: 'Chiến lược phát triển nguồn nhân lực',
        desc: `Tài sản lớn nhất của một doanh nghiệp không phải là tiền cũng không phải bất động sản mà chính là con người. Vì vậy phát triển nguồn nhân lực là vấn đề thiết yếu và được ưu tiên hàng đầu.`,
      },
      {
        title: 'Xã hội và cộng đồng',
        desc: `Hoạt động từ thiện với tinh thần tương thân tương ái, cảm thông và sẻ chia những khó khăn với cộng đồng.
Không chỉ dừng lại ở chiếu xạ nông sản và thủy sản, TPI còn nghiên cứu thực hiện ứng dụng chiếu xạ trên nhiều mặt hàng khác góp phần thúc đẩy xuất khẩu hàng hóa, và khẳng định giá trị Quốc gia.
Giá chiếu xạ trái cây tươi tại Việt Nam hiện còn khá cao. TPI cố gắng để đưa ra mức phí chiếu xạ hợp lý hơn nhằm hỗ trợ các nhà xuất khẩu có thêm sức cạnh tranh trên thị trường quốc tế.
`,
      },
    ],
  },
  {
    locale: 'en-US',
    sub: [
      {
        title: 'Human resource development strategy',
        desc: `The biggest asset of a business is neither money nor real estate, but people. Therefore, human resource development is an essential issue and a top priority.`,
      },
      {
        title: 'Society and community',
        desc: `Charity activities with the spirit of mutual affection, sympathy and sharing difficulties with the community.
Not only stopping at irradiation of agricultural and aquatic products, TPI also researches and applies irradiation on many other items, contributing to promoting export of goods, and affirming the national value.
The price of fresh fruit irradiation in Vietnam is still quite high. TPI strives to offer more reasonable irradiation fees to help exporters be more competitive in the international market.`,
      },
    ],
  },
];

export const supportContact = [
  {
    locale: 'vi',
    title: 'Liên hệ',
    desc: `Cảm ơn bạn đã liên hệ! Xin điền vào biểu mẫu, chúc bạn một ngày tốt lành!`,
    sub: [
      { title: `Tên của bạn` },
      { title: `Email của bạn` },
      { title: `Số điện thoại của bạn` },
      { title: `Quốc gia` },
      { title: `Tên công ty` },
      { title: `Quan tâm dịch vụ` },
      { title: `Thông điệp` },
    ],
    button: `Liên hệ`,
  },
  {
    locale: 'en-US',
    title: 'Contact',
    desc: `Thank you for getting in touch! Fill the form, have a great day!`,
    sub: [
      { title: `Your Name` },
      { title: `Your Email` },
      { title: `Your Phone Number` },
      { title: `Country` },
      { title: `Company Name` },
      { title: `Interested in service` },
      { title: `Message` },
    ],
    button: `Contact`,
  },
];

export const questionContent = [
  {
    locale: 'vi',
    title: `Q&A - Hỏi đáp`,
    desc: `Thông tin chi tiết về TPG`,
    sub: [
      {
        number: 1,
        title: `Chiếu xạ là gì?`,
        desc: `Chiếu xạ là sử dụng năng lượng bức xạ ion hóa để xử lý hàng hóa nhằm đảm bảo vấn đề vệ sinh và an toàn cho sản phẩm, thực phẩm. Hiện nay trên thế giới có rất nhiều nước sử dụng công nghệ này để xử lý và bảo quản hơn 40 loại sản phẩm, thực phẩm khác nhau, bao gồm trái cây, rau, ngũ cốc, cá, tôm, thịt, gia cầm, thiết bị y tế…`,
      },
      {
        number: 2,
        title: `Mục đích của Chiếu xạ thực phẩm?`,
        desc: `Phòng chống thực phẩm gây bệnh: Chiếu xạ có thể được sử dụng hiệu quả để loại bỏ vi sinh vật gây bệnh từ thực phẩm, chẳng hạn như Salmonella và Escherichia coli.

Bảo quản: Chiếu xạ có thể được sử dụng để tiêu diệt hoặc vô hoạt vi sinh vật gây hư hỏng và phân hủy thực phẩm, đồng thời kéo dài tuổi thọ của các loại thực phẩm.

Kiểm soát côn trùng: Chiếu xạ có thể được sử dụng để tiêu diệt côn trùng bên trong hoặc trên bề mặt các loại trái cây. Chiếu xạ cũng giúp giảm các hoạt động kiểm soát sâu bệnh khác có thể gây hại cho trái cây.

Ức chế sự nảy mầm và quá trình chín: Chiếu xạ có thể được sử dụng để ức chế sự nảy mầm (ví dụ như khoai tây) và trì hoãn quá trình chín của trái cây để tăng thời gian bảo quản.
`,
      },
      {
        number: 3,
        title: `Lợi ích của việc chiếu xạ thực phẩm?`,
        desc: `Thực phẩm chiếu xạ rất an toàn và mang lại nhiều lợi ích.

Tính an toàn về mặt sức khỏe cũng như lợi ích về mặt kinh tế của thực phẩm chiếu xạ đã được các tổ chức có uy tín của Liên Hiệp Quốc như: Tổ chức Y tế Thế giới (WHO), Tổ chức Lương thực và Nông nghiệp (FAO) và Cơ quan Năng lượng Nguyên tử Quốc tế (IAEA)… chứng thực. `,
      },
      {
        number: 4,
        title: `Chiếu xạ có làm thực phẩm bị nhiễm xạ?`,
        desc: `Thực phẩm được chiếu xạ không tiếp xúc trực tiếp với nguồn phát ra phóng xạ, nên không thể trở thành “thực phẩm bị nhiễm phóng xạ” do đó không có tác động xấu đến người sử dụng.`,
      },
      {
        number: 5,
        title: `Chiếu xạ có tạo ra các chất độc hại cho thực phẩm và con người?`,
        desc: `Thực phẩm sau khi chiếu xạ không gây ra ảnh hưởng tiêu cực đến sức khỏe con người vì không xuất hiện độc tố và không có bất kỳ sự thay đổi thành phần hóa học nào.

Các nhà máy vận hành công nghệ chiếu xạ phải tuân theo quy trình kỹ thuật rất nghiêm ngặt, rất an toàn nên không gây ra bất cứ ảnh hưởng tiêu cực nào cho môi trường sống của con người. `,
      },
      {
        number: 6,
        title: `Chiếu xạ có làm giảm các chất dinh dưỡng có trong thực phẩm?`,
        desc: `Chiếu xạ không làm giảm giá trị dinh dưỡng mà vẫn giữ nguyên các vitamin acid amin và acid béo có trong thực phẩm… Ủy ban hỗn hợp giữa FAO, WHO và IAEA đã có nhiều nghiên cứu và khẳng định chiếu xạ không làm giảm các tố chất dinh dưỡng trong thực phẩm.`,
      },
      {
    number: 7,
    title: 'Vị trí của Nhà máy Chiếu xạ Toàn Phát và Kho Lạnh Toàn Phát có thuận tiện để vận chuyển hàng hóa xuất nhập khẩu?',
    desc: 'Nhà máy Chiếu xạ Toàn Phát và Kho Lạnh Toàn Phát được đặt tại Khu công nghiệp Phú An Thạnh (Bến Lức - Long An). Đây là vị trí vàng để kết nối đến các tuyến đường huyết mạch quốc gia, các “trục xương sống” trong hạ tầng giao thông của Đồng bằng sông Cửu Long. Đồng thời là tâm điểm kết nối đến hệ thống cảng sông, cảng biển và cảng hàng không quốc tế của khu vực như: Cảng Hiệp Phước, Cảng Cát Lái, Cảng Cái Mép, Cảng Quốc tế Long An, Cảng hàng không quốc tế Tân Sơn Nhất... Lợi thế về vị trí sẽ giúp các doanh nghiệp thuận tiện và tiết kiệm được chi phí lớn trong lộ trình vận chuyển hàng hoá để xuất khẩu Nông - Thuỷ sản ra nước ngoài.',
  },
  {
    number: 8,
    title: 'Khả năng lưu trữ tối đa của Kho Lạnh Toàn Phát là bao nhiêu?',
    desc: 'Với quy mô 10.000m2, Kho lạnh Toàn Phát sở hữu hệ thống lưu trữ đạt tiêu chuẩn quốc tế có tổng vị trí 12.000 pallet tương đương với sức chứa tối đa lên đến 12.000 tấn.',
  },
  {
    number: 9,
    title: 'Nhiệt độ lưu trữ của Kho Lạnh Toàn Phát như thế nào?',
    desc: 'Nhiệt độ lưu trữ từ -20°C (+/-2°C) cùng với kho làm lạnh nhanh -35°C, Kho Lạnh Toàn Phát phù hợp để lưu trữ nhiều loại hàng hóa, thực phẩm và đảm bảo an toàn chất lượng tối đa trong quá trình lưu kho.',
  },
  {
    number: 10,
    title: 'Các dịch vụ tại Kho Lạnh Toàn Phát là gì?',
    desc: 'Ngoài dịch vụ chính là lưu trữ nhiệt lạnh, Kho Lạnh Toàn Phát cung cấp các dịch vụ bổ trợ đa dạng khác như: đóng gói, dán tem, thay bao bì, phân loại hàng hóa, quấn PE… với mức phí cạnh tranh nhất để phục vụ tối đa các nhu cầu của khách hàng.',
  },
  {
    number: 11,
    title: 'Thời gian hoạt động của Nhà máy Chiếu xạ Toàn Phát và Kho Lạnh Toàn Phát như thế nào?',
    desc: 'Nhà máy Chiếu xạ Toàn Phát và Kho Lạnh Toàn Phát hoạt động 24/7 kể cả các ngày Lễ Tết, Quý Khách hàng có nhu cầu tư vấn, đăng ký sử dụng dịch vụ chiếu xạ và lưu trữ kho lạnh vui lòng liên hệ Hotline 093 100 0001 hoặc 092 191 6999.',
  },
    ],
  },
  {
    locale: 'en-US',
    title: 'Q&A – Questions & Answers',
    desc: `Information of TPG`,
    sub: [
      {
        number: 1,
        title: `What is irradiation?`,
        desc: `In order to ensure hygiene and safety of products and food, irradiation is a method of utilizing ionizing radiation to sterilize cargos. Nowadays, a large number of countries around the world are using this technology to store and preserve over 40 different kinds of products, such as fruits, vegetables, cereal, fishes, meals, poultry, medical equipment, etc.`,
      },
      {
        number: 2,
        title: `What is the purpose of Food Irradiation?`,
        desc: `Protecting food from foodborne illness (or food poisoning): if used effectively, irradiation can kill germs that can cause food poisoning, such as Salmonella and Escherichia coli.

Preserving: irradiation can be used to remove or inactivate microorganisms that cause food spoilage and decomposition, and prolongs the shelf life of foods.

Pest control: irradiation can be used to kill pests inside or on the surface of fruits. Irradiation helps to reduce the impact of other pest controls that can damage fruits.

Inhibition of germination and ripening: irradiation can be used to inhibit germination (e.g. potatoes) and decrease the ripening process of fruits to increase the preservation period.`,
      },
      {
        number: 3,
        title: `The benefits of Food Irradiation?`,
        desc: `Food irradiation is safe and has many benefits. The safety of health as well as the advantage of economy for food irradiation have full recognition of organizations in the United Nations including: World Health Organization (WHO), Food and Agriculture Organization (FAO), and International Atomic Energy Agency (IAEA).`,
      },
      {
        number: 4,
        title: `Does irradiation make food radioactive?`,
        desc: `Irradiated food does not come into direct contact with the radioactive source, so it cannot become “radioactive food”, meaning that there is no side effect on the user.`,
      },
      {
        number: 5,
        title: `Does irradiation create poison for food and humans?`,
        desc: `Because of the absence of toxicity and no change in chemical composition, irradiated food does not cause adverse effects on human health. The production facilities using irradiation technology must also follow a very stringent and secure technical process, thus not causing any negative impact on the human environment.`,
      },
      {
        number: 6,
        title: `Does irradiation reduce the nutritional value of food?`,
        desc: `The irradiation does not reduce the nutritional value of food; instead, it retains the vitamins, amino acids, and fatty acids contained in the food. It is confirmed that irradiation does not reduce nutrients in food, according to a number of studies carried out by the Committee taken from members of FAO, WHO, and IAEA.`,
      },
      {
    number: 7,
    title: 'Is the location of the Toan Phat Irradiation Factory and the Toan Phat Refrigerated Warehouse convenient for the transportation of both import and export goods?',
    desc: 'The Toan Phat Irradiation Factory and the Toan Phat Refrigerated Warehouse are located in Phu An Thanh Industrial Park (Ben Luc ward, Long An province). This is an excellent position to connect to the national arterial roads, the "backbone" of the transport infrastructure of the Mekong Delta region. Simultaneously, it is the focal point connecting to the river port systems, seaports and international airports of the region such as: Hiep Phuoc Port, Cat Lai Port, Cai Mep International Terminal, Long An International Port, Tan Son Nhat International Airport, etc. Because of this favorable location, our clients can benefit from the most convenient and economical transportation routes for exporting Agriculture - Fisheries commodities overseas. ',
  },
  {
    number: 8,
    title: 'What is the maximum storage capacity of the Toan Phat Refrigerated Warehouse?',
    desc: 'The Toan Phat Refrigerated Warehouse possesses a storage system that adheres to international standards, spanning across a scale of 10,000m². The facility is capable of accommodating a total of 12,000 pallets, which is equivalent to having a maximum capacity of 12,000 tons.',
  },
  {
    number: 9,
    title: 'How is the storage temperature of the Toan Phat Refrigerated Warehouse?',
    desc: 'The Toan Phat Refrigerated Warehouse is a suitable facility for preserving a diverse range of commodities and food items, as it maintains a storage temperature ranging from -20°C (+/-2°C) to a quick cooling warehouse temperature of -35°C, thereby guaranteeing optimal safety and quality throughout the storage process. ',
  },
  {
    number: 10,
    title: 'What are the services offered by the Toan Phat Refrigerated Warehouse?',
    desc: 'In addition to the main service of cold storage, the Toan Phat Refrigerated Warehouse provides a variety of supplementary services, including packaging, stamping, packaging alteration, goods classification, and PE wrapping… all at highly competitive rates to serve our customers needs in the best way possible.',
  },
  {
    number: 11,
    title: 'What Is the operating time of Toan Phat Irradiation Factory and Toan Phat Refrigerated Warehouse?',
    desc: 'The Toan Phat Irradiation Factory and Toan Phat Refrigerated Warehouse operate continuously 24/7 including holidays or new year period. For further assistance with consultation or registration of irradiation and refrigerated warehouse service, please contact us via Hotline 093 100 0001 or 092 191 6999.',
  },
    ],
  },
];

export const breadcrumb = {
  gioiThieu: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Giới thiệu về TOANPHAT GROUP' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'About TPG' }],
    },
  ],
  foodIrradiation: [
    {
      locale: 'vi',
      sub: [
        { path: '#', title: 'Logistics HUB' },
        { path: '#', title: 'Chiếu xạ' },
      ],
    },
    {
      locale: 'en-US',
      sub: [
        { path: '#', title: 'Logistics HUB' },
        { path: '#', title: 'Irradiation' },
      ],
    },
  ],
  location: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Vị trí' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Location' }],
    },
  ],
  coldStorage: [
    {
      locale: 'vi',
      sub: [
        { path: '#', title: 'Logistics HUB' },
        { path: '#', title: 'Kho lạnh lưu trữ' },
      ],
    },
    {
      locale: 'en-US',
      sub: [
        { path: '#', title: 'Logistics HUB' },
        { path: '#', title: 'Refrigerated Warehouse' },
      ],
    },
  ],
  goals: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Mục tiêu phát triển' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Goals' }],
    },
  ],
  contact: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Liên hệ' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Contact' }],
    },
  ],
  support: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Hỗ trợ' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Support' }],
    },
  ],
  questionAndAnswer: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Q&A' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Q&A' }],
    },
  ],
  market: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Thị trường' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Market' }],
    },
  ],
};

export const AboutTPGDesc = [
  {
    locale: 'vi',
    title: 'Giới thiệu về TOANPHAT GROUP',
    desc: `Năm 2017, bắt nguồn từ mong muốn chung tay cùng các doanh nghiệp nâng tầm thương hiệu và giá trị Nông - Thủy sản Việt, TOANPHAT GROUP (TPG) đã được xây dựng và phát triển. Để đặt nền móng cho sự khởi đầu, Dịch vụ Chiếu xạ (Công ty TNHH Chiếu Xạ Toàn Phát) là bước triển khai đầu tiên trong kế hoạch của TPG, thông qua đó đồng hành hỗ trợ các doanh nghiệp xuất khẩu Nông - Thủy sản giảm đi những áp lực về chi phí, nghiên cứu ứng dụng công nghệ để chủ động hơn trong lĩnh vực chiếu xạ và có thêm nhiều lợi thế khi xuất khẩu thực phẩm, hàng hóa ra quốc tế.

    Với tầm nhìn xa hơn để con đường đưa Nông - Thủy sản Việt Nam có mặt trên thị trường thế giới được thuận lợi hơn nữa, năm 2023 TPG đã mở rộng lĩnh vực phát triển, xây dựng và đưa vào vận hành Kho Lạnh Toàn Phát (Công ty TNHH Kho Vận Toàn Phát) với khả năng lưu trữ tối đa lên đến 12.000 tấn. Trong chiến lược phát triển dài hạn, TPG hướng đến trở thành Trung tâm Logistics (Logistics HUB) tại khu vực Đồng bằng sông Cửu Long cung cấp đầy đủ 03 dịch vụ: Chiếu xạ - Lưu trữ - Vận chuyển.`,
  },
  {
    locale: 'en-US',
    title: 'About TOANPHAT GROUP',
    desc: `In 2017, TOANPHAT GROUP (TPG) was set up and built as a result of the desire to cooperate with enterprises and to enhance the brand image and value of Vietnamese Agricultural-Fisheries Products. In the beginning, Irradiation Service (Toan Phat Irradiation Co., Ltd.) was the initial step in TPG's plan to lay the fundamental foundation, thereby supporting Agricultural - Fisheries exporters to reduce the pressure on costs, as well as researching and utilizing technologies to lead more proactively in the field of irradiation and gain more advantages in exporting food and goods in the international market.
    
    In 2023, with a strategic vision and a desire to facilitate the development of Vietnam's Agriculture and Fisheries on the world market, TPG has expanded its scale by constructing and operating Toan Phat Refrigerated Warehouse (Toan Phat Logistics Co., Ltd.) with a maximum storage capacity of up to 12.000 tons. In its long-term development strategy, TPG has always intended to become a Logistics Center (LOGISTICS HUB) of the Mekong Delta, providing the full three services: Irradiation - Storage - Transport.`,
  },
];

export const ThongDiepTPG = [
  {
    locale: 'vi',
    title: 'Thông điệp Ban Lãnh Đạo',
    desc: `Việt Nam có nhiều tiềm năng để phát triển Nông nghiệp, Đồng bằng sông Cửu Long là trung tâm lớn của ngành sản xuất Nông - Thủy sản, tuy nhiên những lợi thế đó vẫn chưa được tận dụng để có thể khẳng định thương hiệu và giá trị Nông - Thuỷ sản Quốc gia trên thị trường Quốc tế. 

    TOANPHAT GROUP ra đời với tầm nhìn trở thành một Trung tâm Logistics (Logistics HUB) cung cấp cả 03 dịch vụ: “Chiếu xạ - Lưu trữ - Vận chuyển” với công nghệ hiện đại, kỹ thuật tiên tiến và chi phí tối ưu nhất. Chúng tôi luôn cam kết đồng hành về giá, hỗ trợ các doanh nghiệp xuất khẩu Nông - Thủy sản có thêm lợi thế cạnh tranh trên thị trường Quốc tế.
    
    Từng mục tiêu nhỏ hướng về mục tiêu lớn, chúng tôi không chỉ nỗ lực đầu tư cả về trí tuệ con người, công nghệ hiện đại, trang thiết bị tiên tiến, mà còn quan tâm đến phản hồi của khách hàng để nâng cao chất lượng dịch vụ, tạo dựng uy tín thương hiệu và đưa TPG ngày càng vững mạnh.
    
    Ông VƯƠNG HIẾU
    Giám đốc Điều hành
    `,
  },
  {
    locale: 'en-US',
    title: 'Message from the Board of Management',
    desc: `There are a lot of potential developments in Agriculture in Vietnam, one of which is the Mekong Delta, a major center for the Agricultural - Fisheries field. Nevertheless, those advantages have not been exploited to enhance the brand name and value of the national Agricultural-Fisheries on the international market.

    With the strategic vision to become a Logistics Center (LOGISTICS HUB), which provides all three services: "Irradiation - Storage - Transport", with modern technologies and advanced techniques, TOANPHAT GROUP was founded at the most optimal cost. We always make a commitment for a reasonable price for companionship to support Agricultural-Fisheries' exporters to gain more competitive advantages on the international market.

    Taking small steps toward big goals, we would both strive to invest in human intelligence, modern technology and advanced equipment, and also put an emphasis on customer feedback to enhance service quality, build brand reputation and prestige, and to develop a stronger TPG.

    Mr. VUONG HIEU
    Managing Director
    `,
  },
];

export const CoreValueTPG = [
  {
    locale: 'vi',
    title1: 'Tầm nhìn - sứ mệnh',
    title2: `Giá trị cốt lõi`,
    subTitle1: 'Tầm nhìn:',
    subTitle2: 'Sứ mệnh:',
    subDesc1: 'TPG hướng đến mục tiêu trở thành Trung tâm Logistics hiện đại, thông minh với đầy đủ 03 chức năng: Chiếu xạ - Lưu trữ - Vận chuyển tại khu vực Đồng bằng sông Cửu Long.',
    subDesc2: 'Trở thành đối tác tin cậy của các doanh nghiệp xuất khẩu Nông - Thủy sản Việt Nam ra thị trường thế giới; mang đến những sản phẩm an toàn nhất cho cộng đồng xã hội; không ngừng nghiên cứu phát triển để chào đón, phục vụ các đối tác tiềm năng trong và ngoài nước.',
    desc: `Trong quá trình phát triển, đội ngũ Cán bộ công nhân viên (CBCNV) của TPG luôn hành động và giữ vững 6 giá trị cốt lõi:
    “TRỌNG - TÍN - TÂM - TRÍ - PHÁT - ÍCH”.
    Từng mỗi bộ phận đảm nhiệm một vai trò nhất định nhưng luôn hướng về mục tiêu chung và không thể tách rời. Tất cả tạo nên sự kết hợp hài hoà, một tập thể đoàn kết và luôn tuân thủ những giá trị cốt lõi để nâng tầm phát triển mỗi ngày.`,
  },
  {
    locale: 'en-US',
    title1: 'Vision - Mission',
    title2: `CORE VALUES`,
    subTitle1: 'Vision:',
    subTitle2: 'Mission:',
    subDesc1: 'TPG aims to become a Logistics Center which is modern and high-tech in the Mekong Delta, with three services: Irradiation - Storage – Transport.',
    subDesc2: 'To become a reliable partner of enterprises exporting Agricultural-Fisheries Products in Vietnam to the international market; providing the safest products for the social community; and consistently researching and developing to collaborate and serve potential partners, both in the country and abroad.',
    desc: `Throughout the development path of TPG, six core values have been consistently implemented and upheld:
    "Respect – Prestige – Heart – Mindset – Development - Benefit".
    Although each value plays a certain role, it is always toward the common and inseparable goal. All values combine to create a harmony, and a united team always adheres to the core values to enhance development every day.`,
  },
];

export const FutureGoalTPG = [
  {
    locale: 'vi',
    mainTitle: 'Mục tiêu phát triển',
    title1: `Phát triển kinh doanh`,
    title2: `Phát triển nguồn nhân lực`,
    title3: `Phát triển cộng đồng & xã hội`,
    desc1:  `Chúng tôi liên tục cập nhật công nghệ, cải tiến kỹ thuật, đầu tư trang thiết bị hiện đại trong cả dịch vụ chiếu xạ, kho lạnh lưu trữ và vận chuyển. Luôn coi trọng việc nghiên cứu, ứng dụng công nghệ nhằm đáp ứng yêu cầu khắt khe của thị trường, đồng thời tiếp nhận, lắng nghe phản hồi của khách hàng để nâng cao chất lượng dịch vụ, góp phần thúc đẩy hoạt động xuất khẩu hàng hóa, khẳng định giá trị Nông sản - Thuỷ sản Việt Nam và sự phát triển của TPG.`,
    desc2:  `Đội ngũ nhân sự là tài sản quý giá nhất của doanh nghiệp, chúng tôi chú trọng việc bồi dưỡng, đào tạo nên những nhân sự ưu tú, không ngừng tạo động lực, thúc đẩy nguồn nhân lực phát triển, hướng đến xây dựng môi trường làm việc năng động, sáng tạo, chuyên nghiệp và có nhiều cơ hội thăng tiến.`,
    desc3:  `Giá trị doanh nghiệp luôn gắn liền với những giá trị mang đến cho cộng đồng. Trong quá trình hoạt động, TPG cam kết giảm thiểu những tác động đến môi trường, tạo công ăn việc làm cho người lao động, đóng góp trách nhiệm với xã hội thông qua các hoạt động thiện nguyện, xây dựng vì sự phát triển, văn minh của cộng đồng.`,
  },
  {
    locale: 'en-US',
    mainTitle: 'Development Goals',
    title1: `Business development `,
    title2: `Human resource development`,
    title3: `Community & Social Development`,
    desc1:  `We keep updating technology, improving techniques, and investing in modern equipment in both of the irradiation services, refrigerated and transportation. In order to meet the strict requirements of the market, we always put an emphasis on the research and application of technology. In addition, we appreciate and internalize customer feedback to enhance service quality as well as contributing to promote the export activities of our goods, and give assurance as to the value of Vietnam's Agricultural - Fisheries products and the development of TPG.`,
    desc2:  `Human resources are the greatest asset of an enterprise. We concentrate on promotion and training of excellent staff, creating motivation, developing human resources, and establishing a dynamic, creative, and professional working environment with many career opportunities.`,
    desc3:  `Corporate values are always associated with the values created for the community. Throughout the operation, TPG commits to minimizing environmental damages, to creating jobs for employees and contributing to social responsibility with volunteering activities for the development of community civilization.`,
  },
];

export const CorpCulture = [
  {
    locale: 'vi',
    mainTitle: 'Văn hóa doanh nghiệp',
    mainDesc: `Từ những con người với những cá tính khác biệt, để kiến tạo nên một tập thể đồng lòng, gắn kết và đặt mục tiêu vì sự phát triển chung, chúng tôi xây dựng văn hoá doanh nghiệp dựa trên 03 tiêu chí:`,
    title1: `Sự đa dạng hòa hợp`,
    title2: `Phát triển không ngừng`,
    title3: `Gắn kết và thấu hiểu`,
    desc1:  `TPG chú trọng xây dựng văn hóa doanh nghiệp xuất phát từ sự đa dạng hòa hợp. Dù là bất cứ ai, không phân biệt vùng miền, xuất phát điểm, từ những nhân sự cốt cán đến những nhân sự mới đều được công nhận năng lực, khuyến khích học hỏi, phát huy điểm mạnh và thúc đẩy tư duy khác biệt để phát triển nhân tài.`,
    desc2:  `Luôn nâng cao kỹ năng làm việc, không ngừng sáng tạo và chinh phục các mục tiêu to lớn hơn là những thách thức mà các thành viên TPG cần vượt qua. Để kiến tạo nên tương lai mơ ước, mỗi cá nhân đều cần thử nghiệm những điều mới, đưa ra thử thách và vượt giới hạn chính là công thức để đạt được những thành quả cao hơn.`,
    desc3:  `TPG xây dựng một môi trường làm việc cởi mở, thân thiện, nhân viên được tự do đóng góp và tự do nêu ý kiến, đó là chìa khóa giúp mọi người hiểu nhau hơn. Nhân sự tại TPG thường xuyên có những hoạt động tập thể để tăng tính gắn kết và thấu hiểu; tham gia các hoạt động vì cộng đồng để tri ân những cơ hội và giá trị mà TPG đạt được, cũng như trân trọng hơn những gì mình đang có.`,
  },
  {
    locale: 'en-US',
    mainTitle: 'Corporate culture',
    mainDesc: `We create the corporate culture based on three criteria to build a united and cohesive team, including individuals with various personality types and set goals for the joint development:`,
    title1: `Business development `,
    title2: `Human resource development`,
    title3: `Community & Social Development`,
    desc1:  `TPG focuses on building the corporate culture based on harmony, compatibility, and diversity. Everyone, from core employees to new employees, regardless of region or starting foundation is appreciated for their ability, encouraged to learn, promote strengths, and promote different mindsets for talent development.`,
    desc2:  `TPG members must face the challenges of developing their professional skills, always creating, and constantly conquering larger aims. To fulfill dreams for the future, each individual must experience new things and succeed in dealing with challenges. The formula for achieving better results is going beyond the bounds.`,
    desc3:  `In order to help everyone understand each other better, TPG designs an open and friendly workplace in which workers are free to contribute ideas and express their views freely. TPG's staff are regularly taking part in team activities with a view to fostering cohesion and comprehension, volunteering their time at community events to show their gratitude of the opportunities and values that TPG has gained as well as appreciating what they have. `,
  },
];

export const footerInfo = [
  {
    locale: 'vi',
    title1: `Chiếu Xạ Toàn Phát`,
    title2: `Kho Lạnh Toàn Phát`,
    hotlineCX: `093 100 0001`,
    hotlineKL: `093 100 0001`,
  },
  {
    locale: 'en-US',
    title1: `Toan Phat
Irradiation`,
    title2: `Toan Phat
Refrigerated Warehouse`,
    hotlineCX: `(+84) 93 100 0001`,
    hotlineKL: `(+84) 93 100 0001`,
  },
];

export const contactBarLabel = [
  {
    locale: 'vi',
    kholanh: "Kho Lạnh",
    chieuxa: "Chiếu Xạ",
  },
  {
    locale: 'en-US',
    kholanh: "TPRW",
    chieuxa: "TPI",
  },
];
