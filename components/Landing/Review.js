import { BiSolidStar } from "react-icons/bi";
import { BsGoogle } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function Reviews(){
    return(
        <div className="max-w-6xl mx-auto my-20 ">
            <div className="text-center">
                <h2 className=" text-4xl lg:text-6xl  font-bold">Our Reputation Speaks for Itself</h2>
                <p className="mt-4 font-bold">Read what our happy customers are saying about their<br/> experience of working with us.</p>

                <div className="w-4/5   mx-auto">
                   <div className="grid grid-cols-1  lg:grid-cols-3 gap-20    mt-4  ">
                        <div className="text-red-500">
                            <Rating  ratingNumber={4.6}/>
                            <p className=" font-bold">GOOGLE </p>
                            <p className=" font-bold">4.6 STARS </p>
                        </div>
                        <div className="text-red-500">
                            <Rating  ratingNumber={4.3}/>
                            <p className=" font-bold">YELP </p>
                            <p className=" font-bold">4.3 STARS </p>
                        </div>
                        <div className="text-red-500">
                            <Rating  ratingNumber={4.4}/>
                            <p className=" font-bold">FACEBOOK</p>
                            <p className=" font-bold">4.4 STARS </p>
                        </div>
                        
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
                <div>
                    <button className=" p-4 border border-black  golden-gradient font-bold mt-4  hover:scale-110 transition-all px-10">
                        Leave your Review
                    </button>

                </div>
            </div>
        </div>

    );
}


function Rating({ratingNumber,className}){

    const rating= [];

    for (let i = 0; i < Math.ceil(ratingNumber); i++) {
        rating.push(<BiSolidStar key={i} size={64} className="fill-orange-300" />);
      }

    return(

      
            <div className={`relative ${className}`}>
            <div className="flex gap-2 justify-start">
                {rating}
            </div>
            <div className=" absolute top-0 -z-10 w-full">
                <div className="flex gap-2 justify-start">
                    {Array.from({ length: 5 }, (_, index) => (
                        <BiSolidStar key={index} size={64} className="fill-gray-300" />
                    ))}
                </div>
            </div>            
        </div>


    );


}


function Review (){

   return(
    <div className="p-8 rounded-xl card-container shadow-xl" >
        <p className="font-bold text-xl text-left ">“Herts Construction was absolutely phenomenal..”</p>
        <p>Herts Construction was absolutely phenomenal! I was going through a tough time when this transition of fixing our home was happening and Jimmy and his whole team were so helpful throughout the whole process. I would highly recommend if you’re looking for work to be done in your home and on your roof.</p>
        <div className="flex justify-between">
            <p>- Cyndi Cadence</p>
            <div className="flex gap-2 items-center">
                <p className="underline font-bold">Read Review on </p>
                <FcGoogle/>
                
            </div>
        </div>
    </div>
   )
}

