import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as gameActions from "../../actions/gameActions";
import toastr from "toastr";

export class Game extends React.Component {
  constructor(props) {
    super(props);

    // Set this.state

    // Action bindings
  }

  render() {
    return (
      <div>
        <h1>Game Title</h1>
        <span>Left Text with Button</span><span>Right Text with Button</span>
        <div>Maybe Something Else?</div>
      </div>
    )
  }
}

// Game.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
