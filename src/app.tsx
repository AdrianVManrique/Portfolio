import "./css/styles.css"
import Project from './project'

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom/client');

class Hello extends React.Component {
    render() {
        return (
            <div id="page-wrapper">
                <section id="banner">
                    <div className="inner">
                        <h1 id="my-name">Adrian Manrique</h1>
                        <p id="my-title">Software Engineer</p>
                    </div>
                    <a href="#aboutme"></a>
                </section>

                <section id="aboutme" className="wrapper0">
                    <div className="inner">
                        <h1>About</h1>
                        <p>New Software Engineering Undergraduate with an emphasis on building back-end backend solutions that integrate seamlessly with front-end interfaces.
                            Created multiple full-stack projects involving Web, Android, Desktop, and Unity development. 
                        </p>
                        <p>Experienced in working with Javascript, TypeScript, Jquery, React, Node, Express, SQL, and NoSQL
                        </p>
                    </div>
                </section>

                <section id="skills" className="wrapper1">
                    <div className="inner">
                        <h1 id="skillsHeader">Skillset</h1>
                        <ul>
                            <li id="skill1">
                                <h3>Software Engineering</h3>
                                <p>I am a software engineer</p>
                            </li>

                            <li id="skill2">
                                <h3>Project Management</h3>
                                <p>Experience using Atlassian Tools</p>
                            </li>

                            <li id="skill3">
                                <h3>Leadership</h3>
                                <p>I have led groups</p>
                            </li>
                        </ul>
                    </div>
                </section>

                <section id="projects">
                        <Project/>
                </section>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);

{ /* Template for sections
                <section id="extra">
                    <div class="inner">
                    </div>
                </section>
                */
}