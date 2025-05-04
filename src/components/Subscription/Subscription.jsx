import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import subscriptionImage from "../../assets/images/subscriptionImage.png"
import "./Subscription.scss"

const Subscription = () => {
    const [email, setEmail] = useState("")
    const onFormSubmit = (event) => {
        event.preventDefault()
        toast.success(() => {
            return <div>
                <h3>Successfully</h3>
                <p>You will get news, here: {email}</p>
            </div>
        })
        setEmail("")
    }

    return (
        <div className='container subscription__wrapper'>
            <div className="subscription__content">
                <h2 className='title'>Subscribe To Newsletter</h2>
                <p className='description'>Get free guide about smart watches daily. </p>
                <form onSubmit={onFormSubmit} className="email__wrapper">
                    <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Address' />
                    <button>Subscribe</button>
                </form>
            </div>
            <img src={subscriptionImage} alt="" />
            <ToastContainer toastStyle={{width:"350px"}}/>
        </div>
    )
}

export default Subscription