import axios from 'axios';
import React, { useState } from 'react'
import { Await } from 'react-router-dom';
import Input from '../../Input/Input';

// import React, { useState } from 'react';


export default function CreateGroupe({ onSubmit }) {

    // États pour les champs du formulaire
    const [creator_id] = localStorage.getItem('user_id');
    const [groupeName, setGroupeName] = useState('');
    const [groupeActu, setGroupeActu] = useState('');
    const [groupeImage, setGroupeImage] = useState(null);
    const [groupMembers, setGroupMembers] = useState([]);
    const [nonRegisteredMembers, setNonRegisteredMembers] = useState([{ email: '' }]);

    // Gestion du changement des membres non inscrits
    const handleNonRegisteredMemberChange = (index, field, value) => {
        const updatedMembers = [...nonRegisteredMembers];
        updatedMembers[index][field] = value;
        setNonRegisteredMembers(updatedMembers);
    };

    // Gestion de l'ajout d'un nouveau membre non inscrit
    const addNonRegisteredMember = () => {
        setNonRegisteredMembers([...nonRegisteredMembers, { email: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('creator_id', creator_id);
        formData.append('groupe_name', groupeName);
        formData.append('groupe_actu', groupeActu);
        formData.append('groupe_image', groupeImage);
        formData.append('group_members', JSON.stringify(groupMembers));
        formData.append('non_registered_members', JSON.stringify(nonRegisteredMembers));

        const response = await axios.post(
            "http://127.0.0.1:8000/api/FATE.v1.0.0/store/" + localStorage.getItem('user_id'),formData,{
            headers:{ Authorization: "Bearer " + localStorage.getItem("token") }
            }
            
            );
    
        // Appel de la fonction de soumission avec les données
        onSubmit(formData);
    };

        return (
            <div  className='form_conataint'>
                <form onSubmit={handleSubmit} className="">
                <h2>Créer un Nouveau Groupe</h2>

                <Input
                type={"text"}
                label={"Nom du Groupe"}
                value={groupeName}
                reference={"Nom du Groupe"}
                placeholder={"Saisir le nom du groupe ici"}
                onChange={(e) => setGroupeName(e.target.value)}
                required
                />

                <Input
                type={"text"}
                label={"Actualité du Groupe"}
                value={groupeActu}
                reference={"Actualité du Groupe"}
                placeholder={"Saisir l'actualité du Groupe ici"}
                onChange={(e) => setGroupeActu(e.target.value)}
                required
                />

                <Input
                type={"file"}
                label={"Image du Groupe"}
                // value={groupeActu}
                // reference={"Actualité du Groupe"}
                // placeholder={"Saisir l'actualité du Groupe ici"}
                onChange={(e) => setGroupeImage(e.target.files[0])}
                // required
                />

                <Input
                type={"text"}
                label={"Membres Inscrits"}
                value={groupMembers}
                reference={"Membres Inscrits"}
                placeholder={"ID des membres séparés par des virgules"}
                onChange={(e) => setGroupMembers(e.target.value.split(',').map(id => id.trim()))}
                required
                />

                <select multiple={true} value={['B', 'C']}>
                <option value="B">Pamplemousse</option>
                <option value="C">Citron vert</option>
                </select>

                {/* <select>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option selected value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select> */}

                {/* <select multiple={true} value={['B', 'C']}></select> */}
                {nonRegisteredMembers.map((member, index) => (
                <div key={index} className="non-registered-member">
                <Input
                type={"email"}
                label={"Email de l'invité"}
                value={member.email}
                reference={"Actualité du Groupe"}
                placeholder={"Saisir l'Email de l'invité ici"}
                onChange={(e) => handleNonRegisteredMemberChange(index, 'email', e.target.value)}
                />
                    </div>
                ))}
                <button type="button" onClick={addNonRegisteredMember}>Ajouter un autre membre non inscrit</button>
            
                <button type="submit">Créer le Groupe</button>
                </form>
            </div>
        );
}
