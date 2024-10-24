import Nav from "./Nav";

function Header() {
  
    return (
      <header>
        <div className="logo">
            <img src="/images/dino.jpg" alt="Dino Logo" />
            <h3>Matt Morgan</h3>
        </div>
        
  
        <Nav />
      </header>
    )
  }

  export default Header;