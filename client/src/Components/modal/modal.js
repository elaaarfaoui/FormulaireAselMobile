import React from 'react';
import { Link } from 'react-router-dom'
import "./modal.css"



const Modal = () => {


  return (
    <div className="success">
      <div className="second"> 
      <h3 className='titre1'>لقد تم تسجيل معطياتك بنجاح</h3>
      <h3 className='titre1'>تشكرك علي ٱهتمامك Asel Mobile</h3>
      <h3> فريقنا التجاري باش يتصل بيك لمدك بمزيد المعلومات</h3>
      </div>
      <Link to="/">
      <input className="validate1" type="button" defaultValue="Retour" />
      {/* <input className="validate" style= {{marginTop:"20%", fontSize:"48px"}} type="button" defaultValue="Retour" /> */}
      </Link>

      <h6>©2022 Asel Mobile se réserve le droit de modifier totalement ou partiellement les informations sus-indiqués</h6>
      {/* <h6 style= {{marginTop:"40%"}}>©2022 Asel Mobile se réserve le droit de modifier totalement ou partiellement les informations sus-indiqués</h6> */}

    </div> 
  )
}

export default Modal
