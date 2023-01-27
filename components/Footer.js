import React from 'react'

function Footer() {
  return (
    // Here in following className I used gap-y-10 instead  of space-y-10 because the first div raises upwars little BigInt.
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs textgray-800'>
                <h5 className='font-bold'>About</h5>
                <p>How Agrim-Travel Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Agrim-Travel Plus</p>
                <p>Agrim-Travel Luxe</p>
            </div>
            <div className='space-y-4 text-xs textgray-800'>
                <h5 className='font-bold'>Community</h5>
                <p>Accessibility</p>
                <p>Not a real site</p>
                <p>Its pretty website</p>
                <p>Referrals accepted</p>
                <p>Thanks</p>
            </div>
            <div className='space-y-4 text-xs textgray-800'>
                <h5 className='font-bold'>Host</h5>
                <p>Agrim</p>
                <p>Made this</p>
                <p>Website</p>
                <p>If you like this</p>
                <p>Please like on github</p>
            </div>
            <div className='space-y-4 text-xs textgray-800'>
                <h5 className='font-bold'>Support</h5>
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p>Connect with me on</p>
                <p>Twitter</p>
                <p>Lets' goooo</p>
            </div>

        </div>
  )
}

export default Footer