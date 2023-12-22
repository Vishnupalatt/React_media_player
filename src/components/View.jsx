import React, { useEffect, useState } from 'react'
import Videocard from '../components/Videocard'
import { getVideos } from '../services/allApis'
import { Row, Col } from 'react-bootstrap'

function View(resState) {
  const [allVideos, setAllVideos] = useState([])
  const [delResponse, setDelResponse] = useState(false)

  const delResUpdate = () => {
    setDelResponse(true)
  }

  const getVideo = async () => {
    let res = await getVideos()
    // console.log(res.data)
    setAllVideos(res.data)
    setDelResponse(false)

  }

  useEffect(() => {
    getVideo()
  }, [resState, delResponse])

  return (
    <div className='p-5  border-primary shadow rounded '>
      <Row>

        {
          allVideos?allVideos.map(item => (
            <Col sm={12} md={6} lg={4} className='mb-4'>

              <Videocard delResUpdate={delResUpdate} video={item} />

            </Col>
          )): <div className='text-danger'>No Data Available</div>
        }
      </Row>


    </div>
  )
}

export default View