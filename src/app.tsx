import "./css/styles.css"

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <>
                <section id="banner">
                    <div className="inner">
                        <h1 id="my-name">ADRIAN MANRIQUE</h1>
                        <p id="my-title">SOFTWARE ENGINEER</p>
                    </div>
                </section>

                <section id="aboutme">
                    <div className="inner">
                        <h1>About Me</h1>
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

ReactDOM.render(<Hello />, document.getElementById('root'));