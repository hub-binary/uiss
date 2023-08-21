import './globals.css'
import { Inter } from 'next/font/google'
import {
  TopBar,
  NavBar,
  Footer
} from '/src/components';
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unity Integrated Security Service',
  description: "Unity Integrated Security Service Ltd.",
  icon: "/img/Unity Logo.png"
}

export default function RootLayout({ children }) {  
  
  return (
    <html lang="en">
      <head>
        <Script src="/lib/jquery/jquery-3.4.1.min.js"></Script>

        <meta charset="utf-8" />
        <title>Unity Integrated Security Services Limited</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Security, insecurity, guards, news" name="keywords" />
        <meta content="Unity Integrated Security" name="description" />
        {/* <!-- Favicon --> */}
        <link href="/img/Unity Logo.png" rel="icon" />

        {/* <!-- Font Awesome --> */}
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" /> */}
        <link href="/lib/fontawesome/all.min.css" rel="stylesheet" />

        {/* <!-- Flaticon Font --> */}
        <link href="/lib/flaticon/font/flaticon.css" rel="stylesheet" />

        {/* <!-- Libraries Stylesheet --> */}
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="/css/style.css" rel="stylesheet" />
      </head>



      <body className={inter.className}>
        <TopBar />
        <NavBar />

        {children}
      
        <Footer />

        <a href="#" class="btn btn-secondary border back-to-top"><i class="fa fa-angle-double-up"></i></a>
      
        
        <Script src="/lib/bootstrap/bootstrap.bundle.min.js"></Script>
        <Script src="/lib/easing/easing.min.js"></Script>
        <Script src="/lib/waypoints/waypoints.min.js"></Script>
        <Script src="/lib/counterup/counterup.min.js"></Script>
        <Script src="/lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script src="/js/main.js"></Script>
      
      </body>
    </html>
  )
}
