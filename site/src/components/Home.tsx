import * as React from "react";
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
 import Button from '@material-ui/core/Button';

 import { NavLink } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

 // export const ProductsLink  = (props: any) => <NavLink to="/work/magicleap/site/products" {...props} />
 export const ProductsLink  = (props: any) => <NavLink to="/products" {...props} />
 import image3 from "../media/home3.png";
export class HomePage extends React.Component {
    public render(){
        return (
            <div style={{ flexGrow: 1,  padding: 20 }}>
          <Grid container={true}  spacing={24}>  
            <Grid item={true} xs={12}>
            <Slide direction="up" in={true}>    
                <Card style={{ minWidth: 200}}>
                        <CardHeader                   
                            title="Watto’s Spaceship Emporium"
                            subheader="The number 1 place for all your space craft needs!" 
                        />
                        <CardMedia
                            style={{ height: 0,paddingTop: '36.25%'}}
                            image={image3}
                            title=""
                        />
                        <CardContent>                    
                            {/* <Typography component="p" style={{minHeight:45, maxHeight:100}} variant="headline" gutterBottom={false}>
                            Welcome to Watto’s Spaceship Emporium!  <br />
                            </Typography> */}
                            <Typography variant="body2" gutterBottom={true}>
                            The best inventory selection for respectable used spaceship in the galaxy...
                            </Typography>
                        </CardContent>
                        <CardActions style={{ paddingRight:20,}}>                   
                            <Button size="large" color="primary" variant="contained" component={ProductsLink }
                            style={{ marginBottom:15, marginLeft: 'auto',}}  >
                                View Inventory</Button><br />
                        </CardActions>
                </Card>
            </Slide>
            </Grid></Grid></div>) ;  
    }
}