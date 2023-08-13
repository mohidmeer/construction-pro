import TopBar from '@/components/Landing/TopBar';
import NavBar from '@/components/Landing/NavBar';
import Hero from '@/components/Landing/Hero';
const locale = await import(`../locales/en.json`);



export default function Home() {
  return (
    <div className=''>
      <TopBar locale={locale} />
      
      <Hero locale={locale} >
        <NavBar locale={locale} />
      </Hero>
    </div>
  );
}



