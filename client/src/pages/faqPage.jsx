import Footer from '../Footer.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import Banner from '../Banner/Banner.jsx'
import QABlock from '../QABlock/QABlock.jsx'

import styles from "./faqPage.module.css"

function FaqPage() {

   
   
   
    return(
      <>
        <Banner title="Frequently Asked Questions" subtitle="We've got your most likely questions covered." rounded={false}/>
        <div className={styles.faqContents}>
            <QABlock question="And what if the emperor had all the great houses on his side?" answer="If they all got together maybe they would give me a little trouble."/>
            <QABlock question="But would you lose?" answer="Nah, I'd win."/>

            
            
            <QABlock question="What are some sites that you have built?" answer='We have built enough to ensure that you will love your site if you decide to go with us, check out the "Projects" page.'/>
            <QABlock question="How can we trust you?" answer="All of our services are free for use, meaning there is nothing on our behalf that could impact you negatively. You will receive all source code and rights to the result."/>
            <QABlock question="What if we need it faster?" answer="Since we consist of experienced developers, we can try to build your website ASAP if a request is put in. Contact us ASAP to get a timing estimate."/>
            <QABlock question="Can we sell this website as our own?" answer="Once the site is developed it is up to you to choose what to do with it. But we will be displaying all finished sites."/>
        </div>
  
        <Footer/>
      </>
    );
  }
  
  export default FaqPage