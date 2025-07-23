import React from 'react'
import Image from 'next/image'
import styles from './Signup.module.css'

const page = () => {
    return (
        <div className={styles.createAccountContainer}>
            <Image src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo_DKBL._CB609671824_.png"
                alt="Amazon Kindle Logo"
                className={styles.logo}
                width={150}
                height={50}
            />
            <h1>Create Account</h1>
            <form>
                <label htmlFor="name">Your name</label>
                <input type="name" id="name" placeholder='First and last name' />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder='At least 6 characters' />
                <p className={styles.passwordInfo}>Passwords must be atleast 6 characters.</p>

                <label htmlFor="password-again">Re-enter Password</label>
                <input type="password" id="password-again" placeholder='At least 6 characters' />

                <button type='submit' className={styles.createAccountButton}>Create your Amazon account</button>
            </form>

            <p className={styles.agreement}>
                By clicking "Create your Amazon account", you agree to the <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088">Amazon Conditions of Use</a>, the <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201014950"> Kindle Store Terms of Use</a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496"> Amazon’s Privacy Notice</a>.
            </p>

            <p className='styles.signin'>Already have an account? <a href="/login">Sign in</a>
            </p>
        </div>
    )
}

export default page