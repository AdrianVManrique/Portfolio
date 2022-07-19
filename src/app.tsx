import "./css/styles.css"

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom/client');

class Hello extends React.Component {
    render() {
        return (
            <>
                <section id="banner">
                    <div className="inner">
                        <h1 id="my-name">Adrian Manrique</h1>
                        <p id="my-title">Software Engineer</p>
                    </div>
                </section>

                <section id="aboutme">
                    <div className="inner">
                        <h1>About</h1>
                        <p>New Software Engineering Undergraduate with an emphasis on building back-end backend solutions that integrate seamlessly with front-end interfaces.
                            Created multiple full-stack projects involving Web, Android, Desktop, and Unity development. 
                        </p>
                        <p>Experienced in working with Javascript, TypeScript, Jquery, React, Node, Express, SQL, and NoSQL
                        </p>
                    </div>
                </section>

                <section id="skills">
                    <div className="inner">
                        <h1>Skills</h1>
                    </div>
                </section>

                <section id="projects">
                    <div className="inner">
                        <h1>Projects</h1>
                    </div>
                </section>

                { /* Template for sections
                <section id="extra">
                    <div class="inner">
                    </div>
                </section>
                */
                }
            </>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello/>);