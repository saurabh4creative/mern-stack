import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom' 
import BreadCrumb from '../_views/BreadCrumb'
import projectActions from '../_redux/_actions/projectActions'
import { useSelector, useDispatch } from 'react-redux'
import SideBar from '../_views/SideBar';
import Loader from '../_components/Loader';
import Message from '../_components/Message';
import ProjectBox from '../_components/ProjectBox'; 

const ProjectList = () => {
  
  const dispatch = useDispatch();   
  const dataFetchedRef = useRef(false);
  const { isLoading, isError, projects } = useSelector(state=>state.projectReducer); 

  useEffect(()=>{
    if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;

    dispatch(projectActions.project_start());
    dispatch(projectActions.project_list());
  }, [dispatch]); 
 
  return (
    <>
        <SideBar></SideBar>
        <div className='web-layout pt-4 px-4'>
             <BreadCrumb title="All Projects" />

             <div className='user-layout'>
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div>
                             {Object.keys(projects).length} Projects Found
                        </div>
                        <div>
                             <Link to={'/project/create'} className="btn btn-primary waves-effect waves-light">Add Project</Link>
                        </div>
                  </div>  

                  <div className='project-list'>
                        { isLoading &&  <Loader /> }

                        { isError &&  <Message type="danger" message={isError}/>  }
                        
                        { !Object.keys(projects).length && !isLoading && <Message type="info" message={'No Project Found'} /> }

                        { Object.keys(projects).length > 0 && 
                              <>
                                    
 
                                    <table className="table default-table">
                                          <thead>
                                            <tr>
                                                  <td>#</td>
                                                  <td>Project Name</td>
                                                  <td>Status</td>
                                                  <td>Create On</td>
                                                  <td>Updated On</td>
                                                  <td>Author</td>
                                                  <td>Action</td>
                                            </tr>
                                          </thead>
                                          <tbody>
                                              {
                                                  projects?.map((item)=>{
                                                      return <ProjectBox data={item} key={item._id} />
                                                  })      
                                              }
                                          </tbody>
                                    </table> 
                              </>
                        }
                  </div>
             </div>
        </div>
    </>
  )
}

export default ProjectList