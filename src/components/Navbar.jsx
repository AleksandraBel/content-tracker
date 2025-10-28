import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center bg-gray-800 text-white px-6 py-3 shadow-md">
      {/* ЛОГО + НАЗВА */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            width={50}
            className="cursor-pointer hover:opacity-90 transition"
          />
        </Link>
        <h1 className="text-xl font-semibold whitespace-nowrap">Трекер</h1>
      </div>

      {/* НАВІГАЦІЯ */}
      <div className="flex flex-wrap gap-4 mt-3 sm:mt-0 font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-indigo-400" : "hover:text-red-400 transition"
          }
        >
          Головна
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "text-indigo-400" : "hover:text-red-400 transition"
          }
        >
          Історія
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-indigo-400" : "hover:text-red-400 transition"
          }
        >
          Профіль
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-indigo-400" : "hover:text-red-400 transition"
          }
        >
          Увійти
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "text-indigo-400" : "hover:text-red-400 transition"
          }
        >
          Реєстрація
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
