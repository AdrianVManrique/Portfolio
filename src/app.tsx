import "./css/styles.css"

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <>
                <section className="main-container">
                    
                    <h1 className="my-name">ADRIAN MANRIQUE</h1>
                    <h2 className="my-title">SOFTWARE ENGINEER</h2>

                </section>
            </>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));