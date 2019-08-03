import React from 'react';
import Axios from 'axios';

 class PostList extends React.Component{
     state={
       posts:[]
     }
     
  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => {
        const posts = res.data;
         console.log(res.data);
        this.setState({ posts });
      })
  }

  render() {
    return (
      <ul>
        { this.state.posts.map(post => <li>{post.title}</li>)}
      </ul>
    )
  }
}

export default PostList;