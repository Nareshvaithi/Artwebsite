import { createContext, useState,useEffect } from "react";
import axios from "axios";
export const ContextProvide = createContext();

export const Context = ({children})=>{
    const navlinks = [
        {id:1,title:'Home',to:'/',color:'bg-red-500'},
        {id:2,title:'About',to:'/about',color:'bg-blue-500'},
        {id:3,title:'gallery',to:'/gallery',color:'bg-yellow-500'},
        {id:4,title:'Artist',to:'/artist',color:'bg-blue-orange'},
        {id:5,title:'Artwork',to:'/artwork',color:'bg-green-500'},
        {id:6,title:'Contact',to:'/contact',color:'bg-purple-500'},
    ]
    const [menu,setMenu] = useState(false);
    const [cursorvariant,setCursorvariant] = useState('default');
    const cursorEnter = ()=>{
        setCursorvariant('text');
    }
    const cursorLeave = ()=>{
        setCursorvariant('default');
    }


    const [images,setImages]=useState([])
    const [videos,setVideos]=useState([])
    useEffect(()=>{
        const fetchItems = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/artwork`);
           
            if (response.data==null) {throw Error("Items not found")};
            setImages(response.data.categories)
          } catch (err) {
            console.log(err.message)
          }
        };
        fetchItems();
        
        const fetchVideos = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/artWorkVideos`);
              if (response.data==null) {throw Error("Items not found")};
              setVideos(response.data.categories)
            } catch (err) {
              console.log(err.message)
            }
          };
          fetchVideos();
    
      },[])
    
   
    return(
        <ContextProvide.Provider value={{menu,setMenu,cursorvariant,setCursorvariant,cursorEnter,cursorLeave,navlinks,images,setImages,videos,setVideos}}>
            {children}
        </ContextProvide.Provider>
    )
}