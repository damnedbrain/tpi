import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="keywords" content="TOANPHAT Group,Toàn Phát Group,Toàn Phát, Chiếu Xạ Toàn Phát, Kho Lạnh Toàn Phát, Trung tâm Logistics, Chiếu xạ, Công nghệ chiếu xạ, Thực phẩm chiếu xạ, Chiếu xạ thực phẩm, Chiếu xạ nông sản, Chiếu xạ thuỷ sản, Chiếu xạ trái cây, Xử lý chiếu xạ, Phương pháp chiếu xạ, Dịch vụ chiếu xạ, Kiểm dịch thực vật, Lưu trữ, Kho lạnh công nghiệp, Kho lạnh lưu trữ, Kho lạnh bảo quản, Dịch vụ kho lạnh, Thuê kho lạnh, Dịch vụ Logistics, Dịch vụ kho bãi, Vận chuyển, Dịch vụ vận chuyển, Kho lạnh, Xuất nhập khẩu, Xuất nhập khẩu nông sản, Xuất nhập khẩu thuỷ sản, Cơ sở chiếu xạ, Nhà máy chiếu xạ, Cơ sở lưu trữ" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet" />        
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
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
        <meta name='title' content="TOAN PHAT Group" />
        <meta name='description' content="TOANPHAT Group | Chiếu xạ - Lưu trữ kho lạnh - Vận chuyển 
            TOANPHAT Group (TPG) gồm hai thành viên: Công ty TNHH Chiếu Xạ Toàn Phát (Nhà Máy Chiếu Xạ Toàn Phát) và Công ty TNHH Kho Vận Toàn Phát (Kho Lạnh Toàn Phát).
            TPG hướng đến trở thành Trung tâm Logistics (Logistics HUB) hiện đại và thông minh tại Đồng bằng sông Cửu Long cung cấp đầy đủ 03 dịch vụ: Chiếu xạ - Lưu trữ kho lạnh - Vận chuyển." 
        />
        
        <meta name='image' content="https://toanphatgroup.com/favicon.ico"/>
        <meta itemProp='name' content="TOAN PHAT Group" />
        <meta itemProp='description' content="TOANPHAT Group | Chiếu xạ - Lưu trữ kho lạnh - Vận chuyển 
            TOANPHAT Group (TPG) gồm hai thành viên: Công ty TNHH Chiếu Xạ Toàn Phát (Nhà Máy Chiếu Xạ Toàn Phát) và Công ty TNHH Kho Vận Toàn Phát (Kho Lạnh Toàn Phát).
            TPG hướng đến trở thành Trung tâm Logistics (Logistics HUB) hiện đại và thông minh tại Đồng bằng sông Cửu Long cung cấp đầy đủ 03 dịch vụ: Chiếu xạ - Lưu trữ kho lạnh - Vận chuyển."/>
        {/* <meta itemProp='image' content="https://toanphatgroup.com/favicon.ico"/> */}

        {/* <meta property='og:url' content='toanphatgroup.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="TOAN PHAT Group"/> */}
        <meta property='og:description' content="TOANPHAT Group | Chiếu xạ - Lưu trữ kho lạnh - Vận chuyển 
            TOANPHAT Group (TPG) gồm hai thành viên: Công ty TNHH Chiếu Xạ Toàn Phát (Nhà Máy Chiếu Xạ Toàn Phát) và Công ty TNHH Kho Vận Toàn Phát (Kho Lạnh Toàn Phát).
            TPG hướng đến trở thành Trung tâm Logistics (Logistics HUB) hiện đại và thông minh tại Đồng bằng sông Cửu Long cung cấp đầy đủ 03 dịch vụ: Chiếu xạ - Lưu trữ kho lạnh - Vận chuyển."/>
        {/* <meta property='og:image' content="https://toanphatgroup.com/favicon.ico"/>
        <meta property='og:site_name' content="TOAN PHAT Group" /> */}

      </Head>
      
      <body className="p-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
