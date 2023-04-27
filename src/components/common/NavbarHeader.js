import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const NavbarHeader = () => {

// const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();  
  return (
    <div>
        <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}      
    >
        <Link href="/">Users</Link>
        <Link href="/product">Product</Link>            
    </Box>
    </div>
  )
}

export default NavbarHeader