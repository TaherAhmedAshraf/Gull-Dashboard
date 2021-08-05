import * as React from "react";
import Container from "@material-ui/core/Container";
import { Card, Grid } from "@material-ui/core";
import CardIcon1 from "../Assets/Icons/CardIcon1";
import CardIcon2 from "../Assets/Icons/CardIcon2";
import CardIcon3 from "../Assets/Icons/CardIcon3";
import CardIcon4 from "../Assets/Icons/CardIcon4";
import { useTheme } from "@material-ui/core/styles";
import CardComponent from "../src/components/Card";

export default function Index() {
  const theme = useTheme();

  const cards = [
    {
      id: 1,
      title: "New Leds",
      value: 208,
      color: theme.palette.primary.main,
      background: "#F2F1FE",
      icon: <CardIcon1 />,
    },
    {
      id: 2,
      title: "Sales",
      value: "$4021",
      color: theme.palette.secondary.main,
      background: "#C5DBFF",
      icon: <CardIcon2 />,
    },
    {
      id: 3,
      title: "Orders",
      value: 80,
      color: theme.palette.success.main,
      background: "#BCDDB3",
      icon: <CardIcon3 />,
    },
    {
      id: 4,
      title: "Expense",
      value: "$1200",
      color: theme.palette.warning.main,
      background: "#FFF6E0",
      icon: <CardIcon4 />,
    },
  ];

  return (
    <Container>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid key={card.id} item xs={12} sm={6} md={3}>
            <Card>
              <CardComponent
                title={card.title}
                value={card.value}
                color={card.color}
                background={card.background}
                icon={card.icon}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
