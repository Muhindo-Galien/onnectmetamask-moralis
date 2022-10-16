import React from "react"
import { useMoralis } from "react-moralis"
import { useEffect } from "react"

const ManualHeader = () => {
    const { enableWeb3, account, isWeb3Enabled, deactivateWeb3, Moralis,  isWeb3EnableLoading } 
       =
        useMoralis()
    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined" && window.localStorage.getItem("connected")) {
            enableWeb3()
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null Account found")
            }
        })
    }, [])

    return (
        <div>
            {account ? (
                <div>
                    conneted to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected")
                            // window.localStorage.setItem("connected", "walletconnect")
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    connect
                </button>
            )}
        </div>
    )
}

export default ManualHeader
