import React from 'react'
import style from './index.module.css'
import { MdOutlineDashboard } from 'react-icons/md'
function Mainmodal() {
  return (
    <>
    <div className={style.modal}>
    <div className={style.logo}>
      <img src="/logo.jpg" alt="" width={50} />
      <p className={style.logoName}>Renault</p>
    </div>
    <div>
      <div className={style.navbarComponent}>
          <div className={style.navbarLogo}><MdOutlineDashboard /></div>
          <div className={style.navbarName}>Əsas Səhifə</div>
      </div>
      <div className={style.navbarComponent}>
      <div className={style.navbarLogo}></div>
      <div className={style.navbarName}>Əlavə Et</div>
      </div>
      <div className={style.navbarComponent}>
      <div className={style.navbarLogo}></div>
      <div className={style.navbarName}>Ətraflı Axtarış</div>
      </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Mainmodal