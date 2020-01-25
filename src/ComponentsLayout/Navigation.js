import React from 'react'
import {Link}from 'react-router-dom'

function Navigation() {
  return (
    <>
        <Link to="/base">Base</Link>
        <Link to="/buildings">Buildings</Link>
        <Link>Skills</Link>
        <Link>Dom Genetyki</Link>
        <Link to="/map">Map</Link>
        <Link></Link>

    </>
  );
}

export default Navigation;
