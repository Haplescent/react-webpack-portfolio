import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 473,
  },
  media: {
    height: 0,
    paddingTop: "40%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProfileReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            alt="John Merritt"
            src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/34304766_10212205072710943_7918879714737913856_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=t3qYjojBTxgAX-jb9ve&_nc_ht=scontent-sjc3-1.xx&oh=88f7b0e8e9bc82324b7ada2a01d44ec6&oe=5F4AD7D0"
          />
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title="John Merritt"
        subheader="Scientist, Actor, Web Developer"
      />
      <CardMedia
        className={classes.media}
        image="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10375127_10202496010750462_936394588271677874_n.jpg?_nc_cat=102&_nc_sid=19026a&_nc_ohc=bI-DcAdSnrMAX8lVtnI&_nc_ht=scontent-sjc3-1.xx&oh=9324dadab22dc410594d8011f7664bca&oe=5F4CE513"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          My career objective is to become an expert in high-throughput
          molecular biology lab research, utilizing python, bioinformatics, and
          automation of innovative techniques. I want to grow business and
          social connections to promote other people’s constructive career
          objectives and my own. High-throughput lab research, combined with
          clinical implementation, can allow doctors to prescribe more
          personalized medicines
        </Typography>
      </CardContent>
    </Card>
  );
}
