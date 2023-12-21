import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigateByUrl = useNavigate()
  const clickNavigate = () => {
    navigateByUrl('./home')
  }
  return (
    <div >
      <Row  >
        <Col></Col>
        <Col md='4'>
          <h3 className='mt-5' style={{ fontFamily: 'Source Code Pro monospace' }}>Welcome to <span className='text-danger '>TuneWave..</span> </h3>
          <p className='mt-3' style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium dolores commodi ab odit lorem. Dolorum fuga modi libero veniam architecto cum nesciunt. Voluptatem odio a nobis ipsum repellendus consectetur eligendi quaerat totam explicabo velit laborum quae, inventore consequuntur asperiores odit possimus quia maxime nemo aliquid quidem in, consequatur reiciendis sunt!</p>
          <button onClick={clickNavigate} style={{ backgroundColor: 'violet' }} className='btn btn-dark  py-2 px-3 mt-2 text-black'>GET STARTED</button>
        </Col>
        <Col></Col>
        <Col md='6 text-center'>
          <img className='img-fluid' style={{ height: '400px', width: '75%' }} src="https://images.vexels.com/media/users/3/150846/isolated/preview/a77bce5e752802277f78088150b16923-audio-headphones-icon-music.png" alt="" />
        </Col>
      </Row>
      <div className="mt-5  ms-3 me-3 " >
        <h1 className='  text-center' style={{ fontFamily: 'Beau Rivage cursive' }}>Features</h1>
        <div style={{ content: '', width: '5%', height: '2px', backgroundColor: '#000', textAlign: 'center', margin: '0 auto' }}></div>
        <div className='d-flex mt-5' style={{ justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          <Card style={{ width: '19rem', color: '#000', marginBottom: '50px' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/0c/cd/96/0ccd96bc52dc46b1f5f3ea89cad58ecb.gif" />
            <Card.Body >
              <Card.Title>Upload Videos</Card.Title>
              <Card.Text className='mt-4' >
                You can upload videos in a few easy steps. Use the instructions below to upload your videos from a computer or from a mobiles.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '19rem', color: '#000', marginBottom: '50px' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/9a/fb/4d/9afb4da71bb08d98dbff9e44272a18d9.gif" />
            <Card.Body >
              <Card.Title>Manage Videos</Card.Title>
              <Card.Text className='mt-4'>
                You can manage videos in a few easy steps. Use the instructions below to lorem40 manage your videos from a computer or from a mobiles.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '19rem', color: '#000', marginBottom: '50px' }}>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1568191/screenshots/3468993/videezy2.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text className='mt-4'>
                You can watch videos in a few easy steps. Use the instructions below to watch your videos from a computer or from a mobiles.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='border p-5 d-flex  rounded shadow mx-5 mt-5 mb-5 bg-light'>
        <Row>
          <Col md='6'>
            <h2 className='text-black' style={{ fontFamily: 'Roboto Condensed sans-serif' }}>Simple, Fast and Powerful</h2><br />
            <p className='text-black' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae neque porro ad vel, pariatur quo molestias facilis
              lorem50 ipsam autem earum cum tempore, suscipit asperiores, est sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsum suscipit perferendis alias tenetur recusandae sapiente itaque esse, ducimus libero dicta pariatur vitae cupiditate iure adipisci unde quibusdam nobis, laboriosam modi delectus at. Quos exercitationem aut perspiciatis accusamus eius vel incidunt facilis expedita distinctio, velit, facere ut delectus voluptatum mollitia? Ad laudantium, doloribus eos blanditiis fuga, modi at quibusdam corporis nisi doloremque, alias aliquam magni sapiente. Ipsam laboriosam officia recusandae assumenda minima optio.</p>
          </Col>
          <Col md='6'>
            <iframe src="https://www.youtube.com/embed/LaQj636PJh0?si=yfEibb54G684lwLy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{ width: '100%', height: '100%' }} allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </div>

  )
}

export default Landing
