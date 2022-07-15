declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <>
                <h1>Adrian Manrique's Portfolio</h1>
                <h1>Software Engineer</h1>
            </>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));