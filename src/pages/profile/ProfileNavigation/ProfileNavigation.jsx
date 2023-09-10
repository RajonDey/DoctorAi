import { NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

const ProfileNavigation = () => {
  const [admin] = useAdmin(localStorage.getItem("user_id"));
  return (
    <div>
      <nav aria-label="Main Nav" className="flex flex-col">
        <NavLink
          to="/"
          title="Home"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary px-4 mb-3 py-3 text-white text-md rounded-md font-medium text-center"
              : "bg-secondary px-4 mb-3 py-3 text-white text-md rounded-md font-medium text-center"
          }
        >
          DoctorAi
        </NavLink>

        <NavLink
          to="/profile/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
              : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>

          <span className="text-sm font-medium"> Account </span>
        </NavLink>

        <NavLink
          to="/profile/edit"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
              : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm font-medium"> Edit Profile </span>
        </NavLink>

        <NavLink
          to="/ai"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
              : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span className="text-sm font-medium">Ai Services</span>
        </NavLink>
        {admin && (
          <NavLink
            to="/admin/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 border-l-[3px] border-secondary bg-primary px-4 py-3 text-primary-content"
                : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-sm ">Admin Dashboard </span>
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default ProfileNavigation;
