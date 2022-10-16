import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-3 md:p-5 border-b-2 flex flex-row items-center">
            <h1 className="px-4 font-bold text-3xl"> Decentralized Lottery</h1>
            <div className="ml-auto  px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
