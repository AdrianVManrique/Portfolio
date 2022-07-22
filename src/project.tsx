var React = require('react');
class Project extends React.Component {
    constructor() {
        super();
        this.state = {
            imgURL: "../src/assets/Nordson_Capstone_Resized.png",
            title: "Default Title",
            desc: "Default Project Description",
            link: "https://www.w3schools.com/cssref/pr_dim_width.asp"
        }
    }
    render() {
        return (
            <div className="wrapper2">
                <div className="image">
                    <img src={this.state.imgURL} />
                </div>
                <div className="content">
                    <h2>{this.state.title}</h2>
                    <p>{this.state.desc}</p>
                    <p><a href={this.state.link}>Repository Link</a></p>
                </div>
            </div>);
    }
}

export default Project;

{/* "./assets/Nordson_Capstone.png" */ }