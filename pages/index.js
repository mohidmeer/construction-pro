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
    </div>
  );
}



