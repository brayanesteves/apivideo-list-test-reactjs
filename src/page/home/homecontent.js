import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideosRow from '../../main/videosrow';
import './assets/css/styles.css';
const HomeContent = () => {

    const [username, setUsername]             = React.useState("");
    const [loading, setLoading]               = React.useState(false);
    const [persons, setPersons]               = React.useState([]);
    const [details, setDetails]               = React.useState({});
    const [detailsLoading, setDetailsLoading] = React.useState(false);

    
    useEffect(() => {
        searchUser();
        setPersons([]);
        setDetails({}); 
      
    }, [username]);

    
    function searchUser() {
        let url;
        if(username == "") {
          url = `https://dev-cognitive-dashboard-server.herokuapp.com/techtest`;
        } else {      
          url = `https://dev-cognitive-dashboard-server.herokuapp.com/techtest/`;
        }
        setLoading(true);      
          axios({
            method: "GET",
            headers: { 'Content-Type': 'application/json'},
            url: url,
          }).then(res => {
            setLoading(false);
            console.log(res.data);
            setPersons(res.data);
          }).catch(err => { console.log(err); });
      }
      
    return (
        <div className="home-content">
            <VideosRow 
                type= "normal"
                label= "Recommended"
                videos= {persons}
            />
        </div>
    )
}

export default HomeContent