import { CardContent, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import React from "react";

const CardContentStyled = styled(CardContent)({
  display: "flex",
  cursor: "pointer",
});

// @ts-ignore
const IconHolder = styled("div")(({ background }) => ({
  background,
  padding: "30px 10px",
  borderRadius: 18,
}));

const Icon = styled("div")({
  width: 20,
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ContentStyled = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: 10,
});

const TitleStyled = styled(Typography)({ fontSize: 14, fontWeight: 400 });
// @ts-ignore

const ValueStyled = styled(Typography)(({ textColor }) => ({
  fontSize: 30,
  fontWeight: 700,
  color: textColor,
}));

export default function CardComponent({
  color,
  background,
  title,
  value,
  icon,
}: any) {
  return (
    <CardContentStyled>
      {/*// @ts-ignore */}
      <IconHolder background={background}>
        <Icon color={color}>{icon}</Icon>
      </IconHolder>
      <ContentStyled>
        <TitleStyled variant="inherit">{title}</TitleStyled>
        {/*// @ts-ignore */}
        <ValueStyled variant="h5" textColor={color}>
          {value}
        </ValueStyled>
      </ContentStyled>
    </CardContentStyled>
  );
}
