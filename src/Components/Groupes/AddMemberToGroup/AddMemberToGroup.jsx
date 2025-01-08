import axios, { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import './AddMemberToGroup.css'

const AddMembersToGroup = ({ groupeId }) => {
  const [user, setUser] = useState([]); // Contiendra la liste des membres disponibles
  const [selectedMembers, setSelectedMembers] = useState([]); // Membres sélectionnés

  // Simuler un appel API pour récupérer les membres disponibles
    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/FATE.v1.0.0/users',{
                headers:{ Authorization: "Bearer " + localStorage.getItem("token") }
            }

            ); // Remplacer par l'URL correcte
            const data = await response.data.data;
            console.log(data);
            
            setUser(() => data); 
            // Stocker les membres dans l'état
        } catch (error) {
            console.error('Erreur lors du chargement des membres:', error);
        } 
        };

        fetchUser();
    }, []);

    // Gestion de la sélection des membres
    const handleSelectChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedMembers(selectedOptions);
    };

    // Envoyer les membres sélectionnés au backend
    const handleAddMembers = async () => {
        try {
        const response = await axios.post(`http://127.0.0.1:8000/api/FATE.v1.0.0/groupe/${groupeId}/addMember`, {
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            group_members: selectedMembers,  // Envoyer les membres sélectionnés
            }),
        });

        const data = await response.json();
        console.log('Membres ajoutés avec succès:', data);
        alert('Membres ajoutés au groupe avec succès!');
        } catch (error) {
        console.error('Erreur lors de l\'ajout des membres:', error);
        }
    };

    return (
        <div>
            <form action="">
                <h3>Sélectionnez les membres à ajouter au groupe</h3>
                <select multiple={true}  onChange={handleSelectChange}>
                    {user.length > 0 ?
                        <>
                        {user.map((user, index) => (
                        <option key={index} value={user.id}>
                                {user.name} {user.firstname} 
                            </option>
                        ))}
                        </>
                    : 
                        <option >Aucun utilisateur disponible.</option>
                    }
                </select>
                <button onClick={handleAddMembers}>Ajouter au groupe</button>
            </form>
        </div>
    );
};

export default AddMembersToGroup;
