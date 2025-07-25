import React from 'react'
import Image from 'next/image'
import styles from './Login.module.css'

const page = () => {
    return (
        <div className={styles.signInContainer}>
            <Image src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo_DKBL._CB609671824_.png"
                alt="Amazon Kindle Logo"
                className={styles.logo}
                width={150}
                height={50}
            />
            <h1>Sign in</h1>
            <form>
                <label htmlFor="email">Email or mobile phone number</label>
                <input type="email" id="email" />

                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <label htmlFor='password'>Password</label>
                    <a href="#" className={styles.fp}>Forget Password</a>
                </div>

                <input type="password" id="password" />

                <button type='submit' className={styles.signInButton}>Sign in</button>
            </form>
            <p className={styles.agreement}>
                By continuing, you agree to Amazon's <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>.
            </p>

            <p className={styles.createAccount}>
                New to Amazon? <a href='/signup'>Create your Amazon account</a>
            </p>

        </div>
    )
}

export default page