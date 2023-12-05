import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import ChatBox from "./ChatBox";

const NavBar = () => {
  return (
    <nav className="border-b-[1px] border-zinc-600">
      <ul className="flex p-2 gap-10 justify-end pr-44 text-lg">
        <li>
          <Link to="/" className="hover:text-indigo-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/chatbox" className="hover:text-indigo-400">
            ChatBox
          </Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="text-white bg-zinc-800 w-screen">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbox" element={<ChatBox />} />
      </Routes>
    </div>
  );
}

export default App;
