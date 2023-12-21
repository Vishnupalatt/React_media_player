import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {
  const [resState,setResState]=useState(false)
  const changeResState=()=>{
    setResState(true)
  }
  return (
    <div >
      <h3 className='mx-3 mt-3 '>All Videos
      <Link style={{float:'right', textDecoration:'none', color:'black', fontSize:'25px'}} to={'/watch-history'}>Watch History</Link>
      </h3>
      <Row className='mx-5 mt-5 mb-5 p-3'>
        <Col md='1 mt-4'>
          <Add changeResState={changeResState}/>
        </Col>
        <Col md='8 mt-4'>
          <View  resState={resState}/>
        </Col>
        <Col md='3 mt-4'>
          <Category />
        </Col>
      </Row>
    </div>
  )
}

export default Home