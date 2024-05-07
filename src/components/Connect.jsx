import React, { useEffect } from 'react'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'

const Connect = () => {
    const address = useAddress();
    useEffect(() => {
        if(address)
         {
            document.querySelector('#walletAddressInput').value = address;;
         }
        if(!address)
         {
            // document.querySelector('#addressDisplay').innerHTML = "";
         }
    }, [address] );
    return (
    <div>
    <div> 
        <ConnectWallet
            modalTitle='Verse_Connect'
            showThirdwebBranding= {false}
            welcomeScreen={{
                  title : "Your gateway to true and transparent social media",
            }}
            className='custom_Connect_Wallet'
        />
    </div>
    <div id='addressDisplay'></div>
    </div>
  )
}

export default Connect