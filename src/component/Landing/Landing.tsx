import React from 'react'
import "../Landing/Landing.css"
const Landing = () => {
    return (
        <div className='home'>
            <section className='sect-one'>
                <h4>IP Address Tracker</h4>
                <form className='form'>
                    <input type='text' name="input-address" placeholder='Search for any IP address or domain' />
                    <button>h</button>
                </form>
            </section>
            <section className='sect-two'>
                <div>
                    <h5>IP Address</h5>
                    <h2></h2>
                </div>
                <div>
                    <h5>Location</h5>
                    <h2></h2>
                </div>
                <div>
                    <h5>Timezone</h5>
                    <h2></h2>
                </div>
                <div>
                    <h5>ISP</h5>
                    <h2></h2>
                </div>
            </section>
        </div>
    )
}

export default Landing