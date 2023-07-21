import React, { Component } from "react";
import TeamCard from "../TeamCard";
import styles from "./Team.module.css";
export default class Team extends Component {
  render() {
    let { teamData, name, isWinner,teamPoint } = this.props;
    let showPokemon = teamData.map((pokemon) => {
      return <TeamCard {...pokemon} key={pokemon.id} />;
    });
    return (
      
      <div className={styles.team}>
     
        <h1>{name}</h1>
        <h2 className={isWinner ? `${styles.success}` : `${styles.danger}`}>
          {isWinner ? "Winner" : "Lose"}
        </h2>
        <div className={styles.point}>Point:{teamPoint}</div>
        <div className={styles.content}>{showPokemon}</div>
    
      </div>
    );
  }
}
