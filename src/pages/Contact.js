import React from 'react';
import {Header} from "../components/HeaderStyle";
import Banner from "../components/Banner";
import imgAbout from "../img/about-bg.jpg";
import Footer from '../components/Footer';
import Form from '../components/Form';

function Contact() {
    return (
        <>
        <Header className="masthead" img={imgAbout}>
            <Banner title="Contact Me" subtitle="Have questions? I have answers.">
            </Banner>
        </Header>
        <Form/>
        <Footer />
        </>
    );
}

export default Contact;