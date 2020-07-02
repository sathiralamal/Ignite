import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
// eslint-disable-next-line
class Footer extends Component {
    render() {
        return (
            <div >
                <Navbar style={footerstyle} color="light" light expand="md">srt</Navbar>
            </div>
        );
    }
}

export default Footer;


const footerstyle ={
    position: 'fixed',
    bottom: '0',
    width: '100%',
}