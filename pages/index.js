import {About, Articles, Commercial, EmergencyRepair, Faqs, Footer, Hero, Install, Insurance, NavBar, PageSection, Pricing, Process, Quotes, Repair, Restoration, Reviews, Services, TopBar} from '@/components/Landing';


const locale = await import(`../locales/en.json`);

export default function Home() {
  return (
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
  );
}



