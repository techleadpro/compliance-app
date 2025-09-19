// src/components/Layout.js

import { Sidebar } from './Sidebar';
{/*import { Navbar } from './Navbar';*/}

export function Layout({ children, sidebarToggle, setSidebarToggle }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar sidebarToggle={sidebarToggle}setSidebarToggle={setSidebarToggle} />
      
      <div className="flex-1 px-4 md:px-8 py-6 overflow-auto">
       {/* <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />*/}
        
        <div className="max-w-6xl mx-auto ml-64">
          {children}
        </div>
      </div>
    </div>
  );
}


