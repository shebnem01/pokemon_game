import React, { Component } from "react";
import { getPokemonImage } from "../../shared/helper/getPokemonImg";
import styles from "./TeamCard.module.css";
import Modal from "../../ui/Modal";
export default class TeamCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.handleModalToggle = this.handleModalToggle.bind(this);
  }
  handleModalToggle() {
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    let { id, name, type, base_experience } = this.props;
    return (
      <>
        <div className={styles.card}>
          <img src={getPokemonImage(id)} alt="" />
        
          <button
            onClick={() => this.setState({ showModal: !this.state.showModal })}
            className={styles.view}
          >
            View
          </button>
        </div>
        {this.state.showModal && (
          <Modal
            name={name}
            base_experience={base_experience}
            type={type}
            img={getPokemonImage(id)}
            showModal={this.state.showModal}
            handleModalToggle={this.handleModalToggle}
          />
        )}
      </>
    );
  }
}
