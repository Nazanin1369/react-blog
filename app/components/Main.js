import React from 'react';
import ReactfireMixin from 'reactfire';
import Firebase from 'firebase';
import Rebase from 're-base'
import Footer from './Footer';
import Content from './Content'
import Navbar from './Navbar'


const base = Rebase.createClass('https://nazaninblog.firebaseio.com/')

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.init();
    }
    componentWillReceiveProps(nextProps) {
        base.removeBinding(this.ref);
        this.init();
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    init() {
        this.ref = base.bindToState('posts', {
            context: this,
            asArray: true,
            state: 'posts'
        });

    }
    render() {
        console.log(this.state)
        return (
            <div className="main-container">
                <Navbar />
                <div className="container" posts={this.state.posts}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main;