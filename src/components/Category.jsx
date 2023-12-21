import React, { useEffect, useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'
import { addCategory, deletecategory, getCategories, getSpecificVideos, updatecategory } from '../services/allApis';
import { toast } from 'react-toastify';
import Videocard from '../components/Videocard'

function Category() {

  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([])
  const [categoryDetails, setCategoryDetails] = useState({
    id: '', categoryName: '', allVideos: []
  })

  const handleCategoryList = async () => {
    const res = await getCategories()
    console.log(res.data)
    setCategories(res.data)

  }

  const handleCategory = (e) => {
    const { name, value } = e.target
    setCategoryDetails({ ...categoryDetails, [name]: value })
  }

  const handleRequest = async () => {
    const { id, categoryName } = categoryDetails
    if (!id || !categoryName) {
      toast.warning("please fill in details!!")
    }
    else {
      let response = await addCategory(categoryDetails)
      console.log(response)
      if (response.status >= 200 || response.status < 300) {
        setShow(false)
        toast.success("Category Uploaded")
        handleCategoryList()
      }
      else {
        toast.error("Failed to upload category")
      }
    }

  }
  const handleCategoryDelete = async (id) => {
    const res = await deletecategory(id)
    // console.log(res)
    if (res.status >= 200 && res.status < 300) {
      toast.success("Category Removed")
      handleCategoryList()
    }
    else {
      toast.error("Category not Removed")
    }
  }

  console.log(categoryDetails)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleCategoryList()
  }, [])

  const dragOver = (e) => {
    e.preventDefault()
    console.log("Dragging Over Category Board!!")
  }

  const onDropHandle = async (e, id) => {
    console.log("Drop target Category id", id)
    let videoid = e.dataTransfer.getData("videoid")
    console.log("video ID", videoid)
    const video = await getSpecificVideos(videoid)
    console.log(video.data)

    let selectedCategory = categories?.find(item => item?.id === id)
    // console.log(selectedCategory)
    selectedCategory.allVideos.push(video.data)
    console.log(selectedCategory)
    const res = await updatecategory(id, selectedCategory)
    console.log(res)
    toast.success("Video added to Category")
    handleCategoryList()
  }

  return (
    <>
      <div className='  d-grid'>
        <button onClick={handleShow} className='btn bg-black text-white '>Add category</button>
      </div>
      {
        categories.map(item => (
          <div className='m-3 p-2 border border-info shadow rounded'
            onDragOver={e => dragOver(e)} onDrop={(e) => onDropHandle(e, item?.id)}>
            <div>
              <span>
                {item?.categoryName}
              </span>
              <span style={{ float: 'right' }} className='btn p-0 ' onClick={() => handleCategoryDelete(item?.id)} >
                <i class="fa-solid fa-trash-can" style={{ color: '#ff0000' }}></i>
              </span>

            </div>
            <div  >
              {item?.allVideos.map(video=>(
                <Videocard  video={video} isCategory={true}/>
              ))}
            </div>

          </div>
        ))

      }


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mt-4'>
          <FloatingLabel controlId="floatingId" label="ID" className="mb-3">
            <Form.Control type="text" placeholder="Enter Unique ID" name='id' onChange={(e) => handleCategory(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingCategory" label="Category Name">
            <Form.Control type="text" placeholder="Category Name" name='categoryName' onChange={(e) => handleCategory(e)} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleRequest} variant="danger">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category