import React from 'react'
import style from './CSS Modules/TodoCSS.module.css'

export default function () {
  return (
    <div className={`${style.m}`}>
        <div>
            
          <div className="card">
            <div className="card-body">
            <h3 className={style.f}>Add Todo</h3>
            <div className="row">
               <div className="col-3">
                   
                  <input type="text" class='form-control' id="exampleInputPassword1" placeholder='Title'/>
                 </div>
                 <div className="col-6">
                  <input type="text" class='form-control' id="exampleInputPassword1" placeholder='Desc'/>
                 </div>
               <div className="col-3">
                  <input type="text" class='form-control' id="exampleInputPassword1" placeholder='Remark'/>
                 </div>
            </div>
            
                <button class="btn btn-outline-danger mt-4 px-5 " type="button">Add Todo</button>
      
            </div>
          </div>
  </div>
    </div>
  )
}
