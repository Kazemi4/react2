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

  
    return (
        <div>
            {tab.map(item => (
                <Contact character={item.name} image={item.picture} online={item.online} />

            ))}
        </div>
    )
};

export default ContactList;



