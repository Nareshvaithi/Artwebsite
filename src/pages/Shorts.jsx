import { useContext } from "react";
import { ContextProvide } from "../ContextAPI/CreateContext";

const Shorts = ()=>{
    const {videos} = useContext(ContextProvide);
    return(
        <div className="w-full h-auto px-3 lg:px-10 py-32">
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {
                    videos.map(({_id,url,main_title,sub_title,year,style},index)=>(
                        <div 
                        onClick={() => {
                            navigate(`/artwork/${encodeURIComponent(main_title)}`, {state: {_id, main_title, url, sub_title, year, style,index}});
                            window.scrollTo(0,0);
                        }}
                        key={_id} 
                        className={`rellax w-full lg:w-56 h-auto pb-10 mx-auto ${(index+1) % 2 == 0 ? 'mt-0 lg:mt-20 w-full lg:w-80' : ''}`}>
                            <video>
                                <source src={`http://${url}`} type="video/mp4" />
                            </video>
                            <h1 className="text-2xl py-2 font-Aboreto">{main_title}</h1>
                            <p className="text-sm font-Aboreto">{sub_title}</p>
                        </div>
                    ))
                  }
                </div>
            </div>
        </div>
    )
}

export default Shorts;