import React from 'react'
import style from './index.module.css'
import { MdOutlineDashboard } from 'react-icons/md'
import { IoAdd } from 'react-icons/io5'
import { IoIosSearch } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { ROUTER } from '../../constant/router'
function Mainmodal() {

  const navigate = useNavigate()
  return (
    <>
    <div className={style.modal}>
    <div className={style.logo}>
      <img src="/logo.jpg" alt="" width={50} />
      <p className={style.logoName}>Renault</p>
    </div>
    <div className={style.navbar}>
      <div className={style.navbarComponent}>
          <div ><MdOutlineDashboard className={style.navbarLogo} /></div>
          <div className={style.navbarName} onClick={()=>navigate(ROUTER.HOME)}>Əsas Səhifə</div>
      </div>
      <div className={style.navbarComponent}>
      <div><IoAdd className={style.navbarLogo} /></div>
      <div className={style.navbarName} onClick={()=>navigate(ROUTER.ADDPRODUCT)}>Əlavə Et</div>
      </div>
      <div className={style.navbarComponent}>
      <div><IoIosSearch className={style.navbarLogo}/>
      </div>
      <div className={style.navbarName} onClick={()=>navigate(ROUTER.SEARCH)}>Ətraflı Axtarış</div>
      </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Mainmodal