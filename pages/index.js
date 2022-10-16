import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { useMoralis } from "react-moralis"

const supportedChains = ["31337", "5"]

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <div className="">
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
    
                <Header />
            
            <div className="max-w-3xl mx-auto">
                {isWeb3Enabled ? (
                    <div>
                        {supportedChains.includes(parseInt(chainId).toString()) ? (
                            <div className="flex flex-row">
                                <LotteryEntrance />
                            </div>
                        ) : (
                            <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
                        )}
                    </div>
                ) : (
                    <div>Please connect to a Wallet</div>
                )}
            </div>
        </div>
    )
}
