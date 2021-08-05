import React from "react";
import { styled, makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuTitle: {
    fontSize: 14,
  },
  active: {
    background: theme.palette.primary.light,
  },
}));

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: 72,
  justifyContent: "center",
  alignItems: "center",
  width: 100,
  borderRadius: theme.shape.borderRadius,
}));

const ListIconStyled = styled(ListItemIcon)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#fff",
});

const ListItemTextStyled = styled(ListItemText)({
  fontSize: 14,
  fontWeight: 400,
});

export default function MenuItem({ id, path, icon, title }: any) {
  const router = useRouter();
  const classes = useStyles();
  return (
    <ListItemStyled
      button
      key={id}
      onClick={() => router.push(path)}
      // @ts-ignore
      className={router.pathname === path ? classes.active : null}
    >
      <ListIconStyled>{icon}</ListIconStyled>
      {router.pathname === path ? (
        <ListItemTextStyled
          // @ts-ignore
          classes={{ primary: classes.menuTitle }}
          primary={title}
        />
      ) : null}
    </ListItemStyled>
  );
}
