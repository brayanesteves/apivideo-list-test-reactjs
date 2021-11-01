import { render } from '@testing-library/react';
import React from 'react';
import './assets/css/styles.css';
const Duration = require('duration')
const Video = (props) => {
    const {video} = props
    const { id, ulid, name, description, perc_score_m1, perc_score_m2, perc_score_m3, type, url_original, sector, date, global_txt_sal, fps, frame_count, duration  } = video

    const getViewString = viewCount => {
        // 1283019 -> 1.2M
        const numOfChar = frame_count.toString().length
        let unit = ''
        let renderedView = ''

        if (numOfChar >= 10) {
            renderedView = (viewCount/1000000000).toFixed(1)
            unit = 'B'
        } else if (numOfChar >= 7) {
            renderedView = (viewCount/1000000).toFixed(1)
            unit = 'M'
        } else if (numOfChar >= 4) {
            renderedView = (viewCount/1000).toFixed(0)
            unit = 'K'
        } else {
            renderedView = viewCount
            unit = ''
        }

        return `${renderedView}${unit}`
    }

    const getUploadedString = uploadedAt => {
        // "2021-02-12" -> 1 days
        const duration = new Duration(new Date(uploadedAt), new Date())
        let unit = ''
        let renderedView = ''
        if (duration.years >= 1) {
            renderedView = duration.years
            unit = 'years'
        } else if (duration.months >= 1) {
            renderedView = duration.months
            unit = 'months'
        } else if (duration.days >= 1) {
            renderedView = duration.days
            unit = 'days'
        } else {
            renderedView = ''
            unit = ''
        }

        return `${renderedView} ${unit}`
    }

    const getLengthString = length => {
        // 208 -> 03:28
        var sec_num = parseInt(length)
        var hours = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours, minutes, seconds] // 0, 3, 28
            .map(v => v < 10 ? "0" + v : v) // 00, 03, 28
            .filter((v, i) => v !== "00" || i > 0) // 03, 28
            .join(":") // 03:28
    }
    console.log(props);
    return (
        <div className="">            
            <div className="video col">
                <div className="thumbnail">
                    <img src="data:image/jpeg;base64,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" />
                    <span className="length">{getLengthString(duration)}</span>
                </div>
                <h4 className="title">{name}</h4>
                <p className="channel">
                    <a href={url_original} target="_blank">{name}</a>
                </p>
                <p className="video-info">
                    <span className="view-count">{frame_count} views</span>
                    <span className="point-divider"></span>
                    <span className="uploaded-at">{date} ago</span>
                </p>
                
            </div>
        </div>
    )
}

export default Video