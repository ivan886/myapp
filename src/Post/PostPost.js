import React from 'react';
import Axios from 'axios';

class PostPost extends React.Component{
 state={
     name:'',
     
 }

handleChange=event=>{
    this.setState({name:event.target.value});
}

handleSubmit = event => {
    event.preventDefault();

    const post = {
      name: this.state.name
    };  
      Axios.post('https://jsonplaceholder.typicode.com/posts',{post})
      .then(  res=>{console.log(res);
              console.log(res.data);
      }
    );
}


    render (){
       return (
               <div>
                 <form  onSubmit={this.handleSubmit}>
                    <label>Nombre</label>
                    <input  type="text" name="name" onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                 </form>
               </div>
           )
    }    
}

export default PostPost;
