
function Header({ text}) {
  

  return (
    <header style={{backgroundColor:"rgba(0,0,0,0.4)",color:'#ff6a95'}}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}


export default Header;
