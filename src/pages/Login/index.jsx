import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import request from "../../utils/http";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    navigate("/overview");
    // request.post("/customer/login", {
    //   username,
    //   password
    // })
    // .then((res) => {
    //   if (res.status === 200) {
    //     navigate("/overview");
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // })

    // fetch("http://localhost:3001/api/v1/customer/login", {
    //   method: "POST",
    //   body: JSON.stringify({ username, password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include"
    // }).then(ok => {
    //   console.log(ok)
    // }).catch(err => {
    //   console.log(err)
    // })
  }

  return (
    <div className="flex justify-center items-start bg-gray-200 h-screen">
      <div className="flex flex-col gap-y-2 mt-10 bg-white p-4 rounded-lg">
        <p className="text-center text-red-700 text-lg font-bold">SIGN IN</p>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input onChange={(e) => {
            setUsername(e.target.value)
          }} value={username} className="border border-blue-500 rounded-md" id="username" type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input onChange={(e) => {
            setPassword(e.target.value)
          }} value={password} className="border border-blue-500 rounded-md" id="password" type="text" />
        </div>
        <button
          onClick={login}
          className="bg-blue-600 rounded-lg text-white p-1"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login;