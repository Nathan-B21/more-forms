import React, {useState} from 'react';


const HookForm = props =>{

    

    const[firstName, setFirstName] = useState("");
    const[firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const[cpassword, setcPassword] = useState("");
    const[cpasswordError, setcPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First Name is required!")    
        }else if(e.target.value.length < 2){
            setFirstNameError("First Name must be 3 characters or longer!")
        }
        else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last Name is required!")    
        }else if(e.target.value.length < 2){
            setLastNameError("First Name must be 3 characters or longer!")
        }
        else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is required!")    
        }else if(e.target.value.length < 5){
            setEmailError("Email must be 5 characters or longer!")
        }
        else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is required!")    
        }else if(e.target.value.length < 8){
            setPasswordError("Password must be 8 characters or longer!")
        }
        else{
            setPasswordError("");
        }
    }

    const handlecPassword = (e) => {
        setcPassword(e.target.value);
        // if(e.target.value.length < 1){
        //     setcPasswordError("Password is required!")    
        // }else if(e.target.value.length < 8){
        //     setcPasswordError("Password must be 8 characters or longer!")
        // }
        if(e.target.value.length != password.length){
            setcPasswordError("Passwords must match!");
        }
        else if(e.target.value.length == password.length){
            setcPasswordError("");
        }
    }




    return(
        <div>
            <form>
                <div class="form-group">
                    <label for="">FirstName:</label>
                    <input onChange = {handleFirstName} type="text" class="form-control" id="firstName"></input>
                    {
                        firstNameError ?
                        <p style = {{color: 'red'}}>{firstNameError}</p> :
                        ''
                    }
                </div>
                <div class="form-group">
                    <label for="">Last Name:</label>
                    <input onChange = {handleLastName} type="text" class="form-control" id="lastName"></input>
                    {
                        lastNameError ?
                        <p style = {{color: 'red'}}>{lastNameError}</p> :
                        ''
                    }
                </div>
                <div class="form-group">
                    <label for="">Email: </label>
                    <input onChange = {handleEmail} type="email" class="form-control" id="email"></input>
                    {
                        emailError ?
                        <p style = {{color: 'red'}}>{emailError}</p> :
                        ''
                    }
                </div>
                <div class="form-group">
                    <label for="">Password: </label>
                    <input onChange = {handlePassword} type="password" class="form-control" id="password"></input>
                    {
                        passwordError ?
                        <p style = {{color: 'red'}}>{passwordError}</p> :
                        ''
                    }
                </div>
                <div class="form-group">
                    <label for="">Confirm Password: </label>
                    <input onChange = {handlecPassword} type="password" class="form-control" id="password"></input>
                    {
                        cpasswordError ?
                        <p style = {{color: 'red'}}>{cpasswordError}</p> :
                        ''
                    }
                </div>
                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
            </form>


            <div>
                <p>FirstName: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confrim Password: {cpassword}</p>
            </div>
        </div>
    )
}
export default HookForm;