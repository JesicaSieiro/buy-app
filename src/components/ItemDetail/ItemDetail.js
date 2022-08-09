import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState , useContext } from 'react';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
 /*  maxWidth: '100%',
  maxHeight: '100%', */
});


function ItemDetail({titulo, price, imagen}){

    return(
        <div>
            
        <Grid container spacing={2} className="container_detail">
            <Grid item xs={4}>
                <Img alt="complex" src={`../${imagen}`}  className="img_detail"/>
            </Grid>
            <Grid item xs={4} className="txt_detail" >
                
                   <h2>{titulo}</h2> 
            
                   <h3>${price}</h3> 
                  {/*  <ItemCount  stok={producto.stok} initial={1}></ItemCount> */}
                
                   
            </Grid>
        
        </Grid>
        </div>
    )
}
export default ItemDetail