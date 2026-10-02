import React ,{ useContext , useState} from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children})=>{
    const [IsSideBarOpen, setIsSideBarOpen] = useState(false)
    const [IssubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:"", links:[]})
    const OpenSidebar = ()=>{
        setIsSideBarOpen(true)
    }

     const CloseSidebar = ()=>{
        setIsSideBarOpen(false)
    }
    
    const OpenSubmenu = (text , coordinates)=>{
        const page = sublinks.find((link)=> link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }

     const CloseSubmenu = ()=>{
        setIsSubmenuOpen(false)
    }


return (
    <AppContext.Provider value={{
        IsSideBarOpen,
        IssubmenuOpen,
        OpenSidebar,
        CloseSidebar,
        OpenSubmenu,
        CloseSubmenu,
        location,
        page
    }}>
        {children}
    </AppContext.Provider>
)
}
export const useGlobalContext = ()=>{
   return useContext(AppContext)
}
