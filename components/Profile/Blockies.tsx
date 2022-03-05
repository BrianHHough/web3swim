import { Skeleton } from "antd";
import Blockies from "react-blockies";
import { useMoralis } from "react-moralis";
import "./Blockies.module.css";

function Blockie(props: any): JSX.Element[] | any {
    const { account, user } = useMoralis();
    const userAd = user?.get("ethAddress");
    const userUn = user?.get("username");

    // if (!props.currentWallet && !account) return <Skeleton.Avatar active size={35} />;
    if (user) {
    return (
        <Blockies
            seed={props.currentWallet ? 
                userAd.toLowerCase()
                :
                userUn.toLowerCase()
                }
            // className="blockieStyle"
            {...props}
        >
        </Blockies>
    )}
    else {(
        <div></div>
    )}
}

export default Blockie
