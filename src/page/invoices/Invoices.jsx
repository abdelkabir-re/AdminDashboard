import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns,rows } from "./Data";
export default function Invoices(){
    return(
        <Box sx={{ height: 600, width: '98%', }} mx={'auto'} >
            <DataGrid
            checkboxSelection
            slots={{ toolbar: GridToolbar }}
            rows={rows}  
            columns={columns} 
            />
        </Box>
    )
}