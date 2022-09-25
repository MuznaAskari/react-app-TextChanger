import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.abouttext}</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div className='bg-primary rounded mx-2' style={{height:'20px', width:'20px', cursor:'pointer', border:'2px solid', borderColor:'darkgrey'}}  onClick={()=>{props.toggleMode('primary')}} ></div>
      <div className='bg-danger rounded mx-2' style={{height:'20px', width:'20px', cursor:'pointer', border:'2px solid', borderColor:'darkgrey'}}  onClick={()=>{props.toggleMode('danger')}} ></div>
      <div className='bg-success rounded mx-2' style={{height:'20px', width:'20px', cursor:'pointer',border:'2px solid', borderColor:'darkgrey'}}  onClick={()=>{props.toggleMode('success')}} ></div>
      <div className='bg-warning rounded mx-2' style={{height:'20px', width:'20px', cursor:'pointer',border:'2px solid', borderColor:'darkgrey'}}  onClick={()=>{props.toggleMode('warning')}} ></div>
      <div className='bg-dark rounded mx-2' style={{height:'20px', width:'20px', cursor:'pointer',border:'2px solid', borderColor:'darkgrey'}}  onClick={()=>{props.toggleMode('dark')}} ></div>
      <div className='bg-light rounded mx-2' style={{height:'20px', width:'20px', cursor:'pointer',border:'2px solid', borderColor:'darkgrey'}}  onClick={()=>{props.toggleMode('light')}} ></div>     
    </div>
  </div>
</nav>
    </div>
  )
}
NavBar.propTypes = {
    title: PropTypes.string,
    aboutText:PropTypes.string,
}

 