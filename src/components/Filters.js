import React from 'react'

class Filters extends React.Component {

constructor(props) {
  super(props)
 
}

handleSelect = (e) => {
 console.log(e.target.value)
 this.props.onChangeType(e.target.value)
}

handleButton = (e) => {
  console.log("button hit")
  this.props.onFindPetsClick()
}

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" onChange={this.handleSelect}id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleButton}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
