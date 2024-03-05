import React from 'react'
import style from "./CSS Modules/TodoCSS.module.css"


export default function ({item}) {
  // javascript map ,object and array
  // to call object todoitem.remark
 // Object
//   const todoitem = {  title:"Shopping",
//   desc:"Alpha Mall ",
//   remark:"laptop",
// }
//Array
 
  return (
    <div className={`${style.m}`}>  
    {/* bactick */}
    <div>
        <h2 className={`${style.f}`}>Todo List </h2>
    </div>

     {
      item.length == 0 ? ( 
        <div class="alert alert-danger text-align-center" role='alert'>
          No todo Available  
        </div>
      ):(
        <table class= "table table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">S.NO.</th>
            <th scope="col">Title</th>
            <th scope="col">Desc</th>
            <th scope="col">Remark</th>
          </tr>
        </thead>
        <tbody>
          {
            item.length !=0 ? (
                  //  using the mapfunction
                 item.map((value,index) =>{
                    return(
                      <tr>
                      <th>{index + 1}</th>
                      <td>{value.title}</td>
                      <td>{value.desc}</td>
                      <td>{value.remark}</td>
                    </tr>
                    );
                  })
            ):(
              <div class="alert alert-warning d-flex align-items-center" role="alert">
              <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
              <div>
                An example warning alert with an icon
              </div>
              </div>
            )
          
          }
       {/* for object
       <tr>
                <th>{index + 1}</th>
                <td>{todoitem.title}</td>
                <td>{todoitem.desc}</td>
                <td>{todoitem.remark}</td>
              </tr> */}
        </tbody>
      </table>
      )
      
     }

 
    </div>
  )
}
