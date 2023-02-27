import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";

const FormRegistro = () => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  
  console.log(data)
  return (
    <div>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className="modal" id="exampleModal" aria-labelledby="exampleModalLabel" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content justify-content-center align-items-center">
              <div className="modal-header justify-content-center align-items-center">
                <p className="fs-2 fw-bold m-0 text-center">LOGIN</p>
              </div>
              <div className="modal-body ">
                <div className="mb-3">
                <label htmlFor="InputUsername1" className="form-label">Usuario</label>
                <input {...register('usuario', {required: true, maxLength: 80})} type="text" className="form-control" id="InputUsername1" aria-describedby="usernameHelp"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">Nombre</label>
                <input {...register('name')} type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputLastname1" className="form-label">Apellido</label>
                <input {...register('lastname')} type="text" className="form-control" id="exampleInputLastname1" aria-describedby="LastnameHelp"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input {...register('email')} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className='text-center'>
              <label htmlFor="exampleInputEmail1" className="form-label">Olvidó su contraseña?</label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo register
      </button>
    </form>
    </div>
  )

    }

export default FormRegistro