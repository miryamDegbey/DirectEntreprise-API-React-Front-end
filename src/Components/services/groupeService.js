// services/groupeService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/FATE.v1.0.0'; 

// Fonction pour récupérer la liste des groupes
export const getGroupes = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/FATE.v1.0.0/groupe/ShowGroupsForUser/'+ localStorage.getItem("user_id"),{
            headers:{ Authorization: "Bearer " + localStorage.getItem("token") }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des groupes:', error);
        throw error;
    }
};

