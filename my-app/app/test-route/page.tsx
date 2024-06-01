import {auth} from "@/auth";
import WhoAmIServerAction from "@/app/test-route/WhoAmIServerAction";
import WhoAmIAPI from "@/app/test-route/WhoAmIAPI";
import WhoAmIRSC from "@/app/test-route/WhoAmIRSC";

export default async function TestRoute() {
    const session = await auth();

    async function onGetUserAction() {
        "use server";
        const session = await auth();
        console.log("Session: ", session);
        return session?.user?.name ?? null;
    }

    return (
        <main>
            <h1 className="text-3xl font-bold">Test Route</h1>
            <div>User: {session?.user?.name}</div>
            <WhoAmIServerAction onGetUserAction={onGetUserAction}/>
            <WhoAmIAPI/>
            <WhoAmIRSC/>
        </main>
    );
};
