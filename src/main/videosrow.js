import React from 'react';
import Video from "./video";
import axios from 'axios';
import './assets/css/styles.css';
const VideosRow = (props) => {
    const { type, label, videos, channel } = props
    const renderRowLabel = () => {
        if (type === 'normal') {
            return <h3 className="videos-row-label">{label}</h3>
        }

        if (type === 'channel') {
            return <div className="videos-row-label-channel">
                <div className="left">
                    <img src={channel.image} className="avatar" />
                    <h3 className="video-row-label">{channel.name}</h3>
                    <span className="small-text">Recommended channel for you</span>
                </div>
                <div className="right">
                    <button className="subscribe-btn">
                        Subscribe
                    </button>
                </div>
                

            </div>
            
        }
    }
    return (
                
            <div className="videos-row-container">
                <div className="row_">
                    <div className="videos-label-container">
                        {renderRowLabel()}
                    </div>
                
                    <div className="container">                    
                        <div className="videos-row-item row">
                            {videos.map(video => (
                                <Video video={video} />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        
    )
}

export default VideosRow