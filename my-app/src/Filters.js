import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
    const name = e.target.name;

    this.props.onFilter({
      [name]: value
    });
  }
  render() {
    return (
        <div class="container">
        <div class="row col-md-6 col-md-offset-3">
        <div class="panel panel-primary">
        <div class="panel-body"> 
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          name="filterText"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            name="inStockOnly"
            onChange={this.handleChange}
          />
          &nbsp;
          Only show products in stock
        </p>
      </form>
    </div>
    </div>
    </div>
    </div>
    );
  }
}

export default Filters;