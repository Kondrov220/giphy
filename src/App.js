import './App.css';
import styled from 'styled-components';
import { Component } from 'react';


const Box = styled.div`
width: 100%;
max-width: 400px;
margin: 20px auto;
display: flex;
flex-direction: column;
gap: 16px;
`;


const Input = styled.input`
padding: 10px 14px;
border-radius: 10px;
border: 2px solid #ccc;
font-size: 16px;
transition: 0.2s;


&:focus {
border-color: #7b5cff;
outline: none;
box-shadow: 0 0 6px rgba(123, 92, 255, 0.4);
}
`;


const List = styled.ul`
background: #f8f8f8;
border-radius: 12px;
padding: 12px;
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;
`;


const ListItem = styled.li`
padding: 10px 12px;
background: white;
border-radius: 8px;
border: 1px solid #ddd;
font-size: 15px;
transition: 0.2s;


&:hover {
background: #eef0ff;
border-color: #7b5cff;
}
`;


class App extends Component {
state={
  gif: []
}

 api=()=>{
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=YHwfHcs8xzFROcGwFBJJ5kRcWwpKj7xd&q=${document.querySelector('#input').value}&limit=10`)
  .then(res => res.json())
  .then(data => {
    this.setState({ gif: data.data });
  })
 }
 
  render(){return (
   <Box>
<Input id='input' onChange={this.api}/>
<List>
  {
    this.state.gif.map((obj) => {
      return(
      <ListItem>
        <img src={obj.images.original.url}/>
      </ListItem>
      )
    })
  }
</List>
</Box>
  )}
}

export default App;
