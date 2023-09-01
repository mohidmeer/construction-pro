import Image from "next/image";

export default function Articles(){
    return(
        <div className="">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-6xl font-bold my-24">Latest Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 h-[500px] p-4 ">
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
            </div>
        </div>
    );
}



function Article(){

    return (
        <div className="relative w-full  border card-container rounded-md text-hover-effect    ">
            <Image
                src={'/../assets/images/Articles/Roofingjpg.jpg'}
                fill
                className="rounded-md -z-10 brightness-[0.7]"
                style={{
                    maxWidth: "100%",
                    objectFit: "cover"
                }} />
            <div className="flex flex-col justify-end h-full p-4 text-white">
                <p className=" text-xl lg:text-2xl font-bold ">The 3 Best Types of Roofing Shingles: Which One Is Right For You?</p>
                <p className=" underline ">Read More</p>
            </div>
        </div>
    );
}