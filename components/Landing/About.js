import Image from "next/image";


export default function About({locale}){ 
    return (
        <div className="flex flex-col justify-end h-[70vh]  max-w-6xl mx-auto mt-52  sm:mt-20 lg:mt-0">
            <div className="flex gap-10 ">
                <div className="flex-col flex gap-8 w-full">
                    <h2 className="text-2xl font-semibold ">YOUR LOCAL ROOFING CONTRACTOR</h2>
                    <p>{locale.companyDescription}</p>
                    <p className="font-bold">We are one of the only roofing companies in Cranford, NJ that specializes in insurance claims for natural disasters.</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        <div className="w-full relative h-20">
                            <Image src={'/../assets/awards/1.webp'} alt={'award'} layout='fill' objectFit='contain' />
                        </div>
                        <div className="w-full relative h-20">
                            <Image src={'/../assets/awards/2.webp'} alt={'award'} layout='fill' objectFit='contain' />
                        </div>
                        <div className="w-full relative h-20">
                            <Image src={'/../assets/awards/3.webp'} alt={'award'} layout='fill' objectFit='contain' />
                        </div>
                        <div className="w-full relative h-20">
                            <Image src={'/../assets/awards/4.webp'} alt={'award'} layout='fill' objectFit='contain' />
                        </div>
                        <div className="w-full relative h-20">
                            <Image src={'/../assets/awards/5.webp'} alt={'award'} layout='fill' objectFit='contain' />
                        </div>
                        <div className="w-full relative h-20">
                            <Image src={'/../assets/awards/6.webp'} alt={'award'} layout='fill' objectFit='contain' />
                        </div>
                        <div className="w-full relative h-20">
                            <Image src={'/../assets/awards/7.webp'} alt={'award'} layout='fill' objectFit='contain' />
                        </div>
                        <div className="w-full relative h-20">
                            <Image src={'/../assets/awards/8.webp'} alt={'award'} layout='fill' objectFit='contain' />
                        </div>
                       
                        
                        
                    </div>
                </div>
                <div className=" w-full h-full relative hidden lg:block" >
                    <Image  alt='Mountains' src='/../assets/images/about.jpg' layout='fill' objectFit='cover' className="rounded-md"/>
                </div>
            </div>
        </div>
    )
}