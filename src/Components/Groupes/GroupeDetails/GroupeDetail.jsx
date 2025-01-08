import React, { useContext } from 'react'
import "./GroupeDetail.css"
import { AppContext } from '../../Context/AppContext'
// import assets from '../../assets/assets'

const GroupeDetail = () => {
    const {groupeData, setGroupeData} = useContext(AppContext)

    return (
        
            <div className='chat-bot'>
                <div className='chat-groupe'>
                    <img src='src/assets/icons8-utilisateur-50 (2).png' alt="" />
                    <p>{groupeData.groupe_name} <img className='dot' src="../assets/icons8-info-50.png" alt="" /></p>
                    <img src='src/assets/icons8-info-50.png' alt="" className='help' />
                </div>

                <div className='chat-msg'>
                    <div className='s-msg'>
                        <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel.</p>
                        <div>
                            <img src='src/assets/Logo.png' alt="" />
                            <p>2:30</p>
                        </div>
                    </div>
                    <div className='r-msg'>
                        <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel.</p>
                        <div>
                            <img src="src/asset" alt="" />
                            <p>2:30</p>
                        </div>
                    </div>
                </div>

                <div className="chat-input">
                    <input type="text" placeholder='Envoyer un message'/>
                    <input type="file" id='image' accept='image/png, image/jpg' hidden/>
                    <label htmlFor="image">
                        <img src='src/assets/icons8-attache-48.png' alt="" />
                    </label>
                    <img src='src/assets/icons8-envoyé-50.png' alt="" />
                </div>
            </div>
        
    )
}

export default GroupeDetail
