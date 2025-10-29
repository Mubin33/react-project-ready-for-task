import React, { useContext } from "react";
import { AuthContext } from "./ContextHook";
import axios from "axios";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  axios.get("http://127.0.0.1:8000/profile/", {
  headers: { Authorization: `Token ${localStorage.getItem('token')}` }
})
.then(res => console.log(res.data))

  const handleLogout = () => {
        axios.post("http://127.0.0.1:8000/logout/", {}, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` }
        }).then(() => {
        localStorage.removeItem("token");
        navigate("/login");
        }).catch((error) => {
        console.error("Logout failed:", error);
        });
  };

  return (
    <div className="w-[100%] border-b py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <h2 className="text-3xl font-bold">Mubin</h2>
        <ul className="flex items-center gap-8">
          <li>About {user}</li>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </div>

      <button onClick={handleLogout} className="p-3 border">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
