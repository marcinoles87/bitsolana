import React from 'react'
import '../App.css'

function Buy() {
  return (
    <div className='buy-container'>
        <h1>How to buy</h1>
        <div className='buy-item'>
            <h1>Make Wallet</h1>
            <p>download Phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to Phantom</p>
        </div>

        <div className='buy-item'>
            <h1>Get Some $SOL</h1>
            <p>have SOL in your wallet to switch to $BITCOIN. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet</p>
        </div>

        <div className='buy-item'>
            <h1>Go to Raydium</h1>
            <p>connect to Raydium. Go to Raydium in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the $BITCOIN token address into Raydium, select $BITCOIN, and confirm. When Phantom prompts you for a wallet signature, sign.</p>
        </div>

        <div className='buy-item'>
            <h1>Switch SOL for $BITCOIN</h1>
            <p>switch SOL for $BITCOIN. We have low taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</p>
        </div>

    </div>
  )
}

export default Buy