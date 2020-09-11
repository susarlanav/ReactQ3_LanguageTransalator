import React from 'react';

class Translator extends React.Component {

constructor(){
  super();

  this.state={
    val:""
  }
}

handleChange=(e)=>{
  this.setState({
      val : e.target.value
  })
}

  render() {

      const { translations} = this.props;
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text"
            value={this.state.value}
            className="text-input"
            data-testid="text-input"
            onChange={this.handleChange} />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input
            value ={translations.get(this.state.val)|| ''}
            type="text" className="text-output" data-testid="text-output" readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
