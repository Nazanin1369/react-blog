import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top my-nav">
                <div className="container">
                    <div className="navbar-header">
                        <div className="module top">
                            <h2>Nazanin De's Blog</h2>
                        </div>
                        <div id="social_nav" className="social-icons">
                            <ul className="nav nav-pills">
                                <li>
                                    <a href="https://github.com/Nazanin1369" target="_blank">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/nazanindelam" target="_blank">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/NazaninDe" target="_blank">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        <i className="fa fa-slack"></i>
                                    </a>
                                </li>
                             </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;