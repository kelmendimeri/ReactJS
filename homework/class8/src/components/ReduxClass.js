import React from "react";
import { connect } from "react-redux";
import { eatPizza, eatTost } from "../actions/EatingAction";

export class ReduxClass extends React.Component {
  componentDidMount() {
    this.props.getPizza();
    this.props.getTost();
  }
  render() {
    return (
      <div id="redux-class">
        <h2>Redux Class</h2>
        <h5>{this.props.pizza}</h5>
        <h5>{this.props.tost}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.EatingReducer.eating_pizza,
    tost: state.EatingReducer.eating_tost,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPizza: () => {
      dispatch(eatPizza());
    },
    getTost: () => {
      dispatch(eatTost());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxClass);
