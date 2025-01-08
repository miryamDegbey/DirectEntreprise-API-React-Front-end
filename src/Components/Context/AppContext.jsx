import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {

    const [groupeData, setGroupeData] = useState([])
    const [groupMembers, setGroupMembers] = useState([])

    const loadGroupeData = async (groupeId) => {
        try{

        }catch(error){

        }
    
    }

    

    const value = {
        groupMembers,
        setGroupMembers,
        groupeData,
        setGroupeData

    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider 