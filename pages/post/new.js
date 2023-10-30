import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout/AppLayout";

export default function NewPost() {
    return <div><h1>This is new</h1></div>;
  }
  NewPost.getLayout=function getLayout(page,pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>
  }

  export const getServerSideProps =withPageAuthRequired(()=>{
    return{
      props :{ }
    }
  })