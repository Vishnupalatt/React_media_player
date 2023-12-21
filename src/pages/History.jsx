import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allApis'
import { Link } from 'react-router-dom'

function History() {

  const [history, setHistory] = useState([])


  const handleHistoryList = async () => {
    const res = await getHistory()
    setHistory(res.data)
    console.log(res.data)
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
        </tr>
        {
          history.map((item, index) => (
            <tr className=' square border-bottom border-dark text-center'>
              <td className='p-3' >{index + 1}</td>
              <td><img className='m-3 bg-light' width={200} height={100} src={item?.thumbnail} alt="img" /></td>
              <td>{item?.caption}</td>
              <td ><Link className='bg-light' to={item?.url}>{item?.url}</Link></td>
              <td>{item?.date}</td>
            </tr>

          ))


        }

      </table>
    </div>
  )
}

export default History