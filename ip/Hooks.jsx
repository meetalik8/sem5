import { useState } from "react";
export default function LoginU() {
    const [userName, setUserName] = useState("Meetali");
    const [email, setEmail] = useState("meetali@email.com");
    const [message, setMessage] = useState ("This is the message");

   const handleUsername= (e) => {
    setUserName(e.target.value);
    }
    const handleEmail= (e) => {
    setEmail(e.target.value);
    }
    const handleMessage= (e) => {
    setMessage(e.target.value);
    }

    return(
        <div className="form">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={userName} onChange={handleUsername} />
            <br />
            <label htmlFor="pass">Password: </label>
            <input type="text" name="pass" id="pass" value={email} onChange={handleEmail} />
            <br />
            <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={handleMessage} />
            <div className="display">
                <h3>Username : {userName} <br /> Email: {email}</h3>
                <p>Message : {message} </p>
            </div>

        </div>
    )
}
