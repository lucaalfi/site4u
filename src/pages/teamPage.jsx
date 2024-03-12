import Footer from '../Footer.jsx'
import Card from '../MemberCard/MemberCard.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import Banner from '../Banner/Banner.jsx'
import styles from "./teamPage.module.css"

function TeamPage() {
    const members = [];
    for (let i = 0; i < 52; i++) {
        members.push(<Card name={"Lorem Ipsum"+i} 
        imageSrc="https://placehold.co/600x600"   description={"Lorem Ipsum"+i} 
        position={"Position"+i} 
        linkedIn= "https://placehold.co/600x600"
        instagram= "https://placehold.co/600x600"
        key={"membrCard"+i}
        />);
    }
   
   
   
    return(
      <>
        <NavBar activePage="team"/>
        <Banner title="Our Team" subtitle="Meet Our Astounding Team" imgSubtitle="Our team consists of hardworking individuals with various amount of experience. Each member is required to meet a minimum expectation to ensure quality. If you are interested in joining the team, please contact us." rounded={true}/>
        <div className={styles.teamContents}>
            {members}
        </div>
  
        <Footer/>
      </>
    );
  }
  
  export default TeamPage