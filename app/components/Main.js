import React from 'react';
import Footer from './Footer';
import Content from './Content'
import Navbar from './Navbar'


const Main =  ({ children }) => {
    return (
        <div className="main-container">
            <Navbar />
            <div className="container center">
                {children}
            </div>
        </div>
    )
};

export default Main;