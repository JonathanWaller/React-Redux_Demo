import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFood } from "../ducks/foodReducer";
import { updateSport } from "../ducks/sportReducer";

class Info extends Component {
  // Initially I created local state and local method updateFood, before moving everything to Redux
  //   constructor() {
  //     super();
  //     this.state = {
  //       food: "pizza"
  //     };
  //   }

  //   updateFood = e => {
  //     this.setState({ food: e });
  //   };

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* Using local state first */}
        {/* <input
          onChange={e => this.updateFood(e.target.value)}
          placeholder="Enter Food Here"
        />
        <p>My favorite food is {this.state.food}</p> */}

        {/* Re-writing the above, this time accessing props from Redux */}
        <input onChange={e => this.props.updateFood(e.target.value)} />
        <p>My favorite food is {this.props.foodReducer.food}.</p>
        <input onChange={e => this.props.updateSport(e.target.value)} />
        <p>My favorite sport is {this.props.sport.sport}.</p>
      </div>
    );
  }
}

// mapStateToProps allows this component to access state on Redux
const mapStateToProps = state => state;

// Connect mapStateToProps, along with any methods (imported at the top), to the export statement
export default connect(
  mapStateToProps,
  { updateFood, updateSport }
)(Info);
