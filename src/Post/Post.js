import React from 'react';

const Post=(props)=>(
  <article  onClick="props.clicked">
    <h1>{props.title}</h1>
    <div>
     <div>{props.author}</div>
    </div>
  </article>
);


export default Post;  