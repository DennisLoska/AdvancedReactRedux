import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

const Header = (props) => {
  const renderLinks = () => {
    const { authenticated } = props;
    return (
      authenticated ? (
        <>
          <Link to="/signout">Sign out</Link>
          <Link to="/feature">Feature</Link>
        </>
      ) : (
        <>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
        </>
      )
    );
  };

  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderLinks()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Header);
