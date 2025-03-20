// --------components material ui
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';


// ----------icons material ui
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


import MuiDrawer from '@mui/material/Drawer';
import { styled,useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      variants: [
        {
          props: ({ open }) => open,
          style: {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          },
        },
        {
          props: ({ open }) => !open,
          style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          },
        },
      ],
    }),
  );
const array1=[
  {'text':'Dashboard','icon':<HomeOutlinedIcon/>,'path':'/'},
  {'text':'Manage Team','icon':<PeopleOutlinedIcon/>,'path':'/team'},
  {'text':'Contacts Information','icon':<ContactsOutlinedIcon/>,'path':'/contacts'},
  {'text':'Invoices Balances','icon':<ReceiptOutlinedIcon/>,'path':'/invoices'},
]
const array2=[
  {'text':'Profile Form','icon':<PersonOutlinedIcon/>,'path':'/form'},
  {'text':'Calender','icon':<CalendarTodayOutlinedIcon/>,'path':'/calender'},
  {'text':'FAQ Page','icon':<HelpOutlinedIcon/>,'path':'/faq'},
]

const array3=[
  {'text':'Bar Chart','icon':<BarChartOutlinedIcon/>,'path':'/bar'},
  {'text':'Pie Chart','icon':<PieChartOutlineOutlinedIcon/>,'path':'/pie'},
  {'text':'Line Chart','icon':<TimelineOutlinedIcon/>,'path':'/line'},
  {'text':'Geography','icon':<MapOutlinedIcon/>,'path':'/geography'},
]

export default function SideBar({open,handleDrawerClose}){
    const theme = useTheme();
    const navigate = useNavigate();
    let location = useLocation();



    return (
        <>
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>

            <Divider />
             
            <Avatar 
            sx={{
                mx:"auto",
                width:open?88:44,
                height:open?88:44,
                my:1,
                border:'2px solid grey',
                transition:'0.25s'
                }}  
            alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
            />
             
            <Typography align='center' sx={{fontSize:open?17:0,transition:'0.25s'}} >abdelkabir</Typography>
            <Typography  align='center' sx={{fontSize:open?15:0,transition:'0.25s',color:theme.palette.info.main}} >Admin</Typography>

            <Divider />

            <List>
            {array1.map((item,) => (
                <ListItem  key={item.path}   disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                onClick={()=>{
                    navigate(item.path)
                    
                }}
                    sx={[
                    {
                        minHeight: 48,
                        px: 2.5,
                        bgcolor:item.path===location.pathname?'gray':null
                    },
                    open
                        ? {
                            justifyContent: 'initial',
                        }
                        : {
                            justifyContent: 'center',
                        },
                    ]}
                >
                  
                    <ListItemIcon
                    
                    sx={[
                        {
                        minWidth: 0,
                        justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                            }
                        : {
                            mr: 'auto',
                            },
                    ]}
                    >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={item.text}
                    sx={[
                        open
                        ? {
                            opacity: 1,
                            }
                        : {
                            opacity: 0,
                            },
                    ]}
                    />
                </ListItemButton>
                </ListItem>
            ))}
            </List>

            <Divider />

            <List>
            {array2.map((item,) => (
                <ListItem key={item.path}   disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                 onClick={()=>navigate(item.path)}


                    sx={[
                    {
                        minHeight: 48,
                        px: 2.5,
                    },
                    open
                        ? {
                            justifyContent: 'initial',
                        }
                        : {
                            justifyContent: 'center',
                        },
                    ]}
                >
                    <ListItemIcon
                    sx={[
                        {
                        minWidth: 0,
                        justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                            }
                        : {
                            mr: 'auto',
                            },
                    ]}
                    >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={item.text}
                    sx={[
                        open
                        ? {
                            opacity: 1,
                            }
                        : {
                            opacity: 0,
                            },
                    ]}
                    />
                </ListItemButton>
                </ListItem>
            ))}
            </List>

            <Divider />

            <List>
            {array3.map((item) => (
                <ListItem key={item.path}   disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                onClick={()=>navigate(item.path)}

                    sx={[
                    {
                        minHeight: 48,
                        px: 2.5,
                    },
                    open
                        ? {
                            justifyContent: 'initial',
                        }
                        : {
                            justifyContent: 'center',
                        },
                    ]}
                >
                    <ListItemIcon
                    sx={[
                        {
                        minWidth: 0,
                        justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                            }
                        : {
                            mr: 'auto',
                            },
                    ]}
                    >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={item.text}
                    sx={[
                        open
                        ? {
                            opacity: 1,
                            }
                        : {
                            opacity: 0,
                            },
                    ]}
                    />
                </ListItemButton>
                </ListItem>
            ))}
            </List>


      </Drawer>
        </>
    )

}