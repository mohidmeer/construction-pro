import TopBar from '@/components/Landing/TopBar';
import NavBar from '@/components/Landing/NavBar';
import Hero from '@/components/Landing/Hero';
import About from '@/components/Landing/About';
import Services from '@/components/Landing/Services';
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
    </div>
  );
}



