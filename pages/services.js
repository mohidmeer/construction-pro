import { Footer, Hero, NavBar, Services, TopBar } from "@/components/Landing";
import About from "./about-us";
import Head from "next/head";
const locale = await import(`../locales/en.json`);
export default function Service(){
    return(
        <>
        <Head>
            <title>{'BERG | Services'}</title>
            <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
            <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
            {/* <meta property="og:image" content={ogimgurl} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" /> */}
            <meta property="og:title" content={'Our Services'} />
    
    
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={'Our Services'} />
            <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
            {/* <meta name="twitter:image" content={ogimgurl} /> */}
          </Head>
        <div className='md:p-0 p-2'>
          <TopBar locale={locale} />
          <Hero locale={locale} >
            <NavBar locale={locale} />
          </Hero>
          <div id="services" className='mt-[200px]'>
            <Services/>
          </div>
          <Footer/>
        </div>
        </>


    );
}