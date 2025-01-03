import { createContext, useState } from "react";
import {FaWhatsapp,FaFacebookF,FaInstagram} from "react-icons/fa";
import {GrPinterest} from "react-icons/gr";
import { useEffect } from "react";
import axios from "axios"
export const ContextProvide = createContext();


export const Context = ({children})=>{
  const [addButton,setAddButton]=useState(false)
    const navlinks = [
        {id:1,title:'Home',to:'/',color:'text-red-500'},
        {id:4,title:'Artist',to:'/artist',color:'text-orange-500'},
        {id:5,title:'Artwork',to:'/artwork',color:'text-green-500'},
        {id:6,title:'Shorts',to:'/shorts',color:'text-yellow-500'},
        {id:7,title:'Contact',to:'/contact',color:'text-purple-500'},
    ]
    const socialmedia = [
        {id:1,name:'whatsapp',icon:<FaWhatsapp size={20}/>,link:""},
        {id:2,name:'facebook',icon:<FaFacebookF size={20}/>,link:""},
        {id:3,name:'pinterest',icon:<GrPinterest size={20}/>,link:""},
        {id:4,name:'instagram',icon:<FaInstagram size={20}/>,link:""},
    ]

    const address = [
        {id:1,details:'#10, My address, My state, My country - 10000',link:""},
        {id:1,details:'info@augustinesamuelgallery.com',link:'mailto:info@augustinesamuelgallery.com'},
        {id:1,details:'+1 (650) 670-7666',link:'tel:1+6506707666'},
    ]

    const sitedetails = [
        {id:1,details:'Subscribe to our Mailing List',link:''},
        {id:2,details:'Usage Rights',link:''},
        {id:3,details:'Accessiblity',link:''},
        {id:4,details:'Private Policy',link:''},
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
    const [display, setDisplay] = useState(false);
    const [uploadForm,setUploadForm]=useState('')

    useEffect(()=>{
        const fetchItems = async () => {
          try {
            const response = await axios.get(`https://augustinesamuelapi.konceptsdandd.com/artwork`);
           
            if (response.data==null) {throw Error("Items not found")};
            setImages(response.data)

          } catch (err) {
            console.log(err.message)
          }
        };
        fetchItems();
        
        const fetchVideos = async () => {
            try {
              const response = await axios.get(`https://augustinesamuelapi.konceptsdandd.com/artWorkVideos`);
              if (response.data==null) {throw Error("Items not found")};
              setVideos(response.data)
            } catch (err) {
              console.log(err.message)
            }
          };
          fetchVideos();
    
      },[])
 
   
    return(
        <ContextProvide.Provider value={{
            menu,setMenu,
            cursorvariant,setCursorvariant,
            cursorEnter,cursorLeave,
            navlinks,
            address,
            sitedetails,
            socialmedia,
            images,setImages,
            videos,setVideos,
            display,setDisplay,
            addButton,setAddButton,
            uploadForm,setUploadForm
            }}>
            {children}
        </ContextProvide.Provider>
    )
}