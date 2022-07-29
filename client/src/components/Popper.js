import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";

export default function SimplePopper({edit, email}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [input, setInput] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(edit=="name"){
        axios.put("http://localhost:4200/modifyclient",{email: email,name: input})
        .then(res=>{
            console.log("Editado con exito")
        })
    }
    if(edit=="surname"){
        axios.put("http://localhost:4200/modifyclient",{email: email,surname: input})
        .then(res=>{
            console.log("Editado con exito")
        })
    }
    if(edit=="email"){
        axios.put("http://localhost:4200/modifyclient",{email: input})
        .then(res=>{
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
            <input type="text"></input>
            <button type='submit' onClick={handleSubmit}>Actualizar</button>
          </form>
        </Box>
      </Popper>
    </div>
  );
}
