import { GlobalStyles } from "tss-react";
import { Slide } from "./Slide";
import { tss } from "tss-react/mui";

export function App() {

  const { classes } = useStyles();

  return (
    <>
      <GlobalStyles styles={{
        "*": {
          "margin": 0,
          "padding": 0,
        },
        "html, body": {
          "backgroundColor": "black",
        },
      }}
      />
      <div className={classes.root}>
        <Slide />
      </div>
    </>
  )
}

const useStyles = tss.create(() => ({
  "root": {
    "width": "100vw",
    "height": "100vh",
    "overflow": "hidden",
  },

}));