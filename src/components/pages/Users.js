import React, {useState, useEffect} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Users = () => {

  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>setData(response.data))
  },[])
  return (
    <>
      <CssBaseline>
        <Container maxWidth="xl" sx={{bgcolor: 'grey',paddingTop : "1rem"}} >
          <Box >
          <Typography variant="h5" sx={{textAlign:"center", color:"yellow"}} >Users List Display</Typography>
            <Box sx={{width:"20%",margin:"0 auto", paddingTop : "3rem", paddingBottom :"3rem"}} >
            {
              data.map(
                        item=><div style={{textAlign:"left"}} key={item.id}>
                                <Link style={{color:"#000",textDecoration:"none"}}  to={`/User/${item.id}`}>{item.name}</Link>                                
                              </div>
                      )
            }
            </Box>
          </Box>
        </Container>
      </CssBaseline>
    </>
  )
}

export default Users