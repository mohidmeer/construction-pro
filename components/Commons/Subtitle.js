 export default function Subtitle({text}){
    return(
        <div className="flex items-center gap-2 ">
           <hr className="w-8 border-t mb-3 border-orange-200"></hr>
            <p className="text-xl font-bold text-orange-200 mb-4">{text}</p>
        </div>
    );
}

