import Image from "next/image";
import award1 from '@/public/images/awards/1.webp'
import award2 from '@/public/images/awards/2.webp'
import award3 from '@/public/images/awards/3.webp'
import award4 from '@/public/images/awards/4.webp'
import award5 from '@/public/images/awards/5.webp'
import award6 from '@/public/images/awards/6.webp'
import award7 from '@/public/images/awards/7.webp'
import award8 from '@/public/images/awards/8.webp'
import about from  '@/public/images/about.jpg'

export default function About({locale,className}){ 
    return (
        <div className={`flex flex-col justify-end h-[70vh]  max-w-6xl mx-auto mt-52  sm:mt-20 ${className}`}>
            <div className="flex gap-10 ">
                <div className="flex-col flex gap-8 w-full">
                    <h2 className="text-2xl font-semibold ">YOUR LOCAL ROOFING CONTRACTOR</h2>
                    <p>{locale.companyDescription}</p>
                    <p className="font-bold">We are one of the only roofing companies in Cranford, NJ that specializes in insurance claims for natural disasters.</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        <div className="w-full relative h-20">
                            <Image
                                src={award1}
                                alt={'award'}
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className="w-full relative h-20">
                            <Image
                                src={award2}
                                alt={'award'}
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className="w-full relative h-20">
                            <Image
                                src={award3}
                                alt={'award'}
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className="w-full relative h-20">
                            <Image
                                src={award4}
                                alt={'award'}
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className="w-full relative h-20">
                            <Image
                                src={award5}
                                alt={'award'}
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className="w-full relative h-20">
                            <Image
                                src={award6}
                                alt={'award'}
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className="w-full relative h-20">
                            <Image
                                src={award7}
                                alt={'award'}
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className="w-full relative h-20">
                            <Image
                                src={award8}
                                alt={'award'}
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: "contain"
                                }} />
                        </div>
                       
                        
                        
                    </div>
                </div>
                <div className=" w-full h-full relative hidden lg:block" >
                    <Image
                        alt='Mountains'
                        src={about}
                        className="rounded-md"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover"
                        }} />
                </div>
            </div>
        </div>
    );
}