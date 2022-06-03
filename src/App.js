import './App.css';

const logo = require('./Ellipse 16.png')
const containerimg1 = require('./image 6.png')
const containerimg2 = require('./image 8.png')

const facebook = require('./facebook.png')
const google = require('./google id.png');
const metamask = require('./metamask.png');
const vector = require('./cross.png');
const logout = require('./logout.png');
const ring = require('./ring.png');

function App() {

  
  return (
    <>
    <div className='popup2'>
        <div className='popupcont2'>
        <h3 className='stylelog'>Log out?</h3>
        <div className='giveflex'>
            <button className='popup2but1'>Cancel</button>
            <button className='popup2but2'>Log out</button>
        </div>
        </div>
    </div>

    <div className='popup'>
    <div className='popupcont'>

    <div className='connect'>
      <h5 className='connectfont'>Connect with</h5>
      <img className='crosspopup' src={vector} alt={""}/>
      </div>
    <div className='social1'>
    <img src={google} alt={""}/>
    <p>Google ID</p>
    </div>

    <div className='social2'>
    <img src={facebook} alt={""}/>
    <p>Facebook</p>
    </div>

    <div className='social3'>
    <img src={metamask} alt={""}/>
    <p>Meta Mask</p>
    </div>

    </div>
    </div>
<div className="d2" >
<section className="d2c1">
<i className="bur fa-solid fa-bars"></i>

<h3 className="top">Games</h3>

            <span className="userimg2"><img src={logo} alt={""}/></span>
            <button className="hideearn">Earn Rewards</button>
            <button className="hideimg short">
            
                <img className="iconimg" src={ring} alt="Avatar" />
                
                </button>
            <button className="hide login">Log In</button>
            <button className="hide signup">Sign up</button>
        </section>
        <div className='ftt'>
        <h2 className="chosegaame">Let’s choose the game</h2>
       {/* cards  */}
        <div className="cardparent">
        <div className="card">
            <img className="cardimg" src={containerimg1} alt="Avatar" />
            <div className="container">
              <h3>Fishing Expert</h3> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              <button className="signup">Play</button>
            </div>
          </div>

          <div className="card">
            <img className="cardimg" src={containerimg2} alt="Avatar" />
            <div className="container">
              <h3>Axie infinity</h3> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              <button className="signup">Play</button>
             
            </div>
          </div>

          <div className="card">
            <img className="cardimg" src={containerimg1} alt="Avatar" />
            <div className="container">
              <h3>Fishing Expert</h3> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              <button className="signup">Play</button>
            </div>
          </div>

          <div className="card">
            <img className="cardimg" src={containerimg2} alt="Avatar" />
            <div className="container">
              <h3>Axie infinity</h3> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              <button className="signup">Play</button>
             
            </div>
          </div>
          
          <div className="card">
            <img className="cardimg" src={containerimg1} alt="Avatar" />
            <div className="container">
              <h3>Fishing Expert</h3> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              <button className="signup">Play</button>
            </div>
          </div>

          <div className="card">
            <img className="cardimg" src={containerimg2} alt="Avatar" />
            <div className="container">
              <h3>Axie infinity</h3> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              <button className="signup">Play</button>
             
            </div>
          </div>
          </div>
          </div>
          <div className="terms">
            <p className='ts'>By continuing you agree to the Terms of Service and Privacy Policy</p>
            <p className='ts'>of Service and Privacy Policy</p>
          </div>
</div>


{/* ///////////d1 */}


<div className="d1">
<div className='difchild'>
    <section className="s11">
    <section className="see" style={{opacity: '0', width: '10px',height: '100%',backgroundColor: 'aqua',position: 'absolute',left: '99%'}}></section>
   
        <div className="dd1user">
            <span className="hide2 userimg"><img src={logo} alt={""}/></span>
            <h4 className='hide2'>user</h4>
         <i className="cross fa-solid fa-xmark"></i>
        </div>
        
    </section>

    <section className="s1" >
        <section className="see" style={{opacity: '0', width: '10px',height: '100%',backgroundColor: 'aqua',position: 'absolute',left: '99%'}}></section>
        <div className="dd1">
            <i className="fa-solid fa-gamepad"></i>
            <h5>Games</h5>
        </div>
    </section>

    <section className="s2">
    <section className="see" style={{opacity: '0', width: '10px',height: '100%',backgroundColor: 'aqua',position: 'absolute',left: '99%'}}></section>
        <div className="dd1">
            <i className="fa-solid fa-trophy"></i>
            <h5>Tournaments</h5>
        </div>
    </section>

    <section className="s3">
    <section className="see" style={{opacity: '0', width: '10px',height: '100%',backgroundColor: 'aqua',position: 'absolute',left: '99%'}}></section>
        <div className="dd1">
            <i className="fa-solid fa-ranking-star"></i>
            <h5>Leader boards</h5>
        </div>
    </section>

    <section className="s4">
    <section className="see" style={{opacity: '0', width: '10px',height: '100%',backgroundColor: 'aqua',position: 'absolute',left: '99%'}}></section>
        <div className="dd1">
            <i className="fa-solid fa-circle-info"></i>
            <h5>Gamifly info</h5>
        </div>
    </section>

    <section style={{backgroundColor:'rgba(94, 198, 184, 0.15)',margin: '5px'}} className="s5">
    <section className="see" style={{opacity: '0', width: '10px',height: '100%',backgroundColor: 'aqua',position: 'absolute',left: '99%'}}></section>
        <div  className="dd1">
    
            <i className="fa-solid fa-cart-shopping"></i>
            <h5>Make a Purchase</h5>
        </div>
    </section>

    <section style={{backgroundColor:'rgba(94, 198, 184, 0.15)',margin: '5px'}}  className="s6">
    <section className="see" style={{opacity: '0', width: '10px',height: '100%',backgroundColor: 'aqua',position: 'absolute',left: '99%'}}></section>
        <div className="dd1">
            <i className="fa-solid fa-arrow-down-up-across-line"></i>
            <h5>Make a Transfer</h5>
        </div>
    </section>

    <section style={{backgroundColor:'rgba(94, 198, 184, 0.15)',margin: '5px'}} className="s7">
    <section className="see" style={{opacity: '0', width: '10px',height: '100%',backgroundColor: 'aqua',position: 'absolute',left: '99%'}}></section>
        <div className="dd1">
            <i className="fa-solid fa-user-group"></i>
            <h5>Invite friend</h5>
        </div>
    </section>
</div>

<div className='mobilepopup'>
<img src={logout} alt={""}/>
    <h3 className='mobilepopupstyle'>Log In</h3>
</div>
</div>
</>
  );
}

export default App;
