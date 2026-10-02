import React, { useEffect, useRef, useState } from 'react'
import {useGlobalContext} from "./Context"

function Submenu() {
  const {IssubmenuOpen,location,page:{page, links}} = useGlobalContext()
  const [colomn , setColomn] = useState("col-2")
  // useRef is used to get a reference to the DOM element of the submenu, so we can manipulate its position based on the location state from the context.
  const Container = useRef(null)

  useEffect(()=>{
      setColomn("col-2")
    const Submenu = Container.current
    const {center , bottom} = location
    Submenu.style.left = `${center}px`
    Submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColomn("col-3")
    }
     if (links.length === 4) {
      setColomn("col-4")
    }

  },[location ,links])
  
  return (
  <aside className={`${IssubmenuOpen ? "submenu show " : "submenu"}`} ref={Container}>
    <h4>{page}</h4>
    <div className={`submenu-center ${colomn}`} >
        {links.map((link , index)=>{
          const {icon , label , url} = link
          return (
            <a href={url} key={index} >
              {icon}
              {label}
            </a>
          )
        })}
    </div>
    
   
  </aside>
  )
}

export default Submenu
