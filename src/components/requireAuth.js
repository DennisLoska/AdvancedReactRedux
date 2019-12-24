import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    checkAuth() {
      if (!this.props.auth) this.props.history.push('/');
    }

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
