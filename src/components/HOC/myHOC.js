import React from 'react';
import axios from 'axios';

function myHOC(Component, url) {
return class extends React.Component{
    constructor(){
        super();
        this.state ={
            data: null
        }
    }

    getData = () => {
        axios.get(url).then(stuff => {
            this.setState({data: stuff.data})
        })
    }

    render() {
        return (
        <>
            {
                this.state.data
                ? <Component {...this.props} data={this.state.data} />
                :
                this.getData()
            }
        </>
        )}
    }
}

export default myHOC;