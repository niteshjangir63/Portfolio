import { useState ,useEffect} from "react";
export function ImageLoader(src){

    const [status,setStatus] = useState("loading");

    
    useEffect(()=>{
        if(!src) return;

        let img = new Image();

        img.src = src;

        img.onload = () =>{

            setStatus("loaded")
        }

        img.onerror = () =>{

            setStatus("error")
        }

    },[src])
    return status

}