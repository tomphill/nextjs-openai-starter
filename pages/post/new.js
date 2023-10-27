import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function NewPost() {
    return <div><h1>This is new</h1></div>;
  }

  export const getServerSideProps =withPageAuthRequired(()=>{
    return{
      props :{ }
    }
  })