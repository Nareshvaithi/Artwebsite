import { createContext, useState } from "react";

export const ContextProvide = createContext();

export const Context = ({children})=>{
    const [menu,setMenu] = useState(false);
    const [cursorvariant,setCursorvariant] = useState('default');
    const cursorEnter = ()=>{
        setCursorvariant('text');
    }
    const cursorLeave = ()=>{
        setCursorvariant('default');
    }
    return(
        <ContextProvide.Provider value={{menu,setMenu,cursorvariant,setCursorvariant,cursorEnter,cursorLeave}}>
            {children}
        </ContextProvide.Provider>
    )
}