import React from "react";
import { styled } from "@material-ui/core/styles";
import { Avatar, Badge, IconButton } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/More";
import Scale from "../../Assets/Icons/Scale";
import Bell from "../../Assets/Icons/Bell";

const SectionDesktop = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionMobile = styled("div")(({ theme }) => ({
  display: "flex",
  color: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default function NavbarButtons() {
  return (
    <>
      <SectionDesktop>
        <IconButton color="primary">
          <Scale />
        </IconButton>
        <IconButton color="primary">
          <Badge badgeContent={3} color="primary">
            <Bell />
          </Badge>
        </IconButton>
        <IconButton edge="end" color="inherit">
          <Avatar alt="Ashraf" src="../Assets/Images/avater.png" />
        </IconButton>
      </SectionDesktop>
      <SectionMobile>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </SectionMobile>
    </>
  );
}
