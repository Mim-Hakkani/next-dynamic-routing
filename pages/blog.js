import Link from "next/link";


const blog = ({res}) => {

    return (
        <div>

            {res.slice(0,5).map(data =><div key={data.id} style={{border:'1px solid grey',padding:'0px 50px',width:'50%',margin:'10px auto'}}>
         
                <h5 >Title : {data.title}</h5>
                <p >{data.body}</p>
                <button> <Link href={`/blog/${data?.id}`}>Learn More </Link></button>
            </div>
            )}
            
        </div>
    );
};

export default blog;


export async function getStaticProps(){

const todos = await fetch('https://jsonplaceholder.typicode.com/posts');
const res =await todos.json();





// if(!res){
//     return{
//         notFound: true,
//     }
// }

// ************* jodi data na pai taile redirects or non found page a dekha booo  ****************

// if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//         // statusCode: 301
//       },
//     }
//   }


    return {
        props: {
            res
        }
    }
}