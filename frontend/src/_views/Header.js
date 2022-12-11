import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const hidePages = ['', 'register', 'login', 'activate', 'default'];
  const location  = useLocation();
  const { pathname, key } = location; 
 

  useEffect(()=>{ 
      setHideHeader(hidePages.includes( pathname.split('/')[1] ));  
  }, [key, pathname])
  
  return (
       <>
             {
                  !hideHeader && 
                  <>
                         <div className='header-new'>
                             
                         </div>  
                  </>
             }
       </>
  )
}

export default Header