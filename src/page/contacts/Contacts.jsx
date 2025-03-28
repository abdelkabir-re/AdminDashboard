import { rows,columns } from './Data';
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function Contacts(){
    
    return(
        <>
        <Box sx={{ height: 600, width: '98%', }} mx={'auto'} >
            <DataGrid
            slots={{ toolbar: GridToolbar }}
            rows={rows}  
            columns={columns} 
            
            />
        </Box>
        </>
    )
}