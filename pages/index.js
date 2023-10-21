import Link from "next/link";
import {useUser} from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const {user} = useUser();

  console.log("USER :",  user);
  return (
    <div>
      {!!user ? (
        <>
        <div><Image src={user.picture} alt={user.name} height={50} width={50}/></div>
        <div>{user.email}</div>
          <div>all the user info</div>
          <Link href="/api/auth/logout">logout</Link>
        </>
      ) : (
        <Link href="/api/auth/login">login</Link>
      )}
    </div>
  );
}
