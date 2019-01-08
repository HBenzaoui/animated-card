import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar-dark bg-light p-4">
      <button className="btn btn-info m-1 mr-3" style={{ cursor: 'pointer' }}>
        Appear:True
      </button>
      <button className="btn btn-success m-1" style={{ cursor: 'pointer' }}>
        Next
      </button>
      <button className="btn btn-success m-1" style={{ cursor: 'pointer' }}>
        Prev
      </button>
    </div>
  );
};

export default NavBar;
