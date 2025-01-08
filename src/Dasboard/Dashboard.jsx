import React, { useState } from 'react'
import Button from '../Components/Buttton/Button'
import './Dashboard.css'
import './taillwin.css'
import Sidebar from '../Components/Sidebar/sidebar'
import MainContent from '../Components/MainContent/MainContent'
import { Link } from 'react-router-dom'



export default function Dashboard() {

    const [curentGroupe , setcurentGroupe ] = useState("")

    const handleIconClick = (content) => {
        setActiveContent(content);
    };

    const handelOnGroupeSelect = (data) => {
        setcurentGroupe(data)
    }

    return (
            
        <section className='main'>
            <section className="chat-section">
                <div className="chat-container">
                {/* start: Sidebar */}
                <aside className="chat-sidebar">
                    <a href="#" className="chat-sidebar-logo">
                        <i className="ri-chat-1-fill"></i>
                    </a>

                    <ul className="chat-sidebar-menu">
                        
                            <li className="active">
                            <a href="#" data-title="Messages">
                                
                                        <i className="ri-chat-3-line"></i>
                                
                            </a>
                            </li>
                        
                        
                        <li>
                            <a href="#" data-title="Contacts">
                                <i className="ri-contacts-line"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-title="Groupes">
                            <i className="ri-group-fill"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-title="Parametres">
                                <i className="ri-settings-line"></i>
                            </a>
                        </li>
                        <li className="chat-sidebar-profile">
                            <button type="button" className="chat-sidebar-profile-toggle"></button>
                        </li>
                    </ul>
                </aside>
                    <section className='content'>
                        <div className="home">
                            <div className="container">
                                <Sidebar 
                                    handelOnGroupeSelect = {handelOnGroupeSelect}

                                />
                            </div>
                        </div>  
                    </section>
                    <section className='content1'>
                        <MainContent 
                            curentGroupe = {curentGroupe}
                        />
                    </section>
                <section>
                </section>
                </div>
            </section>
        </section>
    )
}
