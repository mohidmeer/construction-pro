import { Footer, Hero, NavBar, Services, TopBar } from "@/components/Landing";
import Head from "next/head";
import Image from "next/image";
const locale = await import(`../locales/en.json`);
export default function About(){
    return(
        <>
        <Head>
            <title>{'BERG | About Us'}</title>
            <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
            <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
            {/* <meta property="og:image" content={ogImageurl} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" /> */}
            <meta property="og:title" content={'BERG | Contact Us'} />
    
    
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={'BERG | Contact Us'} />
            <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
            {/* <meta name="twitter:image" content={ogImageurl} /> */}
          </Head>
        <div className='md:p-0 p-2'>
          <TopBar locale={locale} />
          <Hero locale={locale} form={false}  >
            <NavBar locale={locale}    />
          </Hero>
          <div className="bg-primary ">
            <AboutUS/>
          </div>
          
          <Footer/>
        </div>
        </>
    );
}


function AboutUS(){

    return(
        <div className="mx-auto max-w-6xl ">
            
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4  !text-white">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6  ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 relative">
                    <Image className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" width={400} height={600}  alt="A group of People" />
                </div>
            </div>
    
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6  ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                             <Image className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" width={200} height={200}  alt="Alexa featured Image" />
                            <Image className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" width={200} height={200}  alt="Alexa featured Image" />
                            <p className="font-medium text-xl leading-5  mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" width={200} height={200} alt="Olivia featured Image" />
                            <Image className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" width={200} height={200} alt="Olivia featured Image" />
                            <p className="font-medium text-xl leading-5  mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" width={200} height={200} alt="Liam featued Image" />
                            <Image className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" width={200} height={200} alt="Liam featued Image" />
                            <p className="font-medium text-xl leading-5  mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" width={200} height={200} alt="Elijah featured image" />
                            <Image className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" width={200} height={200} alt="Elijah featured image" />
                            <p className="font-medium text-xl leading-5  mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
       

        </div>
    );
}