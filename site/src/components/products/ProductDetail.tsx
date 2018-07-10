import * as React from "react";
import { IProduct } from '../../models';
import { ITechspecs } from '../../models/ITechspecs';

import { YouTubeController } from "../shared/YouTubeController";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';

import Divider from "@material-ui/core/Divider";

interface IProps {
    product: IProduct;  
}
export class ProductDetail extends React.Component <IProps,{}> {
    public elementProductContent:any;
    constructor(props:IProps){
        super(props);
    }
    public componentDidMount() {        
        this.elementProductContent = document.getElementById("productDetailContent");      
    }
    public onClick = () => {        
        this.elementProductContent.scrollTo(0,0);
    };  
    public render(){
        return (
            <React.Fragment>
                <div style={{ bottom:0, flexGrow: 1, overflowY:'auto', padding: 20, position:'absolute' , top:60, left:0, right:0 }} id="productDetailContent">
                    <Grid container={true}  spacing={24}>  
                        <Grid item={true} xs={12} sm={12} md={12}>
                                <h2 style={{marginBottom:10}}>{this.props.product.name}</h2>     
                                <Divider />                   
                        </Grid>  
                        <Grid item={true} xs={12} sm={12} md={6}>                       
                            <img src={this.props.product.image} style={{ width: '100%' }} />  
                            <Typography component="p" style={{minHeight:45}}>
                            <br/>
                            {this.buildPrice(this.props.product.price)}
                            <b>Ship Class:</b>  {this.props.product.class} <br />
                            <b>Manufacturer: </b> {this.props.product.manufacturer} <br /> 
                            </Typography>
                        </Grid>
                        <Grid item={true} sm={12} md={6}>                        
                            <h3 style={{marginBottom:0, backgroundColor:"#2196f3", color:"#FFF", padding:10}}>Tech Specs</h3>
                            <div>
                                {this.buildTechSpecs(this.props.product.techspecs)}
                            </div>
                        </Grid>
                        <Grid item={true} xs={12} sm={12} md={12}>
                            <YouTubeController videoId={this.props.product.video} />
                            <br />
                            <div style={{textAlign:'right'}}>
                            <Button size="large" color="secondary" style={{ marginBottom:15, marginLeft: 'auto'}}  onClick={this.onClick} >
                                Top</Button><br /></div>
                        </Grid>
                    </Grid>
                </div>         
            </React.Fragment>
        );
    }
    private buildPrice(price?:string){
        return price !== undefined ? (
            <React.Fragment>
                <span> <b>Price:</b></span> {price}<br /> 
            </React.Fragment>
        ):"";
   }
    private buildTechSpecs(value:ITechspecs){       
       return (
           <React.Fragment>
               <Table>             
                    <TableBody>                        
                            {this.buildTechTableRow("Armament", value.armament)}
                            {this.buildTechTableRow("Communications", value.communications)}
                            {this.buildTechTableRow("Hull", value.hull)}
                            {this.buildTechTableRow("Ship Length", value.length)}
                            {this.buildTechTableRow("Max Acceleration", value.maxaccel)}                            
                            {this.buildTechTableRow("Max Atmospheric Speed", value.maxatmosphericspeed)}
                            {this.buildTechTableRow("MGLT", value.MGLT)}
                            {this.buildTechTableRow("Sensor", value.sensor)}
                            {this.buildTechTableRow("Shielding", value.shielding)}
                            {this.buildTechTableRow("Targeting", value.targeting)}                        
                    </TableBody>
                </Table>           
            </React.Fragment>);
    }
    private buildTechTableRow(label:string, value?:string){
        return value!== undefined ? (
            <TableRow>
                <TableCell >{label}</TableCell>
                <TableCell >{value}</TableCell>
            </TableRow>
        ):"";
    }
}