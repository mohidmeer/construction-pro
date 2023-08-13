import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function Hero({ children ,locale}) {
    return (
        <div className="relative h-[600px]  bg-center bg-cover bg-no-repeat p-4">
            <div className="absolute  inset-0 bg-[url('../public/assets/images/hero.jpg')] bg-center bg-cover bg-no-repeat brightness-50"></div>
            <div className="relative h-full">
                {children}
                <div className=" max-w-6xl mx-auto my-16 ">
                    <div className="flex justify-between w-full ">
                        <div >
                            <Cta locale={locale}/>
                        </div>
                        <div >
                            {/* <Cta/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Cta({locale}){
    return (
        <div className="flex flex-col gap-4 max-w-[450px] ">
            <p className="text-transparent bg-clip-text golden-gradient font-bold ml-auto ">New Jersey Trusted Roofing Contractor</p>
            <p className="text-white text-5xl font-extrabold leading-snug  ">Protecting what<br/> matters <span className="red-gradient"> the most</span> </p>
            <p className="text-white mt-2 ">Whether you&#39;re in need of a full roof replacement or a roof  repair, you can count on our expert team to get the job done.</p>
            <div className="flex justify-between">
                <Link href={'#cta'} className="p-4 golden-gradient max-w-fit rounded-lg text-center  ">
                    <span className="font-extrabold text-2xl">GET A QUOTE</span>
                    <p className="text-xs font-bold">Within 15 minutes</p>
                </Link>
                <div className="text-white">
                    <p>Or Just <span className="font-extrabold">Text Or Call</span> </p>
                    <p className="flex gap-2 items-center mt-2 cursor-pointer group relative">
                        <FaPhoneAlt className='text-2xl text-white group-hover:text-orange-300 font-bold '/>
                        <p className="golden-gradient bg-clip-text group-hover:text-transparent font-bold text-2xl ">{locale.contactNumber}</p>
                    </p>
                </div>

            </div>
        </div>
    );
}