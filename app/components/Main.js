import React from 'react';
import Footer from './Footer';
import Content from './Content'
import Navbar from './Navbar'

const Main =  ({ history, children }) => {
    return (
        <div className="main-container">
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
};

export default Main;