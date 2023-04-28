import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardDisplay from './CardDisplay';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const FormFields = () => {

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

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Product</StyledTableCell>
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Sub Total</StyledTableCell>            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {items.map((row) => (
                        <StyledTableRow >              
                        <StyledTableCell align="right">{row.product}</StyledTableCell>
                        <StyledTableCell align="right">{row.qty}</StyledTableCell>
                        <StyledTableCell align="right">{row.price}</StyledTableCell>
                        <StyledTableCell align="right">{Number(row.qty)*Number(row.price)}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                        
                        <StyledTableRow>              
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right">Total Quantity</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right">Total Subtotal</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>              
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right">{totalQuantity}</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right">{totalSubTotal}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

        <Stack direction="row" spacing={2}>
            <CardDisplay data={items} title="Data displayed: " />
        </Stack>     
    </div>
  )
}

export default FormFields