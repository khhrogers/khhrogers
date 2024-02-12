const React = require('react');

class Index extends React.Component {

    render() {

        const {pokemon} = this.props;
        return (

            <h1> This is the Pokemon</h1>
        );
    }

}

module.exports =Index; 
