import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "./tileData";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    flexShrink: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  /* Styles applied to the `div` element that wraps the children. */
  tile: {
    position: "relative",
    display: "block", // In case it's not rendered with a div.
    height: "100%",
    overflow: "hidden",
  },
  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullHeight: {
    height: "100%",
    transform: "translateX(-50%)",
    position: "relative",
    left: "50%",
  },
  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullWidth: {
    width: "100%",
    position: "relative",
    transform: "translateY(-50%)",
    top: "50%",
  },
}));

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
