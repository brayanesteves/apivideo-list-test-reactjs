import React from 'react';
import Video from "./video";
import axios from 'axios';
import './assets/css/styles.css';
const VideosRow = (props) => {
    const { type, label, videos } = props;
    const renderRowLabel = () => {
        if (type === 'normal') {
            return <h3 className="videos-row-label">{label}</h3>
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