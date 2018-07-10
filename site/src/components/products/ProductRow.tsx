import * as React from 'react';
import { IProduct } from '../../models';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export const styles = {
    card: {
        maxWidth: 875,
        minWidth: 200
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
};

interface IProps {
  product: IProduct;  
  click(arg:IProduct):any;
}

export class ProductRow extends React.Component <IProps, {}> {
    constructor(props:IProps){
        super(props);
    }
    public onClick = () => {        
        this.props.click(this.props.product);
    } ;       
    public render(){
        return (
            <Card style={{maxWidth: 875, minWidth: 200}}>
                    <CardHeader                   
                        title={this.props.product.name}
                        subheader={this.props.product.manufacturer} 
                    />
                    <CardMedia
                        style={{ height: 0,paddingTop: '56.25%'}}
                        image={this.props.product.image}
                        title={this.props.product.name}
                    />
                    <CardContent>                    
                        <Typography component="p" style={{minHeight:45, maxHeight:100}}>
                           Ship Class:  {this.props.product.class} <br />
                                        {this.getPrice(this.props.product.price)}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ paddingRight:20,}}>                   
                        <Button size="large" color="primary" variant="contained" 
                        style={{ marginBottom:15, marginLeft: 'auto',}}  onClick={this.onClick} >
                            View More</Button><br />
                    </CardActions>
            </Card>) ;      
    }
    private getPrice(price?:string){
            return price !== undefined ? (
                <React.Fragment>
                    <span>Price:</span> {price}
                </React.Fragment>
            ):"";
    }
}