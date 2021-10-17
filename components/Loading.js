import React from "react";
import { LoaderMain, Wrapper } from "../styles/main.style";
import { CircularProgress } from "@mui/material";
function Loading() {
  return (
    <LoaderMain name="loading">
      <Wrapper top="0px" left="0px">
        <CircularProgress
          sx={{
            width: "200px",
            height: "200px",
          }}
          variant="indeterminate"
        />
      </Wrapper>
    </LoaderMain>
  );
}

export default Loading;
