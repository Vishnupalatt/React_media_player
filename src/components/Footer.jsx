import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div style={{ width: '100%', height: '100%', backgroundColor: 'grey' }}>
        <Row className='p-5'>
          <Col md="4 ">
            <h4 className='text-white'><i className="fa-solid fa-headphones-simple fa-xl me-3" ></i>TuneWave</h4><br />
            <hr />
            <p className='me-5 text-white' style={{ textAlign: 'justify' }}>
              The Media Player can handle all popular video and music formats including: mp3, mp4, wmv, avi, mkv, dv, rm, mp, mpeg.Media Player finds all your videos automatically for you. and show format converting of videos. With the media player, you just put your video on sdcard or click the URL in browser to watch it.
            </p>
          </Col>
          <Col md='4' className='d-flex justify-content-center '>
            <div className='d-flex flex-column'>
              <h4 className=' mb-4 text-white'>Links</h4>
              <hr />
              <Link className='text-white text-decoration-none' to={'/'}>Landing Page</Link>
              <Link className='text-white text-decoration-none mt-2' to={'./home'}>Home</Link>
              <Link className='text-white text-decoration-none mt-2' to={'./watch-history'}>Watch History</Link>
            </div>

          </Col>
          <Col md='4' className='d-flex justify-content-center '>
            <div className='d-flex flex-column'>
              <h4 className=' mb-4 text-white'>Guides</h4>
              <hr />
              <Link className='text-white text-decoration-none' to={'https://react.dev/'}>React</Link>
              <Link className='text-white text-decoration-none mt-2' to={'https://react-bootstrap.netlify.app/'}>React-Bootstrap</Link>
              <Link className='text-white text-decoration-none mt-2' to={'https://fontawesome.com/'}>Font Awesome</Link>
            </div>

          </Col>

        </Row>
        <p className='text-center text-white '>Copyright © 2023 Resso Music. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer