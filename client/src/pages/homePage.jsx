import Footer from '../Footer.jsx'
import SideBar from '../SideBar/SideBar.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import Banner from '../Banner/Banner.jsx'


import styles from "./homePage.module.css"

function HomePage() {
    return(
      <>
        <Banner title="Site4u" subtitle="We assist you with Tech 4 FREE" imgSrc="https://placehold.co/1920x1080" rounded={false} heroImg={true}/>
        <div className={styles.homeContents}>
            <h2>Who are we?</h2>
            <p>A nonprofit organization helping your startup, organization or charity grow. The COVID-19 Pandemic has introduced an array of obstacles; our mission is to bridge the gap between you and a strong digital presence.</p>

            <h2>Our Mission:</h2>
            <p>The COVID-19 Pandemic has introduced an array of obstacles for small businesses, startups and individuals passionate about innovation. Our mission is to bridge the gap between you and a strong digital presence. We prioritize speed, quality and transparency in our work, ensuring a usable and scalable product for free.</p>

            <h2>Services We Offer:</h2>
            <ul>
                <li>Free Website/Web Application.</li>
                <li>Rebuilding existing websites.</li>
                <li>Hosting Website/Web Applications</li>
                <li>Updating and keeping Website/Web Applications scalable</li>
            </ul>

            <h2>Why Us?</h2>
            <p>Finding affordable and reliable designers and developers is a remarkably tedious task. We understand that your budget can be tough due to unexpected circumstances, which is why we are offering our services for free. Our developers, designers and content creators are dedicated to creating a site perfect for you. Our objective is to make the experience easy for your corporate or personal needs.</p>

            <p className={styles.moreInfo}>For more information, <a href="#contact">contact us.</a></p>

        </div>
  
        <Footer/>
      </>
    );
  }
  
  export default HomePage