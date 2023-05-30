import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Collapse,
  IconButton,
  Grid,
  Avatar
} from "@material-ui/core";
import {
  ExpandMore as ExpandMoreIcon,
  Person as PersonIcon
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    toolbar: theme.mixins.toolbar,
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    questionContainer: {
      marginBottom: theme.spacing(3)
    },
    line: {
      borderBottom: "1px solid",
      marginBottom: theme.spacing(2)
    },
    answerContainer: {
      marginBottom: theme.spacing(2)
    },
    answerCard: {
      marginBottom: theme.spacing(2)
    },
    expandIcon: {
      marginLeft: "auto"
    },
    expandedContent: {
      marginTop: theme.spacing(2)
    },
    avatar: {
      marginRight: theme.spacing(2)
    }
  })
);

const Home: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemText primary="Sidebar Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sidebar Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sidebar Item 3" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card className={classes.questionContainer}>
          <CardHeader title="Question" />
          <CardContent>
            <Grid container alignItems="center">
              <Grid item>
                <Avatar
                  alt="Person Asked"
                  src="person-asked-image.jpg"
                  className={classes.avatar}
                >
                  <PersonIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="span">
                  Person Asked: Jack
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="subtitle1">
              Date of Creation: May 29, 2023
            </Typography>
            <Typography variant="subtitle1">Likes: 10</Typography>
            <Button variant="contained" color="secondary">
              Report this topic
            </Button>
            <Typography variant="subtitle1">Number of Answers: 5</Typography>
            <Typography variant="body1">
              blah blah blah blah blah blah blah blah blah blah  blah blah blahblah blah blah blah blah  
              blah blah blah blah blah blah blah  blah blah blah blah blah blah blah  blah blah 
            </Typography>
          </CardContent>
        </Card>
        <Divider className={classes.line} />
        <div className={classes.answerContainer}>
          <Typography variant="h6">Answers:</Typography>
          <Card className={classes.answerCard}>
            <CardHeader
              avatar={
                <Avatar
                  alt="First Person"
                  src="first-person-image.jpg"
                  className={classes.avatar}
                >
                  <PersonIcon />
                </Avatar>
              }
              title="First Person"
              subheader="When Answered: May 30, 2023"
            />
            <CardContent>
              <Collapse in={expanded} unmountOnExit>
                <Typography variant="body1">
                blah blah blah blah blah blah blah blah blah blah  blah blah blahblah blah blah blah blah  
              blah blah blah blah blah blah blah  blah blah blah blah blah blah blah  blah blah 
                </Typography>
              </Collapse>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={classes.expandIcon}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
