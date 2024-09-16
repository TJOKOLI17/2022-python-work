// import img

function ProfilePic(){
    const imgUrl = './src/assets/profile-pic.png'
    const styles = {
        width: "200px",
    }

    const handleClick = (e) => {e.target.style.display = "none"};

    
    return(
        <img style={styles} 
             onClick={(e) => handleClick(e)}
             src={imgUrl} 
             alt=""/>
    );
}

export default ProfilePic