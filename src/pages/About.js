import React from 'react';
import { Header} from "../components/HeaderStyle";
import Banner from '../components/Banner';
import Aboutimg from '../img/about-bg.jpg';
import Footer from '../components/Footer';
import ContentABout from '../components/ContentAbout';

function About() {
    return (
    <>
        <Header className="masthead" img={Aboutimg}>
            <Banner title="About Me" subtitle="This is what I do." />
        </Header>

        <ContentABout />
        <Footer />
    </>
    );
}

export default About;