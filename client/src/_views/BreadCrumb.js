import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  return (  
        <div className="row">
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">{props.title}</h4>
                    <div className="page-title-right">
                        <ol className="breadcrumb m-0 gap-2">
                            <li className="breadcrumb-items"><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li className="breadcrumb-items active">Horizontal Layout</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div> 
  )
}

export default BreadCrumb