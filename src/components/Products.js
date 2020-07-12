import React from 'react';
import {Route, Link} from 'react-router-dom';
import Product from './Product';

const Products =  ({ match }) => {
    const productsData = [
        {
          id: 1,
          name: 'NIKE Liteforce Blue Sneakers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
          status: 'Available'
        
        },
        {
          id: 2,
          name: 'Stylised Flip Flops and Slippers',
          description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
          status: 'Out of Stock'
        
        },
        {
          id: 3,
          name: 'ADIDAS Adispree Running Shoes',
          description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
          status: 'Available'
        },
        {
          id: 4,
          name: 'ADIDAS Mid Sneakers',
          description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
          status: 'Out of Stock'
        },
        
        ];

        /* Create an array of `<li>` items for each product */
        var linkList = productsData.map( (product) => {
            return(
                <li key={product.id}>
                    <Link to={`${match.url}/${product.id}`}>
                        {product.name}
                    </Link>
                </li>
            )

        })

        return(
            <div style={{display:"flex"}}>
                <div style={{backgroundColor:"#F0F0F0",padding:"15px 10px",marginLeft:"10px", width:"30%"}}>
                    <h3> Products</h3>
                    <ul> {linkList} </ul>
                </div>
              

                <Route path={`${match.url}/:productId`}
                       render={ (props) => <Product data= {productsData} {...props} />}/>
                <Route exact path={match.url}
                    render={() => (
                        <div  style={{textAlign:"center",width:"70%"}}>Please select a product.</div>
                    )}
                />
            </div>
        )
    }
  
  export default Products;