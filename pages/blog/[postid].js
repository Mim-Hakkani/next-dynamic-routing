import { useState } from "react";


const Singlepost = ({res}) => {

     return (
         <div>
             <h1> Single post is here in Eshan Marketing </h1>
             <h3>{res.title}</h3>
             <p>{res.body}</p>
 
         </div>
     );
 };
 
 export default Singlepost;

export async function getStaticPaths() {
 const todos = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res =await todos.json();


 //colect the id for single data by using paths 

    const paths =res.map(data=>{
        return {
            params: { 
                postid : data?.id.toString()
            }
        }
    })



    return {
      paths,
      fallback: true // false or 'blocking'
    };


  }





  export async function getStaticProps(context){

    const id = context.params.postid

    const todos = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const res =await todos.json();
    
    if(!res){
        return{
            notFound: true,
        }
    }

  
    
    
        return {
            props: {
                res
            }
        }
    }

