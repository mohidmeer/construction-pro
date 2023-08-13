
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
        <div className="blue-gradient ">
            <div className="max-w-6xl py-8 px-2 mx-auto">
                <div className="flex items-center justify-between">
                    <Logo/>
                    <nav>
                        <ul className="flex gap-10">
                            <li className="font-bold text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent group ">
                                Our Services
                                <Menu items={servicesMenu}/>
                            </li>
                            <li className="font-bold text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent group">
                                Roof Types
                                <Menu items={roofTypeMenu}  />  
                            </li>
                            <li className="font-bold text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent">
                                About Us
                            </li>
                            <li className="font-bold text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent">
                                Financing
                            </li>
                            <li className="font-bold text-white cursor-pointer golden-gradient bg-clip-text hover:text-transparent">
                                Contact Us
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
      
    <ul class="hidden absolute  group-hover:flex    text-white  bg-white flex-col gap-2 rounded-md py-2  ">
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
        <div className="font-bold text-white">
            Host Building Group

        </div>
    )
}