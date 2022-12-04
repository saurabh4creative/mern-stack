import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  return (   
        <>
             <div className='breadcrumb mb-0'>
                    <nav aria-label="breadcrumb">
                         <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active" aria-current="page">Page</li>
                         </ol>
                    </nav>
             </div>

             <div className='web-title mb-4'>
                    <h5>{props.title}</h5>
             </div>
        </> 
  )
}

export default BreadCrumb