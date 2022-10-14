import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [userName, setUserName] = useState('Renan');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect ran');
    console.log(userName);
  }, [userName]); //If no parameter "[]" it will be run once, at the beginning. In this case it will run every time "useName" changes.

  return ( 

    <div className="home">
     <BlogList blogs={ blogs } title={ "All blogs!" } handleDelete={ handleDelete }></BlogList>
    <button onClick={() => setUserName('Carlos') }>Change the name</button>
    <p>{userName}</p>
    </div>
  );
}
 
export default Home;