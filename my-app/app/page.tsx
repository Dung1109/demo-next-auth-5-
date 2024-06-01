import {auth} from "@/auth";
import AuthButton from "@/app/AuthButton.server";
import Link from "next/link";
import {useSession} from "next-auth/react";

export default async function Home() {
    const session = await auth();

    // const userSession = useSession();

    return (
        <main>
            <h1 className="text-3xl font-bold">Home Page</h1>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            {/*{userSession?.data?.user &&  <Link href="/test-route">Test Route</Link>}*/}
            {session?.user?.name && <Link href="/test-route">Test Route</Link>}
            <AuthButton/>
        </main>
    );
}
