import React from 'react';
import './Contact.css'

const Contact = (props) => {
    return (
        <div className="Contact">
            <img className="avatar" src={props.image} alt={props.character} />
            <div>
                <p className="name">{props.character}</p>
                <p className="adress">{props.adress}</p>
                {connection(props.online)}
            </div>
        </div>
    );
}

const connection = (param) => {
    if (param) {
        return (
            <div className="status">
                <p className="status-text"><span className="status-online"></span>Online</p>
            </div>
        )
    } else {
        return (
            <div className="status">
                <p className="status-text"><span className="status-offline"></span>Offline</p>
            </div>
        )
    }
}
 

export default Contact;