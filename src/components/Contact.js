import React from 'react';
import './Contact.css'


class Contact extends React.Component {
    state = {
        online: false,

    }

    onLine = (event) => {
        this.setState({online: !this.state.online})
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.image} alt={this.props.character} />
                <div>
                    <p className="name">{this.props.character}</p>
                    <p className="adress">{this.props.adress}</p>
                    <button onClick={this.onLine}>{connection(this.state.online)}</button>

                </div>
            </div>
        );
    }
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