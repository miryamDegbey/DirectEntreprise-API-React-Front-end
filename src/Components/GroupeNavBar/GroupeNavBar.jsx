import React, { useContext } from 'react'
// import { AuthContext } from '../Context/AuthContext'


export default function GroupeNavBar() {
    // const {currentGroupe} = useContext(AuthContext)

    return (

        <div>
            <span className="logo">Lama Chat</span>
            <div className="user">
                {/* <img src={currentGroupe.groupe_image} alt="" />
                <span>{currentGroupe.groupe_name}</span>
                <button onClick={()=>signOut(auth)}>logout</button> */}
            </div>
        </div>
    )
}
