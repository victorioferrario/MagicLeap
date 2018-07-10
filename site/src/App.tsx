import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import withStyles, { StyleRulesCallback, WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from './WithRoot';

import Layout from "./containers/Layout";

import './App.css';

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
      paddingTop: theme.spacing.unit * 20,
      textAlign: 'center',
  },
});

class App extends React.Component<WithStyles<'root'>, {}> {
  public render() {
    return (
    <React.Fragment>               
      <Router>                     
        <Layout />             
      </Router>
    </React.Fragment>);
  }
}

export default withRoot(withStyles(styles)<{}>(App));
