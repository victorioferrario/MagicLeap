import * as React from "react";
import { DataContext, DataProvider } from "../shared/Context";

import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';

import { ProductRow } from "./ProductRow";

import { ProductDetail } from "./ProductDetail";

import { IProduct } from "../../models/IProduct";

import Slide from '@material-ui/core/Slide';

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
export interface IPageState {
    open:boolean;
    product:IProduct | any;
}
export function Transition(props: any) {
    return <Slide direction="up" {...props} />;
}
export class Products extends React.Component <{}, IPageState> {
    constructor(props:any, state:IPageState){
        super(props);
        this.state = {
            open :  false,
            product: {
                class:"none",
                id: "item_01",
                manufacturer:"none",
                name : "none",  
                techspecs: undefined                
            }
        }
        this.handleChildClick = this.handleChildClick.bind(this);
  }
  public onClick = (arg:IProduct) => {    
    this.setState({ open: true, product :arg });
  };
  public handleChildClick(arg:IProduct){      
      this.setState({ open: true, product :arg });
  }
  public handleClose = () => {
    this.setState({ open: false });
  };
  public render() {
    return (
      <React.Fragment>
          <div style={{ flexGrow: 1,  padding: 20 }}>
          <Grid container={true}  spacing={24}>  
            <Grid item={true} xs={12}>
            <Slide direction="left" in={true}>    
                <h2 style={{marginBottom:0}}>Products</h2> 
             </Slide>          
            </Grid>
            <DataProvider>
            <DataContext.Consumer>
                {value => this.buildGrid(value)}
            </DataContext.Consumer>
            </DataProvider>
         </Grid>
         <Dialog fullScreen={true}
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}>
            <AppBar style={{ background: '#2196f3'}}>
                <Toolbar>                            
                    <Typography variant="title" color="inherit" style={{ flex: 1}}>
                        Product Viewer</Typography>
                    <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <section style={{
                backgroundColor:'#FFFFFF', paddingTop:45}}>                      
                <ProductDetail product={this.state.product}/>                    
            </section>
        </Dialog>
        </div>
      </React.Fragment>
    );
  }
  private buildGrid(value:any){
      return (<React.Fragment>{this.buildRows(value)}</React.Fragment>)
  }
  private buildRows(value: any) {
    return value.products.map((product: IProduct) => (
        <Grid item={true} xs={12} sm={6} md={6} lg={4} key={product.id + "Grid"} > 
            <Slide direction="up" in={true}>    
                <ProductRow key={product.id} click={this.onClick} product={product}/>
            </Slide>
        </Grid>
    ));
  }
}