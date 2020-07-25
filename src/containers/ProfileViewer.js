import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfileFromAPI } from '../actionCreators';

class ProfileViewer extends Component {
  componentDidMount() {
    this.props.fetchProfileFromAPI('whiskey-the-dog');
  }

  render() {
    if (this.props.error) {
      return <h1>Something bad happened. Try again later...</h1>;
    }
    return (
      <div>
        <h1>Hello {this.props.profile.name}</h1>
        <pre>{JSON.stringify(this.props.profile, null, 2)}</pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { fetchProfileFromAPI }
)(ProfileViewer);
