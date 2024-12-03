import { createContext, useState } from "react";

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
    return(
        <ContextProvide.Provider value={{menu,setMenu,cursorvariant,setCursorvariant,cursorEnter,cursorLeave,navlinks}}>
            {children}
        </ContextProvide.Provider>
    )
}