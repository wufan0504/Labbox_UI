import React, { useState } from 'react';
import MaterialTable from 'material-table';
import mockData from './mockData';


const getRecording = (recordingID) => {

  const {name, date, sampleRate, duration} = mockData[recordingID]
  
  return (
    {
      name: name, date: date, sampleRate: sampleRate, duration: duration
    }
    
  );  
};

const RecordingTableSorted = () => {
  
  const [state, setState] = useState({
    columns: [
      // { title: 'Recording ID', field: 'ID', type: 'numeric' },
      { title: 'File', field: 'name' },
      { title: 'Date', field: 'date' },
      { title: 'Sample Rate (Hz)', field: 'sampleRate', type: 'numeric' },
      { title: 'Duration (sec)', field: 'duration', type: 'numeric' }
    ],
    data: 
      Object.keys(mockData).map((recordingID) => getRecording(recordingID))
  });

  return (
    
    <MaterialTable
      title="Recording Database"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

export default RecordingTableSorted;