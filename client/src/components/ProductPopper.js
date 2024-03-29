import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";

export default function ProductPopper({edit, idprod, setFlag}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [input, setInput] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleChange = (e)=>{
    e.preventDefault();
    setInput(e.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(edit=="name"){
        axios.put(`http://localhost:4200/modifypaint?id=${idprod}`,{name: input})
        .then(res=>{
            setFlag(prevFlag=>!prevFlag)
            console.log("Editado con exito")
        })
    }
    if(edit=="color"){
        axios.put(`http://localhost:4200/modifypaint?id=${idprod}`,{color: input})
        .then(res=>{
            setFlag(prevFlag=>!prevFlag)
            console.log("Editado con exito")
        })
    }
    if(edit=="price"){
        axios.put(`http://localhost:4200/modifypaint?id=${idprod}`,{price: input})
        .then(res=>{
            setFlag(prevFlag=>!prevFlag)
            console.log("Editado con exito")
        })
    }
    if(edit=="stock"){
        axios.put(`http://localhost:4200/modifypaint?id=${idprod}`,{stock: input})
        .then(res=>{
            setFlag(prevFlag=>!prevFlag)
            console.log("Editado con exito")
        })
    }
    if(edit=="sku"){
        axios.put(`http://localhost:4200/modifypaint?id=${idprod}`,{sku: input})
        .then(res=>{
            setFlag(prevFlag=>!prevFlag)
            console.log("Editado con exito")
        })
    }
    
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        <EditIcon/>
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          <form>
            <input type="text" onChange={(e)=>handleChange(e)}></input>
            <button type='submit' onClick={handleSubmit}>Actualizar</button>
          </form>
        </Box>
      </Popper>
    </div>
  );
}
