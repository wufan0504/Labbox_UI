import React, { useState } from "react";
import MaterialTable from "material-table";
import mockData from "./mockData";
import { getRecording } from "./RecordingView";



const RecordingTableSorted = () => {
  const [state, setState] = useState({
    columns: [
      // { title: 'Recording ID', field: 'ID', type: 'numeric' },
      { title: "File", field: "name" },
      { title: "Upload Date", field: "date" },
      { title: "Sample Rate (Hz)", field: "sampleRate" },
      { title: "Duration (sec)", field: "duration" },
      { title: "Status", field: "status" },
    ],
    data: Object.keys(mockData).map((recordingID) => getRecording(recordingID)),
  });


  return (
    <MaterialTable

      title="Recording Database"
      columns={state.columns}
      data={state.data}
      actions={[
        
        rowData=>({
          icon: "forward",
          iconProps: {color: rowData.status==="Raw data" ? "secondary" : "disabled"}, 
          
          tooltip: rowData.status==="Raw data" ? "Run spikesorting" : "Data cannot be spikesorted",
          onClick: (event, rowData) => {
            // Do save operation
            console.log(rowData.status) 
          },
          disabled: rowData.status==="Raw data" ? false : true

        }),

        
        {
          icon: 'save',
          tooltip: 'Save to local drive',
          onClick: (event, rowData) => {
            // Do save operation
          }
        }
      ]}
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
};

export default RecordingTableSorted;
