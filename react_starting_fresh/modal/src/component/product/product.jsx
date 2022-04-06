import React, { Component } from "react";
import Modal from "../modal/modal";
import "./product.css";
class Products extends Component {
  state = {
    showModal: false,
    userName: ""
  };

  getModal = (data) => {
    console.log(data);
    this.setState({
      showModal: true,
      userName: data.name
    });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((user) => (
          <div key={user.id} className="user-data">
            <h1>{user.name}</h1>
            <button
              type="button"
              onClick={() => this.getModal(user)}
              className="btn"
            >
              Popup
            </button>
          </div>
        ))}
        <Modal
          show={this.state.showModal}
          name={this.state.userName}
          onHide={this.hideModal}
        />
      </div>
    );
  }
}

export default Products;
