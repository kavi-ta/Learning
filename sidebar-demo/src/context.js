import React, {useState,useContext} from "react"
import App from "./App"

const AppContext = React.createContext()

const AppProvider =({children})=>{
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSideBar = ()=>{
        setIsSideBarOpen(true)
    }
    const openModal = ()=>{
        setIsModalOpen(true)
    }

    const closeSideBar = ()=>{
        setIsSideBarOpen(false)
    }
    const closeModal = ()=>{
        setIsModalOpen(false)
    }



    return <AppContext.Provider value={{
        isModalOpen,
        isSideBarOpen,
        openModal,
        openSideBar,
        closeModal,
        closeSideBar}
        
    }>{children}</AppContext.Provider>

}



// custom hook
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}