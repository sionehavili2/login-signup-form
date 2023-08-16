import {useState, useEffect} from 'react' //UseState is like data members. UseEffect: whenever componenets render to update changes it triggers
import axios from 'axios'; //easy way to GET and POST data
import {useNavigate} from 'react-router-dom' //use to navigate to a different page

export default function Login(){ //Login component

    //State
    const[usernameKeyVal, setUsernameKeyVal] = useState({username: ""});
    const [loggedInStatus , setLoggedInStatus] = useState("false");
    
    //prepare object
    const navigate = useNavigate();

    //Use Effect


    //Code
    function handleSubmit(e)
    {
        e.preventDefault();

        axios.post("http://localhost:4000/login", usernameKeyVal).then((res) => //If good response then run this
        { 
            console.log("The express server response is: " + JSON.stringify(res.data)); // store this key in the browser's local storage

            localStorage.setItem("loggedIn",res.data.loggedIn)
            setLoggedInStatus(res.data.loggedIn);

            if(res.data.loggedIn){
                console.log("Logged in!");
                navigate('/loggedin', {replace:true}); //if they are logged in navigate them to '/loggedin' page
            }

            }).catch((err) => { //if bad response catch and handle error
                console.log("Error, couldn't log in");
                console.log(err.message);
                localStorage.setItem("loggedIn",false);
                setLoggedInStatus("false");
        })
    }

    function handleChange(e){
        console.log("Enter handlechange function......");
        setUsernameKeyVal({...usernameKeyVal, [e.target.name]:e.target.value});
    }

    //Return HTML
    return(
        <div>
            <h4 class="p-1 text-center ">Login</h4>
            <form onSubmit = {handleSubmit}>
                <label> Username : </label>
                <input
                    type = "text"
                    name = "username"
                    id = "username"
                    onChange= {handleChange}
                />
                <br/>
                <label> Password : </label>
                <input
                    type = "text"
                    name = "password"
                    id = "password"
                    onChange= {handleChange}
                />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}