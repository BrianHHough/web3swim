import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";

const ROUTE_POST_ID = "streams/[id]";

export default function Streams() {
  const router = useRouter();
  const { 
    isAuthenticated, 
    user, 
    setUserData, 
    userError, 
    isUserUpdating,
    refetchUserData,
    Moralis
  } = useMoralis();

  const navigate = (id) =>
    router.push({
      pathname: ROUTE_POST_ID,
      query: { id }
    });

    const userAd = user?.get("ethAddress");
    const currentUser = Moralis.User.current();

  return (
    <div>
        <h1>Welcome to my stream</h1>
        <h3> Your account is: {userAd}</h3>
    </div>
  );
}