import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
 
    <div>
       <Navbar className=" bg-success p-4" >
        <Container>
          <Link to={'./'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home">
          {/* <i className="fa-solid fa-headphones  fa-2xl me-3" style={{color:'#298d94'}}></i> */}
          <i class="fa-solid fa-headphones-simple fa-2xl me-2" style={{color: "#000"}}></i>
           <b className='text-white' style={{fontSize:'30px' ,fontFamily: 'Roboto Condensed sans-serif'}}>TuneWave</b>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
