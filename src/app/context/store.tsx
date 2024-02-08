'use client';
import {createContext, useContext, Dispatch, SetStateAction, useState} from "react";
interface ContextProps {
    modal: boolean,
    setModal: Dispatch<SetStateAction<boolean>>,
}

const GlobalContext = createContext<ContextProps>({
    modal: true,
    setModal: (): boolean => true,
});

export const GlobalContextProvider = ({children}: any) => {
    const [modal, setModal] = useState(true);

    return (
        <GlobalContext.Provider value={{ modal, setModal }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);