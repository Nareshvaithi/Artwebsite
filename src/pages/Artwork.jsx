import { useEffect, useState } from "react";
import axios from "axios"
const Artwork = ()=>{
    const [artworkImages,setArtworkImages] = useState([]);
    useEffect(()=>{
        const fetchArtworkImages = async ()=>{
            try{
                const getArtworkImages = await axios.get('http://localhost:3001/artwork');
                setArtworkImages(getArtworkImages.data);
            }
            catch(error){
                console.log(error)
            }
        }
        fetchArtworkImages();
    },[]);
    console.log(artworkImages)
    return(
        <div className="w-full px-3 lg:px-10">
            <div>
                <div>
                    {
                        artworkImages.map(({main_title,style,id,url,year})=>{
                            <img src={url} alt="" />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Artwork;