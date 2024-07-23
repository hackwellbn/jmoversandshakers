import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('https://jmoversandshakers.onrender.com/api/notifications');
        const data = await response.json();
        setNotifications(data);
        setUnreadCount(data.filter(notif => !notif.read).length);
      } catch (err) {
        console.error('Error fetching notifications:', err);
      }
    };

    fetchNotifications();
  }, []);

  const handleNotificationClick = async () => {
    try {
      await fetch('http://localhost:3000/api/notifications/mark-all-read', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setNotifications(notifications.map(notif => ({ ...notif, read: true })));
      setUnreadCount(0);
    } catch (err) {
      console.error('Error marking notifications as read:', err);
    }
  };

  return (
    <nav className="navbar">
      <span className="logo">Jmoversandshakers</span>
      <div className="navbar-links">
        <ul className="navbar-list">
                    <li className="navbar-item notification-icon" onClick={handleNotificationClick}>
            <FontAwesomeIcon icon={faBell} />
            {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
          </li>
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>Contacts</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </li>
          <li className="navbar-item btn">
            <NavLink to="/signUp" className={({ isActive }) => (isActive ? 'active' : '')}>signUp</NavLink>
          </li>

        </ul>
      </div>
      {!menuActive && (
        <span className="material-symbols-outlined menu" onClick={toggleMenu}>
          menu
        </span>
      )}
      <div className={`panel ${menuActive ? 'active' : ''}`}>
        <span className="material-symbols-outlined close" onClick={toggleMenu}>
          close
        </span>
        <ul className="panel-list">
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>Contacts</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/signUp" className={({ isActive }) => (isActive ? 'active' : '')}>signUp</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
