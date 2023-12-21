import { React, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Form, FloatingLabel } from 'react-bootstrap';
import { addVideos } from '../services/allApis';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({ changeResState }) {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    id: '', caption: '', thumbnail: '', url: ''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleVideoDetails = (e) => {
    const { name, value } = e.target
    setVideo({ ...video, [name]: value })
  }
  const handleVideoUrl = (e) => {
    const { name, value } = e.target
    if (value.includes("v=")) {
      let index = value.indexOf("v=")
      // console.log(index)
      let url = value.substring(index + 2, index + 13)
      // console.log(url)
      let videoUrl = `https://www.youtube.com/embed/${url}`
      // console.log(videoUrl)
      setVideo({ ...video, [name]: videoUrl })
    }
  }
  const uploadVideo = async () => {
    const { id, caption, thumbnail, url } = video
    if (!id || !caption || !thumbnail || !url) {
      toast.warning("please fill video details")

    }
    else {
      let response = await addVideos(video)
      // console.log(response)
      if (response.status >= 200 || response.status < 300) {
        setShow(false)
        toast.success("New Video Uploaded!")
        changeResState()
      }
      else {
        toast.error("Video Uploaded Failed")
      }
    }
  }

  console.log(video)
  return (
    <>
      <div className='btn' onClick={handleShow}>
        <i class="fa-solid fa-circle-plus fa-2xl"></i>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mt-4'>
          <FloatingLabel controlId="floatingID" label="Video ID" className="mb-3">
            <Form.Control type="text" placeholder="Video ID" name='id' onChange={(e) => handleVideoDetails(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingcaption" label="caption" className="mb-3">
            <Form.Control type="text" placeholder="Video caption" name='caption' onChange={(e) => handleVideoDetails(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingImageUrl" label="Video Image URL" className="mb-3">
            <Form.Control type="text" placeholder="Video Image URL" name='thumbnail' onChange={(e) => handleVideoDetails(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingVideoUrl" label="Video URL" className="mb-3">
            <Form.Control type="text" placeholder="Youtube Video URL" name='url' onChange={(e) => handleVideoUrl(e)} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={uploadVideo} variant="primary" >Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />


    </>
  )
}

export default Add