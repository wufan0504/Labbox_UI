import React, { useState } from 'react';
import mockData from './mockData';
import { Typography } from '@material-ui/core';

const TimeSeriesView = (props) => {
    const { match } = props;
    const { params } = match;
    const { recordingID } = params;

    const [recording, setRecordingData] = useState(mockData[`${recordingID}`])
    const {name, date, duration, sampleRate, rawView} = recording
  
    return (
        <div>            
            <Typography variant="h3">{name}</Typography>
            <Typography variant="h4">{date}</Typography>
            <Typography variant="h4">{duration}</Typography>
            <Typography variant="h4">{sampleRate}</Typography>
            <img src= {rawView} alt='recording image'/>
        </div>
        
    ) 
};

export default TimeSeriesView;