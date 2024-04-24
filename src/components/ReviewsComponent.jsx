// import React, { useEffect, useState } from 'react';

// const PostsComponent = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         // Fetch posts from Facebook Graph API
//         const response = await fetch('https://graph.facebook.com/7067318120056838/feed?access_token=EAAVOYH5pqvUBO5WqIMpH6tP6Yqgq9SnU9LVkZAG2ohYAjKSEmYYIHM5UiVIQi4BWn5LWKuu1eIdWVi09nHpy0TqIHeNvA82YrTit1LabTZAISuC6RMCyFZB6pNgxtwwW6xQUWECWxl9sn2FLc35bne6k3bGhngYj6XSdEodVB43IObK4jsS00cEEiZB38StSAjTXf9ZCGxv93s3x6bat4B2WeO1w4DJldD5ojNnwZAm2AiuReE14kZD');
//         const data = await response.json();
//         console.log(data)
//         setPosts(data.data); // Assuming posts are in the data array
        
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h2>My Facebook Posts</h2>
//       <ul>
//         {posts.map((post, index) => (
//           <li key={index}>
//             <p>{post.message}</p>
//             {/* Add more details you want to display */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostsComponent;
