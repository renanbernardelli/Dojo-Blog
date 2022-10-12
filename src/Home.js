import { useState } from "react";

const Home = () => {

  const [userName, setUserName] = useState('Renan');
  const [age, setAge] = useState(100);

  const handleClick = () => {
    setUserName('Carlos');
    setAge(105);
  }
  
  // const handleClickAgain = (userName, e) => {
  //   console.log(`hello ${userName}`, e.target);
  // }

  return ( 

    <div className="home">
      <h2>Homepage</h2>

      <p>{userName} is {age} years old</p>

      <button onClick={handleClick}>Click me</button>
      {/* <button onClick={(e) => handleClickAgain('Renan', e)}>Click me again</button> */}
    </div>
  );
}
 
export default Home;