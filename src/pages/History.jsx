import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allApis'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { deleteHistory } from '../services/allApis'

function History() {

  const [history, setHistory] = useState([])


  const handleHistoryList = async () => {
    const res = await getHistory()
    setHistory(res.data)
    console.log(res.data)
  }
  const handlehistoryDelete=async(id)=>{
    const res=await deleteHistory(id)
    console.log(res)
    if(res.status>=200 || res.status<300){
      toast.success("History Removed")
      handleHistoryList()
    }
    else{
      toast.error("Failed")
    }
  }

  useEffect(() => {
    handleHistoryList()
  }, [])
  return (
    <div className='p-5'>

      <Link className='btn  mb-2' style={{float:'right'}} to='/home'><i class="fa-solid fa-house fa-2xl"></i></Link>
    
      {/* <Button href='http://localhost:3000/home' variant="info" style={{ float: 'right', marginBottom: '10px' }}>Home</Button>{' '} */}

      <table className='table table-striped bg-light shadow'>
        <tr className='bg-primary text-center' >
          <th className='p-3'>ID</th>
          <th>thumbnail</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Date</th>
          <th></th>
        </tr>
        {
          history?history.map((item, index) => (
            <tr className=' square border-bottom border-dark text-center'>
              <td className='p-3' >{index + 1}</td>
              <td><img className='m-3 bg-light' width={200} height={100} src={item?.thumbnail} alt="img" /></td>
              <td>{item?.caption}</td>
              <td ><Link className='bg-light' to={item?.url}>{item?.url}</Link></td>
              <td>{item?.date}</td>
              <td><span className='btn bg-light'  ><i className="fa-solid fa-trash fa-lg " onClick={()=>handlehistoryDelete(item?.id)} style={{color: "#a80505"}}></i></span></td>
            </tr>

          )): <div className='text-danger'>No Data Available</div>


        }

      </table>
      <ToastContainer/>
    </div>
  )
}

export default History