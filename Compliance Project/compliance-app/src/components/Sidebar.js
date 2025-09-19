import React from 'react'
import { FaChevronDown  } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



export const Sidebar = ({sidebarToggle}) => {
  return (
<div className={`${sidebarToggle? " hidden " : " block "}w-64 bg-primary2 fixed  h-full px-4 py-2  flex flex-col justify-between` }>
<div className='my-2 mb-4'>
    <h1 className='text-2xl text-blue-500 font-bold'>Admin Dashboard</h1>
</div>
<hr/>
<ul className='mt-3 text-white font-bold '>
   
<li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `px-3 block ${
        isActive
          ? 'bg-blue-700 text-white font-bold shadow'
          : 'text-blue-800'
      }`
    }
  >
        <img src="/home.png" alt="Home" className="inline-block w-6 h-6 mr-2 " />

    Home
  </NavLink>
</li>


<li className="mb-2 rounded py-2">
  <NavLink
    to="/hazard/report"
    className={({ isActive }) =>
      `px-3 block transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white font-bold shadow'
          : 'hover:bg-blue-500 text-blue-800'
      }`
    }
  >
    <img src='/alert2.png' alt="Hazard" className="inline-block w-6 h-6 mr-2 filter grayscale hover:filter-none hover:saturate-200 transition duration-200" />
    Hazard & Risk Management
    </NavLink>

</li>


<li className="mb-2 rounded py-2">
  <NavLink
    to="/health-and-safety"
    className={({ isActive }) =>
      `px-3 block transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white font-bold shadow'
          : 'hover:bg-blue-500 text-blue-800'
      }`
    }
  >
          <img src="/audit.png" alt="Health & Safety" className="inline-block w-6 h-6 mr-2 filter grayscale hover:filter-none hover:saturate-200 transition duration-200" />
    Health & Safety Audit
  </NavLink>
</li>

<li className="mb-2 rounded py-2">
  <NavLink
    to="/incident-management"
    className={({ isActive }) =>
      `px-3 block transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white font-bold shadow'
          : 'hover:bg-blue-500 text-blue-800'
      }`
    }
  >
        <img src='/inc.png' alt="Hazard" className="inline-block w-6 h-6 mr-2 filter grayscale hover:filter-none hover:saturate-200 transition duration-200" />
    Incidents Management
  </NavLink>
</li>


<li className="mb-2 rounded py-2">
  <NavLink
    to="/inspection"
    className={({ isActive }) =>
      `px-3 block transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white font-bold shadow'
          : 'hover:bg-blue-500 text-blue-800'
      }`
    }
  >
    <img src='/setting2.png' alt="Hazard" className="inline-block w-6 h-6 mr-2 filter grayscale hover:filter-none hover:saturate-200 transition duration-200" />

    Inspection
  </NavLink>
</li>


</ul>

<div className='mt-4 '>
  <h2  className='text-2xl text-blue font-bold-shadow'>Management</h2>
</div>
<ul>
  <li className="mb-2 rounded py-2">
  <NavLink
    to="/user-management"
    className={({ isActive }) =>
      `px-3 block transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white font-bold shadow'
          : 'hover:bg-blue-500 text-blue-800'
      }`
    }
  >
    <img src='/users.png' alt="Hazard" className="inline-block w-6 h-6 mr-2 filter grayscale hover:filter-none hover:saturate-200 transition duration-200" />

    Users
  </NavLink>
</li>
  
</ul>



<div className="mt-auto pt-4 border-t border-gray-300 text-gray-700">
      {/* Section Title */}
      <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4 px-3">Account</h2>

      {/* Help Center */}
      <div className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
         <img src='/setting2.png' alt="Hazard" className="inline-block w-6 h-6 mr-2 filter grayscale hover:filter-none hover:saturate-200 transition duration-200" />

        <span className="text-sm">Help Center</span>
      </div>

      {/* Settings */}
      <div className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src='/help2.png' alt="Hazard" className="inline-block w-6 h-6 mr-2 filter grayscale hover:filter-none hover:saturate-200 transition duration-200" />

        <span className="text-sm">Settings</span>
      </div>

      {/* Profile Info Block */}
      <div className="flex items-center justify-between px-3 py-3 mt-3 bg-white rounded-md shadow">
        <div className="flex items-center">
          {/* Avatar */}
          <img
            src="/profile1.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />

          {/* Name & Email */}
          <div className="text-sm">
            <p className="font-semibold text-gray-800">Paul Amegah</p>
            <p className="text-xs text-gray-500">paul@gmail.com</p>
          </div>
        </div>

        {/* Dropdown Icon */}
        <button className="text-gray-500 hover:text-gray-700">
          <FaChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>





  </div>

  )
}







