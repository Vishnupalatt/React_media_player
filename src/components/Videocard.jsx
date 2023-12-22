import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap'
import { addHistory, deletevideo } from '../services/allApis';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

function Videocard({ video, delResUpdate, isCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    let date = new Date()
    let id = uuidv4()
    const { thumbnail, caption, url } = video
    // console.log(id,caption,url,date)
    let body = { id, thumbnail, caption, url, date }
    const res = await addHistory(body)
    console.log(res)
  }

  const removeVideo = async (id) => {
    console.log(id)
    let res = await deletevideo(id)
    console.log(res)
    if (res.status >= 200 && res.status < 300) {
      toast.success("video Deleted Succesfully")
      delResUpdate()

    }
    else {
      toast.error("Deletion Failed")
    }
  }

  const ondrag = (e, id) => {
    // e.preventDefault()
    console.log("Target Video ID", id)
    e.dataTransfer.setData("videoid", id)

  }
  return (
    <div>
      <Card style={{ width: '100%' }}>
        <Card.Img style={{ height: '200px' }} onClick={handleShow} draggable onDragStart={(e) => ondrag(e, video?.id)} variant="top" src={video?.thumbnail} alt='img' />
        <Card.Body>
          {
            isCategory ? "" :
              <Card.Title className='text-center'>{video?.caption} <span className='btn p-0' style={{ float: 'right' }} onClick={() => removeVideo(video.id)}><i class="fa-solid fa-trash-can" style={{ color: '#ff0000' }}></i></span> </Card.Title>

          }
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <iframe width="100%" height="400" src={`${video?.url}?autoplay=1`} title="Maamadura | Jigarthanda DoubleX | Raghava Lawrence,SJ Suryah | Karthik Subbaraj | Santhosh Narayanan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Videocard