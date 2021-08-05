import {
  Box,
  Drawer,
  Typography,
  List,
  AppBar,
  IconButton,
  alpha,
  Toolbar,
  InputBase,
} from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";
import React from "react";
import MenuItem from "./MenuItem";
// icons
import DashboradIcon from "../../Assets/Icons/Dashboard";
import TableIcon from "../../Assets/Icons/Table";
import Icon3 from "../../Assets/Icons/Icons3";
import Icon4 from "../../Assets/Icons/Icon4";
import Icon5 from "../../Assets/Icons/Icon5";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NavbarButtons from "./NavbarButtons";
const drawerWidth = 115; // Drawer Width

// Menu Items
const menuItem = [
  { id: 1, title: "Dashboard", icon: <DashboradIcon />, path: "/" },
  { id: 2, title: "Table", icon: <TableIcon />, path: "/table" },
  { id: 3, title: "Demo1", icon: <Icon3 />, path: "/demo/demo1" },
  { id: 4, title: "Demo2", icon: <Icon4 />, path: "/demo/demo2" },
  { id: 5, title: "Demo3", icon: <Icon5 />, path: "/demo/demo3" },
];

const useStyle = makeStyles((theme) => ({
  paper: {
    background: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
  },
}));

const Logo = styled(Typography)({
  fontSize: 30,
  fontWeight: 700,
  width: drawerWidth,
  padding: "1rem 0",
  textAlign: "center",
  cursor: "pointer",
});

const BoxStyled = styled(Box)({
  display: "flex",
  paddingBottom: 100,
});

const ListStyle = styled(List)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const NavBar = styled(AppBar)({
  paddingLeft: 120,
  background: "rgba(52, 52, 52, 0.0)",
  color: "#000",
  boxShadow: "none",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  color: "#949494",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.7),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconStyle = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  position: "absolute",
  padding: theme.spacing(0, 2),
}));

const Grow = styled("div")({
  flexGrow: 1,
});

export default function MiniDrawer() {
  const classes = useStyle();
  return (
    <BoxStyled>
      {/* APP BAR */}
      <NavBar>
        <Toolbar>
          <IconButton color="primary">
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconStyle>
              <SearchIcon />
            </SearchIconStyle>
            <InputBase
              placeholder="Search…"
              classes={{
                input: classes.inputInput,
              }}
            />
          </Search>
          <Grow />
          <NavbarButtons /> {/* Difftrent Componet */}
        </Toolbar>
      </NavBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.paper }}
      >
        <Logo>Gull</Logo>
        <ListStyle>
          {menuItem.map((item) => (
            <MenuItem
              id={item.id}
              path={item.path}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </ListStyle>
      </Drawer>
    </BoxStyled>
  );
}
