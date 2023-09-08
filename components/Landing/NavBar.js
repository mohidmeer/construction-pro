import Link from "next/link"

const servicesMenu=[
    { id:1 , name: 'Residential Roofing' , slug : 'residential-roofing'},
    { id:2, name: 'Commericial Roofing' , slug : 'commercial-roofing'},
]
const roofTypeMenu=[
    { id:1 , name: 'Asphalt Roofing' , slug : 'asphalt-roofing'},
    { id:2 , name: 'Metal Roofing' , slug : 'metall-roofing'},
]

export default function NavBar(){
    return(
        <div className="">
            <div className="max-w-6xl py-8 px-2 mx-auto">
                <div className="flex items-center justify-between">
                    <Logo/>
                    <nav>
                        <ul className="md:gap-5 lg:gap-10 md:flex hidden ">
                            <li className="font-bold lg:text-xl text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent group whitespace-nowrap ">
                                <Link href={'/#services'}>Our Services </Link>
                                <Menu items={servicesMenu}/>
                            </li>
                            <li className="font-bold lg:text-xl text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent group whitespace-nowrap ">
                                Roof Types
                                <Menu items={roofTypeMenu}  />  
                            </li>
                            <li className="font-bold lg:text-xl text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent whitespace-nowrap">
                                <Link href={'/about-us'}>About Us</Link>
                            </li>
                            <li className="font-bold lg:text-xl text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent whitespace-nowrap">
                                Financing
                            </li>
                            <li className="font-bold lg:text-xl text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent whitespace-nowrap">
                                <Link href={'/contact-us'}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )


}





function Menu({items}){
    return(
      
    <ul className="hidden absolute  group-hover:flex    text-white  bg-white flex-col gap-2 rounded-md py-2  ">
       {
        items.map((i)=>{
            return(
                <li key={i.id} className="text-black font-semibold px-4 hover:text-white hover:bg-orange-300">{i.name}</li>
            )
        })
       }
    </ul>

    )
}


function Logo(){

    return (
        <Link href={'/'} className="font-bold text-white  text-hover-effect hover:text-orange-200">
            Host Building Group

        </Link>
    )
}