import TopBar from '@/components/Landing/TopBar';
import NavBar from '@/components/Landing/NavBar';
import Hero from '@/components/Landing/Hero';
import About from '@/components/Landing/About';
import Services from '@/components/Landing/Services';
import PageSection from '@/components/Landing/PageSection';
import Insurance from '@/components/Landing/Insurance';
import Pricing from '@/components/Landing/Pricing';
import Quotes from '@/components/Landing/Quotes';
import Install from '@/components/Landing/Install';
import Process from '@/components/Landing/Process';
import Repair from '@/components/Landing/Repair';
import EmergencyRepair from '@/components/Landing/EmergencyRepair';
import Restoration from '@/components/Landing/Restoration';
import Commercial from '@/components/Landing/Commercial';
const locale = await import(`../locales/en.json`);



export default function Home() {
  return (
    <div className=''>
      <TopBar locale={locale} />
      
      <Hero locale={locale} >
        <NavBar locale={locale} />
      </Hero>
      <About locale={locale} />
      <Services/>
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
    </div>
  );
}



