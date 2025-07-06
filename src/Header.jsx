import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="name">Watch Movies</div>
        <div className="links">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/popular">Popular</a>
          </li>
          <li className="nav-item">
            <a href="/profile">Profile</a>
          </li>
        </div>
        <div className="search-box">
          <input className="search" placeholder="Search movise"></input>
          <button className="search-btn">OK</button>
        </div>
        <div className="theme">Theme</div>
      </nav>
    </header>
  );
}
export default Header;
