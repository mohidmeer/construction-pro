import {
  About, 
  Articles, 
  Commercial, 
  EmergencyRepair, 
  Faqs, 
  Footer, 
  Hero, 
  Install, 
  Insurance, 
  NavBar, 
  PageSection, 
  Pricing, 
  Process, 
  Quotes, 
  Repair, 
  Restoration, 
  Reviews, 
  Services, 
  TopBar} from '@/components/Landing';
import Head from 'next/head';


const locale = await import(`../locales/en.json`);

export default function Home() {
  return (
    <>
    <Head>
        <title>{'Roofing Contractor'}</title>
        <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
        <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
        {/* <meta property="og:image" content={ogimgurl} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" /> */}
        <meta property="og:title" content={'Construction Contractor'} />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'Construction Contractor'} />
        <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
        {/* <meta name="twitter:image" content={ogimgurl} /> */}
      </Head>
    <div className='md:p-0 p-2'>
      <TopBar locale={locale} />
      <Hero locale={locale} >
        <NavBar locale={locale} />
      </Hero>
      <About locale={locale} className={'mt-10'} />
      <div id="services">
        <Services/>
      </div>
       <PageSection/>
       <Insurance/>
       <Pricing/>
       <Quotes/>
       <Install/>
       <Process/>
       <Repair/>
       <EmergencyRepair/>
       <Restoration/>
       <Commercial/>
       <Articles/>
       <Faqs/> 
       <Reviews/>
      <Footer/> 
    </div>
    </>
  );
}



