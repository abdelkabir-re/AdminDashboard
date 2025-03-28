import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function Form(){
    const data = [
        {
          value: 'Admin',
          label: 'Admin',
        },
        {
          value: 'Manager',
          label: 'Manager',
        },
        {
          value: 'User',
          label: 'User',
        },
        ]
    return(
        <>
        <Box
            component="form"
            sx={{ 
                display:'flex',
                flexDirection:'column',
                gap:3
            }}
            noValidate
            autoComplete="off"
            
        >
            <Stack direction={'row'} sx={{gap:2}} >
                <TextField sx={{flex:1}} label="First Name" variant="filled" />
                <TextField sx={{flex:1}} label="Last Name" variant="filled" />
            </Stack>

            <TextField  label="Email" variant="filled" />
            <TextField  label="Contact Number" variant="filled" />
            <TextField  label="Address 1" variant="filled" />
            <TextField  label="Address 2" variant="filled" />
            <TextField
                id="outlined-select-currency"
                variant="filled"
                select
                label="Role"
                defaultValue="Admin"
                >
                {data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
           </TextField>
           <Box sx={{textAlign:'end'}}>
                <Button variant='contained' sx={{textTransform:'capitalize'}} >
                    Create New User
                </Button>
           </Box>
           
            
        </Box>
       
    </>
    )
}