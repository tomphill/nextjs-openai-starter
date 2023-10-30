import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout/AppLayout";


export default function TokenTopUp() {
  return (
    <div>
      <h1>Token</h1>
    </div>
  );
}
 TokenTopUp.getLayout = function getLayout(page, pageProps) {
   return <AppLayout {...pageProps}>{page}</AppLayout>;
 };

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
