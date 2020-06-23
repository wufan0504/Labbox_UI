import React, { useState } from 'react'
import { TableContainer, TableHead, TableRow, TableBody, TableCell, Table } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mockData from './mockData';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
       
    }
});

const RecordingTableSimple = () => {
    const classes = useStyles()
    const [recordingList, setRecordingList] = useState(mockData)

    return (
        
            <TableContainer component = {Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> Recording ID </TableCell>
                            <TableCell> File </TableCell>
                            <TableCell> Upload Date </TableCell>
                            <TableCell> Sample Rate </TableCell>
                            <TableCell> Duration </TableCell>                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(recordingList).map((recordingID) => (
                            <TableRow key={recordingID}>
                                <TableCell> {recordingID} </TableCell>
                                <TableCell> {recordingList[recordingID].name} </TableCell>
                                <TableCell> {recordingList[recordingID].date} </TableCell>
                                <TableCell> {recordingList[recordingID].sampleRate} </TableCell>
                                <TableCell> {recordingList[recordingID].duration} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    
    )
}

export default RecordingTableSimple;
