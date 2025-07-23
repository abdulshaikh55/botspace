import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarIcon from "@mui/icons-material/Star";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Avatar from "@mui/material/Avatar";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import type React from "react";
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 60;

type ItemProps = {
  icon: React.ReactNode;
  iconColor?: string;
};

const sidebarItems = [
  { icon: <StarIcon />, path: '/star' },
  { icon: <HomeIcon />, path: '/home' },
  { icon: <PersonIcon />, path: '/profile' },
  { icon: <CodeIcon />, path: '/code' },
  { icon: <CommentIcon />, path: '/comments' },
  { icon: <SendIcon />, path: '/send' },
  { icon: <SettingsIcon />, path: '/settings' },
];

const Item = ({ icon, iconColor, path }: ItemProps & { path: string }) => (
  <ListItem disablePadding>
    <ListItemButton sx={{ justifyContent: 'center' }} component={RouterLink} to={path}>
      <ListItemIcon sx={{ pb: 1, minWidth: 0, justifyContent: 'center', color: iconColor, '& .MuiSvgIcon-root': { fontSize: '1.8rem' } }}>
        {icon}
      </ListItemIcon>
    </ListItemButton>
  </ListItem>
);

const Sidebar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <AcUnitIcon sx={{ fontSize: '2.2rem' }} />
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <List sx={{ gap: 2 }}>
            {sidebarItems.map((item) => (
              <Item key={item.path} icon={item.icon} path={item.path} />
            ))}
          </List>
        </Box>
        {/* Bottom area: Help icon and profile avatar */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 1 }}>
          <List sx={{ p: 0 }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ justifyContent: 'center' }} component={RouterLink} to="/help">
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                  <HelpOutlineIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <Avatar src="/assets/images/avatar/avatar-1.webp" sx={{ width: 40, height: 40 }} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
