import { DataGrid } from '@mui/x-data-grid';
import { rows } from './Data';
import { useTheme } from '@emotion/react';
import { Box, Typography } from "@mui/material";
import { AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined
 } from '@mui/icons-material';

export default function Team(){
    const theme=useTheme()
    const columns = [
        { field: 'id', headerName: 'ID',flex:1,width:33,align:'center',headerAlign:'center' },
        { field: 'name', headerName: 'Name',flex:1,align:'center',headerAlign:'center' },
        { field: 'email', headerName: 'Email',flex:1,align:'center',headerAlign:'center' },
        { field: 'age', headerName: 'Age',flex:1,align:'center',headerAlign:'center' },
        { field: 'phone', headerName: 'Phone',flex:1,align:'center',headerAlign:'center' },
        { field: 'access', headerName: 'Access',flex:1,align:'center',headerAlign:'center',
            renderCell:({row:{access}})=>{

                return(
                    <Box sx={{
                        p:'5px',
                        backgroundColor:access==='Admin'?theme.palette.primary.dark:access==='Manager'?theme.palette.secondary.dark:'#3da58a',
                        borderRadius:'3px',
                        textAlign:'center',
                        width:'98px',
                        margin:'auto',
                        mt:'8px',
                        display:'flex',
                        justifyContent:'space-evenly'

                    }}>
                        {access==='Admin' && <AdminPanelSettingsOutlined sx={{color:'white'}} fontSize='small'/>}
                        {access==='Manager' && <SecurityOutlined sx={{color:'white'}} fontSize='small'/>}
                        {access==='User' && <LockOpenOutlined sx={{color:'white'}} fontSize='small'/>}
                        <Typography sx={{fontSize:'13px',color:'white'}}> {access} </Typography>
                    </Box>
                )
            }
         },
        
        
      ];
    return(
        
            <Box sx={{ height: 600, width: '98%', }} mx={'auto'} >
                <DataGrid rows={rows}  
// @ts-ignore
                columns={columns} />
            </Box>
        
    )
}