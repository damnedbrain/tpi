import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="keywords" content="TOANPHAT GROUP,Toàn Phát Group,Toàn Phát, Chiếu Xạ Toàn Phát, Kho Lạnh Toàn Phát, Trung tâm Logistics, Chiếu xạ, Công nghệ chiếu xạ, Thực phẩm chiếu xạ, Chiếu xạ thực phẩm, Chiếu xạ nông sản, Chiếu xạ thuỷ sản, Chiếu xạ trái cây, Xử lý chiếu xạ, Phương pháp chiếu xạ, Dịch vụ chiếu xạ, Kiểm dịch thực vật, Lưu trữ, Kho lạnh công nghiệp, Kho lạnh lưu trữ, Kho lạnh bảo quản, Dịch vụ kho lạnh, Thuê kho lạnh, Dịch vụ Logistics, Dịch vụ kho bãi, Vận chuyển, Dịch vụ vận chuyển, Kho lạnh, Xuất nhập khẩu, Xuất nhập khẩu nông sản, Xuất nhập khẩu thuỷ sản, Cơ sở chiếu xạ, Nhà máy chiếu xạ, Cơ sở lưu trữ" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
        <link href="https://file.myfontastic.com/YjMCT8SfZjPdLAUqm4ndt6/icons.css" rel="stylesheet"></link>
        
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta name='title' content="TOAN PHAT GROUP" />
            <meta name='description' content="TOANPHAT GROUP | Chiếu xạ - Lưu trữ kho lạnh - Vận chuyển 
            TOANPHAT GROUP (TPG) gồm hai thành viên: Công ty TNHH Chiếu Xạ Toàn Phát (Nhà Máy Chiếu Xạ Toàn Phát) và Công ty TNHH Kho Vận Toàn Phát (Kho Lạnh Toàn Phát).
            TPG hướng đến trở thành Trung tâm Logistics (Logistics HUB) hiện đại và thông minh tại Đồng bằng sông Cửu Long cung cấp đầy đủ 03 dịch vụ: Chiếu xạ - Lưu trữ kho lạnh - Vận chuyển." />
      </Head>
      <body>
      
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}