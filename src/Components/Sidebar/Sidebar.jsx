import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { getGroupes } from '../services/groupeService';
import { AppContext } from "../Context/AppContext";
import CreateGroupe from "../Groupes/CreateGroupes/CreateGroupe";
import GroupeDetail from "../Groupes/GroupeDetails/GroupeDetail";
import AddMembersToGroup from "../Groupes/AddMemberToGroup/AddMemberToGroup";
// import assets from '../../assets/assets'


const Sidebar = ({
    handelOnGroupeSelect
}) => {
    // const [activeContent, setActiveContent] = useState('group1');
    const {groupeData, setGroupeData} = useContext(AppContext)
    const [groupes, setGroupes] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    localStorage.getItem('token')
    const fetchGroupes = async () => {
        
        try {
            const data = await getGroupes();
            if (data.success) {
                setGroupes(() => data.data);

                console.log(data);
            }else{
                console.log("success");
            }
            
            // const response = await axios.get('http://127.0.0.1:8000/api/FATE.v1.0.0/groupe/index');
            // return response.data;
        } catch (error) {
            console.error("Erreur lors du chargement des groupes:", error);
        } finally {
            setLoading(false);
        }
        };
        fetchGroupes();
    }, []);

    if (loading) {
        return <p>Chargement des groupes...</p>;
    }

    return (
            <div className="ls">
                <div className="ls-top">
                    <div className="ls-nav">
                        <span>Liste des Groupes</span>
                        <div className="menu">
                            <i className="ri-group-line" onClick={() => {
                            handelOnGroupeSelect(<AddMembersToGroup />)
                        }}>+</i>
                        </div>
                    </div>
                    <div className="ls-search">
                        <img src="" alt="" onClick={() => {
                            handelOnGroupeSelect(1)
                        }}/>
                        <input type="text" placeholder="Rechercher"/>
                    </div>
                </div>
                <div className="ls-list">
                    {Array(1).fill("").map(()=>(
                        <div className="cont">
                            {groupes.length > 0  ? (
                                <div>
                                {groupes.map((groupe) => (
                                    <div key={groupe.id} className="groupes" onClick={() => {
                                        setGroupeData(() => groupe)
                                        console.log(groupeData);
                                        
                                    }}>
                                    {/* {activeContent === 'group1' && ( */}
                                        <img src={groupe.groupe_image} alt="" />
                                        <div className="groupes-info" onClick={() => {
                                                handelOnGroupeSelect(<GroupeDetail />)
                                            }}>
                                            <h3>{groupe.groupe_name}</h3>
                                            <p>{groupe.groupe_actu}</p>
                                        {/* )}   */}
                                        </div>
                                    </div>
                                ))}
                                </div>
                            ) : (
                                <p>Aucun groupe disponible.</p>
                            )}
                            {/* <img src="" alt="" />
                            <div>
                                <p>Nom du groupe</p>
                                <span>Actualité du groupe</span>
                            </div> */}
                        </div>
                    ))}
                </div>
                {/* <li>
                    {activeContent === 'group1' && (
                        <div onClick={() => {
                            handelOnGroupeSelect(1)
                        }}>
                            <p>Nom du groupe 1</p>
                            Contenu spécifique au groupe 1
                    </div>
                    )}
                </li> */}
            </div>
    );
};

export default Sidebar;
