import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    };
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.product[name] = value;
      return { product: prevState.product };
    });
  }
  handleSave(e) {
    this.props.onSave(this.state.product);
    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    });
    e.preventDefault();
  }
  render() {
    return ( 
    <div class="container">
    <div class="row col-md-6 col-md-offset-3">
    <div class="panel panel-primary">
    <div class="panel-body">   
      <form>
        <div class="form-group">
        <h3>Enter a new product</h3>
        <p>
          <label>
            Name
            <br />
            <input type="text" class="form-control" name="name" onChange={this.handleChange} value={this.state.product.name}/>
          </label>
        </p>
        <p>
          <label>
            Category
            <br />
            <input type="text" class="form-control" name="category" onChange={this.handleChange} value={this.state.product.category} />
          </label>
        </p>
        <p>
          <label>
            Price
            <br />
            <input type="text" class="form-control" name="price" onChange={this.handleChange} value={this.state.product.price} />
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox"  name="stocked" onChange={this.handleChange} checked={this.state.product.stocked}/>
            &nbsp;In stock?
          </label>
        </p>
        <input type="submit" class="btn btn-success" value="Save" onClick={this.handleSave}/>
        </div>   
      </form>
    </div>
    </div>
    </div>
    </div>
    );
  }
}

export default ProductForm;