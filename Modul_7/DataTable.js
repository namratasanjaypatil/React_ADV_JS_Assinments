import React, { Component } from 'react';

class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'Amanda Velvet Shirt Man', price: '$333', Category: 'Fashion'},
        { name: 'Abercrombie Allen Brook shirt', price: '$70', Category: 'Fashion'},
        { name: 'Abercrombie Lake Arnok Shirt', price: '$60', Category: 'Fashion'},
        { name: 'Benco Shirt',price: '$29', Category: 'Fashion'},
      ],
      searchQuery: '',
      isEditing: false,
      editedRow: {
        name: '',
        price: '',
        category: '',
      },
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <table>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.filteredData().map((item) => (
              <tr key={item}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={() => this.handleEdit(item)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.handleDelete(item)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.isEditing && (
          <div>
            <h2>Edit Row</h2>
            <form onSubmit={this.handleUpdate}>
              <input
                type="text"
                placeholder="Name"
                value={this.state.editedRow.name}
                onChange={(e) => this.handleEditChange('name', e.target.value)}
              />
              <input
                type="number"
                placeholder="Price"
                value={this.state.editedRow.price}
                onChange={(e) => this.handleEditChange('price', e.target.value)}
              />
              <input
                type="number"
                placeholder="Category"
                value={this.state.editedRow.category}
                onChange={(e) => this.handleEditChange('category', e.target.value)}
              />
              <button type="submit">Update</button>
              <button onClick={this.cancelEdit}>Cancel</button>
            </form>
          </div>
        )}
      </div>
    );
  }

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  filteredData = () => {
    const { data, searchQuery } = this.state;
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredData;
  };

  handleEdit = (item) => {
    this.setState({
      isEditing: true,
      editedRow: {price: item.price, category: item.category
      },
    });
  };

  handleDelete = (item) => {
    const newData = this.state.data.filter((d) => d !== item);
    this.setState({ data: newData });
  };

  handleEditChange = (field, value) => {
    this.setState((prevState) => ({
      editedRow: {
        ...prevState.editedRow,
        [field]: value,
      },
    }));
  };

  handleUpdate = (e) => {
    e.preventDefault();
    const { data, editedRow } = this.state;
    const newData = data.map((item) =>
      item.id === editedRow.id ? { ...editedRow } : item
    );
    this.setState({
      data: newData,
      isEditing: false,
      editedRow: { name: '', price: '', category: ''},
    });
  };

  cancelEdit = () => {
    this.setState({ isEditing: false, editedRow: { name: '', price: '', category: ''} });
  };
}

export default DataTable;