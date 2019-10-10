import React from 'react';
import Contact from './Contact'

const ContactList = () => {
    const tab = [
        {
            name: "S.O.S OUISTITI",
            picture: "https://randomuser.me/api/portraits/men/57.jpg",
            online: true,
        },
        {
            name: "Omelette du fromage",

            picture: "https://randomuser.me/api/portraits/women/15.jpg",
            online: false,
        },
        {
            name: "Salade Tomate Oignon",

            picture: "https://randomuser.me/api/portraits/men/69.jpg",
            online: true,
        }
    ];

    // Return permet de récupérer les infos de mon tablo
    // Les accolades me permette d'entrée ma valeur
    // j'insère grâce à la méthode map, ma fonction anonyme dans la qu'elle je déclare mon tabloololol
    // et je récupère grace aux props, les éléments inscrit dans le tablolololll. 
    // J'exporte default et je link mon contactlist à contactjs.
    return (
        <div>
            {tab.map(item => (
                <Contact character={item.name} image={item.picture} online={item.online} />

            ))}
        </div>
    )
};

export default ContactList;



