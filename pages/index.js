import { Inter } from 'next/font/google'
import TopBar from '@/components/Landing/TopBar';
import NavBar from '@/components/Landing/NavBar';
import Hero from '@/components/Landing/Hero';
const locale = await import(`../locales/en.json`);

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <TopBar locale={locale} />
      <NavBar locale={locale} />
      <Hero locale={locale} />
    </div>
  );
}



