import React from 'react'
import style from './index.module.css'
import { MdOutlineDashboard } from 'react-icons/md'
import { IoAdd } from 'react-icons/io5'
import { IoIosSearch } from 'react-icons/io'
function Mainmodal() {
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
          <div className={style.navbarName}>Əsas Səhifə</div>
      </div>
      <div className={style.navbarComponent}>
      <div><IoAdd className={style.navbarLogo} /></div>
      <div className={style.navbarName}>Əlavə Et</div>
      </div>
      <div className={style.navbarComponent}>
      <div><IoIosSearch className={style.navbarLogo}/>
      </div>
      <div className={style.navbarName}>Ətraflı Axtarış</div>
      </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Mainmodal