import React from 'react'

function FacultyLogin() {
  return (
    <div className="container top-top text-center w-50 bg-light rounded border">
      <h1>Faculty Login</h1>
      <form>
        <div class="mb-3 ">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}

export default FacultyLogin
