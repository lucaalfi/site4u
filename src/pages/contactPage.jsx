import Footer from '../Footer.jsx'
import NavBar from '../NavBar/NavBar.jsx'

import styles from "./contactPage.module.css"

function ContactPage() {

   
   
   
    return(
      <>
        <NavBar activePage="contact"/>
        <div className={styles.contactHolder}>
            <div className={styles.contactContents}>
                <div className={styles.contactCard}>
                    <h4>Want our services?</h4>
                    <h4>Contact Us!</h4>

                    <h4>Call us at: (1)-647-794-8811</h4>
                    <h4>OR</h4>
                    <h4>Email us at: contact@site4u.ca</h4>

                    <p>If you want to join us, or join our partners/sponsors, please contact us with the same information above.</p>
                </div>
            </div>
            
        </div>
        <Footer/>
      </>
    );
  }
  
  export default ContactPage