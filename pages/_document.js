import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="keywords" content="TOANPHAT GROUP,Toàn Phát Group,Toàn Phát, Chiếu Xạ Toàn Phát, Kho Lạnh Toàn Phát, Trung tâm Logistics, Chiếu xạ, Công nghệ chiếu xạ, Thực phẩm chiếu xạ, Chiếu xạ thực phẩm, Chiếu xạ nông sản, Chiếu xạ thuỷ sản, Chiếu xạ trái cây, Xử lý chiếu xạ, Phương pháp chiếu xạ, Dịch vụ chiếu xạ, Kiểm dịch thực vật, Lưu trữ, Kho lạnh công nghiệp, Kho lạnh lưu trữ, Kho lạnh bảo quản, Dịch vụ kho lạnh, Thuê kho lạnh, Dịch vụ Logistics, Dịch vụ kho bãi, Vận chuyển, Dịch vụ vận chuyển, Kho lạnh, Xuất nhập khẩu, Xuất nhập khẩu nông sản, Xuất nhập khẩu thuỷ sản, Cơ sở chiếu xạ, Nhà máy chiếu xạ, Cơ sở lưu trữ" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
        <link href="https://file.myfontastic.com/YjMCT8SfZjPdLAUqm4ndt6/icons.css" rel="stylesheet"></link>
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NSRRC4KB');`}}></Script>
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
      </Head>
      <body>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NSRRC4KB" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}