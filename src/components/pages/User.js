import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const User = () => {
    const [user, setUser] = useState(null)

    const { id } = useParams();

    // useEffect(()=>{

    //     axios.get('https://jsonplaceholder.typicode.com/users/'+id).then(response=>setUser(response.data))
    //   },[id])

    // console.log(user);

    useEffect(()=>{
    const getUser = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(response.data);            
            }catch (err) {
                console.error(err)
            }
        };
        getUser();
    },[id]);

    if(!user){
        return <div>...Loading</div>
    }
    
  return (
    <div>
        <Typography variant="h3" sx={{textAlign:"center", color:"red"}} >Displaying the user details</Typography>
        <h5>{user.name}</h5>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>address: {user.address.city}</p>            
    </div>
  )
}

export default User