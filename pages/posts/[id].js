import React from 'react'

const PostDetails = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const post = await res.json();

//   return{
//     props:{
//       post,
//     }
//   }
// }


// Using getStaticPaths() // build time 

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/`
  );

  const posts = await res.json();

  const paths = posts.map(post => {
    return{
      params : {id: post.id.toString() },
    }
  })

  return{
    paths: paths,
    fallback: false // we have 100 html pages this app. If localhost:3000/post/1000000 return request; fallback: false return 404 page.
  };


};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const post = await res.json();

  return{
    props: {
      post,
    },
  };
};

export default PostDetails
