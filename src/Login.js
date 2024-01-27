import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              style={{ width: "40%" }}
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
