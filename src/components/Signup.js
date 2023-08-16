import {useState, useEffect} from 'react' //UseState is like data members. UseEffect: whenever componenets render to update changes it triggers
import axios from 'axios'; //easy way to GET and POST data
import {useNavigate} from 'react-router-dom' //use to navigate to a different page
import "bootstrap/dist/css/bootstrap.css";

const SignupComponent = () => 
{
  const [formData, setFormData] = useState(
  {
    Username: '',
    Password: '',
    UserType: '',
  });

  const handleChange = (e) => 
  {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value,}));
  };
  
  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    try {const response = await axios.post("http://localhost:4000/Signup", formData);} 
    catch (error) {console.error('Error signing up:', error);}
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="Username"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </div>
         <label class="pe-2">User Type : </label>

            <input type="radio" id="UserType" name="UserType" value="Customer" onChange={handleChange}></input>
            <label class="pe-3 px-1" for="Customer">Customer</label>

            <input type="radio" id="UserType" name="UserType" value="Employee" onChange={handleChange}></input>
            <label class="pe-3 px-1" for="Employee">Employee</label>

            <input type="radio" id="UserType" name="UserType" value="Admin" onChange={handleChange}></input>
            <label class="pe-3 px-1" for="Admin">Admin</label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupComponent;

