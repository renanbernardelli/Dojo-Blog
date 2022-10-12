const Home = () => {

  const handleClick = (e) => {
    console.log('hello, ninjas', e);
  }
  
  const handleClickAgain = (userName, e) => {
    console.log(`hello ${userName}`, e.target);
  }

  return ( 

    <div className="home">
      <h2>Homepage</h2>

    <button onClick={handleClick}>Click me</button>
    <button onClick={(e) => handleClickAgain('Renan', e)}>Click me again</button>
    </div>
  );
}
 
export default Home;