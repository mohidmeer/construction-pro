import Link from "next/link"

import logoSvg from '@/public/images/logo.svg'
import Image from "next/image"

const servicesMenu = [
    { id: 1, name: 'Residential Roofing', slug: 'residential-roofing' },
    { id: 2, name: 'Commericial Roofing', slug: 'commercial-roofing' },
]
const roofTypeMenu = [
    { id: 1, name: 'Asphalt Roofing', slug: 'asphalt-roofing' },
    { id: 2, name: 'Metal Roofing', slug: 'metall-roofing' },
]

export default function NavBar() {
    return (
        <div className="">
            <div className="max-w-6xl py-8 px-2 mx-auto">
                <div className="flex items-center justify-between">
                    <Logo />
                    <nav>
                        <ul className="md:gap-5 lg:gap-10 md:flex hidden ">
                            <li className="font-semibold lg:text-xl hover:tracking-widest transition-all text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent group whitespace-nowrap ">
                                <Link href={'/#services'}>Services </Link>
                                <Menu items={servicesMenu} />
                            </li>
                            <li className="font-semibold lg:text-xl hover:tracking-widest transition-all text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent group whitespace-nowrap ">
                                Roofing
                                <Menu items={roofTypeMenu} />
                            </li>
                            <li className="font-semibold lg:text-xl hover:tracking-widest transition-all text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent whitespace-nowrap">
                                <Link href={'/about-us'}>About Us</Link>
                            </li>
                            {/* <li className="font-semibold lg:text-xl text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent whitespace-nowrap">
                                Financing
                            </li> */}
                            <li className="font-semibold lg:text-xl hover:tracking-widest transition-all text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent whitespace-nowrap">
                                <Link href={'/contact-us'}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )


}





function Menu({ items }) {
    return (

        <ul className="opacity-0 absolute  flex  group-hover:opacity-100 transition-all duration-300 tracking-normal   text-white  bg-white flex-col gap-2 rounded-sm  -translate-x-[30%] mt-2 ">
            <div className="flex justify-center">
                <div className="bg-white w-4 h-4 -translate-y-2 rotate-45" />
            </div>
            {
                items.map((i) => {
                    return (
                        <li key={i.id} className="text-black font-semibold px-4 py-2 hover:text-white hover:bg-orange-300">{i.name}</li>
                    )
                })
            }
        </ul>

    )
}


function Logo() {

    return (
        <Link href={'/'} className="font-bold text-primary bg-white  text-hover-effect  flex flex-col">

            <Image src={logoSvg} alt="Berg" width={150} className="ml-3" />
            <div className="p-2">
                <p className=" tracking-wide">General Contractors</p>

                <div className="text-center flex items-center justify-center gap-4  ">
                <p>CGC</p>
                <p>1535671</p>

                </div>
            </div>

        </Link>
    )
}