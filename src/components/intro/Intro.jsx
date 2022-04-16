import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
        <div className="left">
            <div className="imgContainer">
              <img className="me" src="assets/a.png" />
            </div>
                
            
        </div>
        <div className="right">
          
          <div className="titleContainer"  >
            <span className="title">Hi, I'm <span>Melike Tekin</span></span>
             <img className="gif" src="https://media.giphy.com/media/ObNTw8Uzwy6KQ/giphy.gif" width="50px"></img>
             
          </div>
             <div className="aboutMeContainer">
            <h3 className="aboutMe">I am a 3rd year computer engineering student at Akdeniz University. 
            I'm on my way to becoming a front-end developer.   
            I am currently learning React framework and always open to learning new things and developing new projects.</h3>
          </div>
           
        </div>
    </div>
  )
}
