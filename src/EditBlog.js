import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const EditBlog = () => {

  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {

    if(blog !== null) {

      setTitle(blog.title);
      setBody(blog.body);
      setAuthor(blog.author);
    }
  }, [blog])


  const editBlog = (e) => {

    e.preventDefault();

    setSaving(true);

    const blogEdited = { title, body, author, id}

    blogEdited.id = blog.id;

    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blogEdited)
    }).then(() => {
      history.push(`/blogs/${blog.id}`);
    })

    setSaving(false);
  }
  
  return (  
    <div className="edit">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog  &&
        (<div>
          <h2>Edit blog { blog.title }</h2>

          <form>

          <label>Title:</label>
          <input 
            type="text"
            required
            defaultValue={ title }
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Blog body:</label>
          <textarea
            cols="30"
            rows="10"
            required
            defaultValue= { body }
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <label>Blog author:</label>
          <select
            defaultValue=""
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Renan">Renan</option>
            <option value="Carlos">Carlos</option>
          </select>

          { !saving && <button onClick={editBlog}>Save blog</button> }
        { saving && <button disabled>Saving blog...</button> }

          </form>
        </div>)
      }
    </div>
  );
}
 
export default EditBlog;