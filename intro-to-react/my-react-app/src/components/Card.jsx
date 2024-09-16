import profilePic from '../assets/profile-pic.png'

function Card(){
    return(
        <div className="card">
            <img className="cardImg" src={profilePic} alt="profile picture"></img>
            <h2 class="cardTitle">Tobenna Okoli</h2>
            <p className="cardText">I am a student and UNC and I like to code.</p>
        </div>
    );
}

export default Card