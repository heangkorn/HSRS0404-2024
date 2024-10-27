function Header(){
return(

  <nav className='container'> 
  <img src={logo} alt="logo" className='logo'/>
  <ul>
      <li>Home</li>
      <li>Service</li>
      <li>About</li>
      <li><button className='btn'>Contact</button></li>
    </ul>
 </nav>

);
}
export default Header 