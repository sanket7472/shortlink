import React, { useState } from 'react'
import axios from 'axios'
import './Home.css'

function Home() {
    const [ linkData, setlinkData]= useState({
        title:"",
        target: "",
        slug:""
    })
    const saveData = async ()=>{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/link`,
            linkData)
    }

    
  return (
    <div>
        <h1 className='text-center mt-5'>Shortlink</h1>
        <p className='text-center'>reduce your link length</p>
        <form className='form-div mx-auto d-block rounded-3 pt-4 pb-2'>
            <input 
            type="text"
             placeholder="Enter your title" 
             className='form-control mt-3  mx-auto d-block'
             value={linkData.title} 
             onChange  ={(e) => setlinkData({...linkData, title: e.target.value})}
            />
               <input 
            type="text"
             placeholder="Enter your targeturl" 
                  className='form-control mt-3  mx-auto d-block'
             value={linkData.target} 
             onChange  ={(e) => setlinkData({...linkData, target: e.target.value})}
            />
               <input 
            type="text"
             placeholder="Enter your slug" 
                  className='form-control mt-3  mx-auto d-block'
             value={linkData.slug} 
             onChange  ={(e) => setlinkData({...linkData, slug: e.target.value})}
            />
            <button type="button"
            onClick={saveData}
            className='mx-auto d-block my-4 btn border-dark '
            >Shortlink</button>
        </form>
    </div>
  )
}

export default Home