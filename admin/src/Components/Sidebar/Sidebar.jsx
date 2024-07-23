import React from 'react';
import './Sidebar.css'; // Ensure you create this CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/path-to-your-admin-image.jpg" alt="Admin" className="admin-image" />
        <h3>Admin Name</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/customers">Customers</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
