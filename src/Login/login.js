import React from 'react'

const Login = () => {
  return (
    <>
    <div>
      <form>
        <div class="modal" id="exampleModal" aria-labelledby="exampleModalLabel" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content justify-content-center align-items-center">
              <div class="modal-header justify-content-center align-items-center">
                <p class="fs-2 fw-bold m-0 text-center">LOGIN</p>
              </div>
              <div class="modal-body ">
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Usuario</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Contraseña</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className='text-center'>
              <label for="exampleInputEmail1" class="form-label">Olvidó su contraseña?</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
</form>
</div>
</>
  )
}

export default Login;