import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import { NoEncryption } from "@mui/icons-material";
import NoteGraphic from "./NoteGraphic";
import TaskGraphic from "./TaskGraphic";
import DiscussionGraphic from "./DiscussionGraphic";
import Image from "next/image";

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>
          <SearchIcon
            style={{
              display: "inline-flex",
              width: "1.5rem",
              height: "inline",
              color: "#3F7396",
            }}
          />
          <Search />
        </Toolbar>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Notes", "Tasks", "Discussions"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {text === "Notes" && <NoteGraphic />}
                    {text === "Tasks" && <TaskGraphic />}
                    {text === "Discussions" && <DiscussionGraphic />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Course Info", "Course Review", "Trash"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>Sample paragraph</Typography>
        <Typography paragraph>Sample paragraph</Typography>
      </Box>
    </Box>
  );
}
