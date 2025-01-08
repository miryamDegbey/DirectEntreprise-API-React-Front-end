import React from 'react';
import './MainContent.css'; // Assurez-vous d'ajouter le CSS approprié
import CreateGroupe from '../Groupes/CreateGroupes/CreateGroupe';
import GroupeNavBar from '../GroupeNavBar/GroupeNavBar';
import GroupeDetail from '../Groupes/GroupeDetails/GroupeDetail';

const MainContent = ({curentGroupe}) => (
    <div className="main-content">
        {/* <h2>Bienvenue dans votre espace personnel</h2> */}

        {curentGroupe}
        {/* <CreateGroupe /> */}
        {/* <GroupeNavBar /> */}
        
        {/* <GroupeDetail /> */}
    </div>
);

export default MainContent;