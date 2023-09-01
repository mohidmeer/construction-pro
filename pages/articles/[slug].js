import NavBar from "@/components/Landing/NavBar";
import TopBar from "@/components/Landing/TopBar";


export default function Article({slug}) {
    return(
        <div>
            <TopBar />
            <Banner>
                <NavBar/>
            </Banner>
            <Content/>
       
        </div>
    );
}


function Banner({title='The Ultimate Guide To Asphalt Shingles',children}){
    return(
        <div className="relative h-[300px]   bg-center bg-cover bg-no-repeat p-4">
            <div className="absolute  inset-0  bg-center bg-cover bg-no-repeat brightness-[0.3]"></div>
            <div className="relative h-full">
                {children}
                <div className="text-center mt-10">
                    <h2 className="font-bold text-6xl text-white">
                        {title}
                    </h2>
                    
                </div>
            </div>
        </div>
    )
}


function Content({content}){

    return(
        <div className="max-w-6xl mx-auto mt-4 bg-gray-200 p-4 rounded-xl">
            

        </div>
    )
}






export async function getServerSideProps({ params }) {
    const { slug } = params;
    return {
      props: {
        slug // Pass the fetched blog content to the component
      },
    };
}