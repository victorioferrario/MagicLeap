import * as React from "react";
import { Route, Switch } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";

import { HomePage, NoMatch, Products} from "../components/";
import { IPropsMenuListControl, MenuListControl } from "../components/shared/MenuListControl";

export interface IState {
    bottom?:boolean;
    left:boolean;
    right?:boolean;
    top?:boolean;
}
export class Layout extends React.Component <{}, IState> {
    constructor(props:any, state:IState){
        super(props);
        this.state = {
            bottom: false,
            left: false,            
            right: false,        
            top: false,
        };
        this.childToggleDrawer = this.childToggleDrawer.bind(this);      
    }
    public render(){
        return (
        <React.Fragment>
            <main className="App-Main">
                {this.buildAppBar()}
                {this.buildAppDrawer()}
                {this.buildAppContent()}
            </main>
        </React.Fragment>);
    }
    public toggleDrawer = (open: any) => () => {
        this.setState({
            left: open,            
        });
    }
    public childToggleDrawer(side: any, open: any) {
        this.setState({
            left: open,            
        });
        this.setState({
            left: open
        });
    }    
    private buildAppBar(){
        return (
        <React.Fragment>
            <AppBar
                position="fixed" 
                color="primary">
                <Toolbar>
                <IconButton onClick={this.toggleDrawer(true)}
                    style={{
                        marginLeft: -12,
                        marginRight: 10
                    }}
                    color="inherit"
                    aria-label="Menu">
                            <MenuIcon />
                </IconButton>                
                <Typography
                    variant="title"
                    color="primary">
                    <span style={{ color: "#FFF" }}>Watto’s Spaceship Emporium</span>
                </Typography>    
                </Toolbar>                   
            </AppBar>
        </React.Fragment>);
    }
    private buildAppContent(){
        return (
        <section className="App-Content" id="appContentId">
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/products" component={Products} />                
                <Route component={NoMatch} />
            </Switch>                     
        </section>);
    }
    private buildAppDrawer(){
        const childProps: IPropsMenuListControl = {            
            onHandleClick: this.childToggleDrawer
        };
        return (<SwipeableDrawer
            open={this.state.left}
            onOpen={this.toggleDrawer(true)}
            onClose={this.toggleDrawer(false)}>
            <div tabIndex={0} role="button">
                <MenuListControl {...childProps} />
            </div>
        </SwipeableDrawer>);
    }
}
export default Layout;




