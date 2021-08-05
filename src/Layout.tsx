import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import React from "react";
import Drawer from "./components/Drawer";

const Wrapper = styled(Box)({
  paddingLeft: 140,
});

export default function Layout({ children }: any) {
  return (
    <>
      <Drawer />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
