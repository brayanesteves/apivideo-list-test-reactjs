import React from 'react';
import './assets/css/styles.css';
const Sidebar = () => {
    const mainMenus = [
        { id:1, text: 'Home', icon: "fas fa-home" },
        { id:2, text: 'Trending', icon: "fas fa-chart-line" },
        { id:3, text: 'Subscriptions', icon: "fas fa-bookmark" },
    ];
    const libraryMenus = [
        { id:1, text: 'History', icon: "fas fa-history" },
        { id:2, text: 'Watch later', icon: "fas fa-clock" },
        { id:3, text: 'Liked videos', icon: "fas fa-thumbs-up" },
        { id:4, text: 'Show more', icon: "fas fa-arrows-alt" },
    ];
    const bestMenus = [
        { id:1, text: 'Music', icon: "fas fa-music" },
        { id:2, text: 'Sport', icon: "fas fa-basketball-ball" },
        { id:3, text: 'Gaming', icon: "fas fa-gamepad" },
        { id:4, text: 'Films', icon: "fas fa-film" },
        { id:5, text: 'TV shows', icon: "fas fa-tv" },
        { id:6, text: 'News', icon: "fas fa-newspaper" },
        { id:7, text: 'Live', icon: "fas fa-broadcast-tower" },
    ];
    return (
        <div className="sidebar">
            <ul className="menu-group">
                {mainMenus.map((menu, i) => (
                    <li className="menu-item" key={i}>
                        <i className={menu.icon}></i>
                        <span className="text">{menu.text}</span>
                    </li>
                ))}
            </ul>
            <h4 className="menu-group-label">Library</h4>
            <ul className="menu-group">
                {libraryMenus.map((menu_1, i) => (
                    <li className="menu-item" key={i}>
                        <i className={menu_1.icon}></i>
                        <span className="text">{menu_1.text}</span>
                    </li>
                ))}
            </ul>
            <h4 className="menu-group-label">Best of Youtube</h4>
            <ul className="menu-group">
                {bestMenus.map((menu_2, i) => (
                    <li className="menu-item" key={i}>
                        <i className={menu_2.icon}></i>
                        <span className="text">{menu_2.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;