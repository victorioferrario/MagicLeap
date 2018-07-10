import * as React from 'react';

import Divider from "@material-ui/core/Divider";
import Icon from '@material-ui/core/Icon';

import { NavLink } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

export interface IPropsMenuListControl {
    classes?: any;
    logmessage?: string;
    onHandleClick: (side: any, open: any) => void;
}
export interface IStateMenuListControl {
    open_collapse: boolean;
    logmessage?: string;
}
//#region [@ MenuTopControl ] 

export const LinkHome = (props: any) => <NavLink to="/" {...props} />
export const LinkProducts = (props: any) => <NavLink to="/products" {...props} />
export interface IPropsMenuControl {
    onHandleClick: () => void;
}
export const MenuTopControl = (props:IPropsMenuControl) => (
    <React.Fragment>
        <List component="nav" style={{ paddingTop: 0, paddingBottom: 0 }} subheader={<ListSubheader component="div">Menu</ListSubheader>}>
           <Divider />
            <ListItem button={true} component={LinkHome} onClick={props.onHandleClick}>
                <ListItemIcon>
                    <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Welcome" />
            </ListItem>
            <Divider />
            <ListItem button={true} component={LinkProducts} onClick={props.onHandleClick} >
                <ListItemIcon>
                    <Icon>star</Icon>
                </ListItemIcon>
                <ListItemText primary="Products" />
            </ListItem>            
        </List>
    </React.Fragment>
);
//#endregion
export class MenuListControl extends React.Component<IPropsMenuListControl, IStateMenuListControl>{    
    constructor(props: IPropsMenuListControl, state: IStateMenuListControl) {
        super(props);
        this.state = {
            open_collapse: false
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    public handleClick = () => {
        this.setState({ open_collapse: !this.state.open_collapse });
    };
    public handleToggleClick() {
       this.props.onHandleClick("left", false);
    }
    public componentDidMount() {
        this.setState({ logmessage: "componentDidMount" });
    }
    public componentWillMount() {
        this.setState({
            logmessage: "componentWillMount"
        });
    }
    public render(){
        const props ={
            onHandleClick : this.handleToggleClick
        }
        return (
            <React.Fragment>
                <aside style={{ backgroundColor: "#FFF", maxWidth: 360, minWidth: 280, width: '100%' }}>
                    <Divider />                   
                    {MenuTopControl(props)}                    
                    <Divider />
                </aside>
            </React.Fragment>
        );
    }

}