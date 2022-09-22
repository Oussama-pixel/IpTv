import React from 'react'
import "./contactUs.scss"

export default function ContactUs() {
  return (
    <div className='contactus' id='contact-us'>
        <div className="contact-info">
            <div className="contactus-header">
                <h2>
                    Get in touch with us:
                </h2>
                <p>
                    If you need help regarding your subscription or you want to try out our service for free. Contact us using the following options:
                </p>
            </div>
            <div className="contactus-info">    
                <div>
                    <h3>
                        Whatsapp chat: 
                    </h3>
                    <p>
                        Contact us on the WhatsApp Number: +1 (431) 404-4153
                    </p>
                </div>
                <div>
                    <h3>
                        Email: 
                    </h3>
                    <p>
                        Contact us on the Email: Contact@ipmivo.com 
                    </p>
                </div>
                <div className="about-trial">
                    <h3>
                        About the free trial request:
                    </h3>
                    <p>
                        The free trial can be sent in between 1hour to 12hours, our service is customizable so feel free to tell us in the message which countries you want first on the channel list, and if you want adult content disabled because it’s activated by default
                    </p>
                </div>
            </div>
        </div>
        <div className="contact-img">
            <img src="/images/contactUsImgs/img2.png" alt="" />
        </div>
    </div>
  )
}
