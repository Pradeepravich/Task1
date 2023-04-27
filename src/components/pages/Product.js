import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Product = () => {

  const [product, setProduct] = useState("")
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState()
  const [items, setItems] = useState([])
//   const [totalQty, setTotalQty] = useState([])

  const productHandler = (e)=>{
    setProduct(e.target.value)
  }
  
  const qtyHandler = (e)=>{
    setQty(e.target.value)
  }

  const priceHandler = (e)=>{
    setPrice(e.target.value)
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    // console.log(product);
    setItems(prev=>[...prev,{product,qty,price}])
    // setTotalQty(prevQty=>[...prevQty,{qty}])
    setProduct("");
    setQty("");
    setPrice("");
  }

//   console.log(typeof qty);
//   console.log(totalQty);
  
    const totalQuantity = items.reduce((total, item) => total + Number(item.qty), 0)
    const totalSubTotal = items.reduce((total, item) => total + Number(item.price)*Number(item.qty), 0)

  return (
    <div className='w-100 '>
        <div className='form m-2'>
            {/* <form className='d-flex justify-content-center' onSubmit={submitHandler}>
                <input type="text" name="product" placeholder='Product' className='form-control mb-3 ws-25 rounded-0' value={product}  onChange={productHandler} />
                <input type="text" name="qty" placeholder='Quantity' className='form-control mb-3 ws-25 rounded-0' value={qty} onChange={qtyHandler} />
                <input type="text" name="price" placeholder='Price' className='form-control mb-3 ws-25 rounded-0' value={price} onChange={priceHandler} />
                <div className='mts-4'>            
                    <input type='submit' className='btn btn-success ws-25 rounded-0' value="Submit"/>
                </div>
            </form> */}

            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
              noValidate
              autoComplete="off"  onSubmit={submitHandler}
            >
              <TextField  label="Product" variant="outlined" value={product}  onChange={productHandler}  />
              <TextField  label="Quantity" variant="outlined" value={qty} onChange={qtyHandler} />
              <TextField  label="Price" variant="outlined" value={price} onChange={priceHandler} />
              <Button className='mt-2' type='submit' variant="contained">Submit</Button>
            </Box>

            <Table striped bordered hover>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Sub Total</th>
                </tr>            
                {
                    items.map(
                        values=><tr>
                                    <td>{values.product}</td>
                                    <td>{values.qty}</td>
                                    <td>{values.price}</td>
                                    <td>{Number(values.qty)*Number(values.price)}</td>
                                </tr>
                    )  
                }
                <tr>
                    <td></td>
                    <td>Total Quantity</td>
                    <td></td>
                    <td>Total Subtotal</td>
                </tr>
                <tr>
                    <td></td>
                    <td>{totalQuantity}</td>
                    <td></td>
                    <td>{totalSubTotal}</td>
                </tr>
            </Table>
        </div>     
    </div>
  )
}

export default Product