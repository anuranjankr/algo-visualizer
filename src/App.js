// import React from "react";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import Collapse from '@material-ui/core/Collapse';
// import "./App.css";

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// });


// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === "top" || anchor === "bottom",
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//             <ListItemLink to="/inbox" open={open} onClick={handleClick} />
//             <Collapse component="li" in={open} timeout="auto" unmountOnExit>
//               <List disablePadding>
//                 <ListItemLink to="/inbox/important" className={classes.nested} />
//               </List>
//             </Collapse>
//             <ListItemLink to="/trash" />
//             <ListItemLink to="/spam" />
//           </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <>
//       <div className="app__header"> 
//         <p>~ 𝓐𝓵𝓰𝓸𝓻𝓲𝓽𝓱𝓶&nbsp;&nbsp;𝓥𝓲𝓼𝓾𝓪𝓵𝓲𝔃𝓮𝓻 ~</p>
//       </div>
      
//       {["left"].map((anchor) => (
//             <React.Fragment  key={anchor}>
//               <Button onClick={toggleDrawer(anchor, true)}>Visualize</Button>
//               <Drawer
//                 anchor={anchor}
//                 open={state[anchor]}
//                 onClose={toggleDrawer(anchor, false)}
//               >
//                 {list(anchor)}
//               </Drawer>
//             </React.Fragment>
//           ))}
//     </>
//   );
// };

// header() {
//   return (
//     <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
//       <img src={logo} alt="Logo" style={{ width: 40 }} />
//       <a style={{ color: "white" }} href={{ href: "#" }}>
//         ~ Algorithm Visualizer ~
//       </a>
//       <img src={logo} alt="Logo" style={{ width: 40 }} />
//     </nav>
//   );
// };



import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Visualize from "./components/layout/Visualize";
import About from "./components/layout/About";
import Breadcrumbs from "./components/layout/Breadcrumbs";
import Sorting from "./components/layout/Sorting";
import Bubble from "./components/sort/Bubble";
import Selection from "./components/sort/Selection";
import Merge from "./components/sort/Merge";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Breadcrumbs />
        <Switch>
          <Route exact from="/" render={props => <Visualize {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route exact path="/sort" render={props => <Sorting {...props} />} />
          <Route
            exactpath="/sorting/bubble"
            render={props => <Bubble {...props} />}
          />
          <Route
            exact
            path="/sorting/merge"
            render={props => <Merge {...props} />}
          />
          <Route
            exact
            path="/sorting/selection"
            render={props => <Selection {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
