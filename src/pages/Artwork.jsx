import { useContext } from "react";
import { ContextProvide } from "../ContextAPI/CreateContext";
import { useNavigate } from "react-router-dom";

const Artwork = ()=>{
    const {images} = useContext(ContextProvide);
    console.log(images);
    const navigate = useNavigate()
    return(
        <div className="w-full h-auto px-3 lg:px-10 py-32">
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {
                    images.map(({_id,url,main_title,sub_title,year,style},index)=>{
                        console.log(url)
                       return <div 
                        onClick={() => {
                            navigate(`/artwork/${encodeURIComponent(main_title)}`, {state: {_id, main_title, url, sub_title, year, style,index}});
                            window.scrollTo(0,0);
                        }}
                        key={_id} 
                        className={`rellax w-full lg:w-56 h-auto pb-10 mx-auto ${(index+1) % 2 == 0 ? 'mt-0 lg:mt-20 w-full lg:w-80' : ''}`}>
                            <img className="object-cover" src={`http://${url}`} alt="" />
                            <h1 className="text-2xl py-2 font-Aboreto">{main_title}</h1>
                            <p className="text-sm font-Aboreto">{sub_title}</p>
                        </div>
})
                  }
                </div>
            </div>
        </div>
    )
}

export default Artwork;

