function Login() {
  const islogged = false;

  if (islogged === true) {
    return (
      <div>
        <h3>Login Form</h3>
        
        <label>UserName</label>
        <input type="text" />

        <br />

        <label>Email</label>
        <input type="text" />

        <br />

        <label>Password</label>
        <input type="password" />

        <br />

        <button>Submit</button>
      </div>
    );
  } else {
    return <h3>Please Login</h3>;
  }
}

export default Login;