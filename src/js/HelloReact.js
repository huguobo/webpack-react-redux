import React from 'react';

class Hello extends React.Component{
  render(){
    const { es } =this.props;
    return(
      <div> 
        <h1>Hello React</h1>
        <h2>{es}</h2>
      </div>

    );
  }
}

export default Hello;