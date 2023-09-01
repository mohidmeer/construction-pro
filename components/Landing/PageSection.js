import Image from "next/image";

const Pages= [
    { 
        id:1 ,
        title:'New Roof Installation',
        description:'Our commitment to excellence has been recognized for our ability to handle everything from custom roofs to standard installations. We use only the best materials available, have extensive experience dealing with local building codes.',  
        Image:'/../assets/images/Pages/roofInstallation.jpg'
    },
    { 
        id:2 ,
        title:'Roof Repair',
        description:'Attention homeowners, our expert team specializes in repairing all types of roofs, including asphalt, flat, wood, and flashing roofs. We are dedicated to extending the lifespan of your roof and ensuring its optimal functionality.',  
        Image:'/../assets/images/Pages/roofRepair.jpg'
    },
    { 
        id:3 ,
        title:'Siding Replacement',
        description:'Attention homeowners! Restore the appearance and functionality of your home with our top-notch roof siding repair services. Our skilled and experienced team is here to assist you.',  
        Image:'/../assets/images/Pages/roofSiding.jpg'
    },
    { 
        id:4 ,
        title:'Gutters Replacement',
        description:'Homeowners, ensure the safety of your home by preventing water damage and maintaining a well-maintained roof through our professional gutter repair services.',  
        Image:'/../assets/images/Pages/roofGutter.jpg'
    },
]

export default function PageSection(){
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mt-10  gap-8">
            {
                Pages.map(p=>(
                <div key={p.id}>
                    <div>
                        <Image
                            src={p.Image}
                            width={500}
                            height={100}
                            className="rounded-md hover:transform hover:scale-110  transition-all duration-200  "
                            style={{
                                maxWidth: "100%",
                            }} />
                     </div>   
                    <p className="text-center font-bold text-2xl mt-2 ">{p.title}</p>
                    <p className="p-2 text-center text-sm font-semibold text-gray-500">{p.description}</p>
                </div>
                ))
            }
            

        </div>
    );
} 