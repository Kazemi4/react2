import React from 'react';
import Contact from './Contact'

class ContactList extends React.Component {

    render() {

        const tab = [
            {
                name: "S.O.S OUISTITI",
                picture: "https://randomuser.me/api/portraits/men/57.jpg",

            },
            {
                name: "Omelette du fromage",

                picture: "https://randomuser.me/api/portraits/women/15.jpg",

            },
            {
                name: "Salade Tomate Oignon",

                picture: "https://randomuser.me/api/portraits/men/69.jpg",

            },

            {
                name: "On mange quoi à midi ?",

                picture: "https://randomuser.me/api/portraits/women/24.jpg",

            },

            {
                name: "J'ai mal au ventre",

                picture: "https://randomuser.me/api/portraits/women/33.jpg",

            }

        ];

        return (
            <div>
                {
                    tab.map(item => (
                        <Contact character={item.name} image={item.picture} online={item.online} />

                    ))
                }

            </div >
        )
    }
}

export default ContactList;



