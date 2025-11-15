import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function NotePage() {
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("");

    const onSubmit = async (e: any) => {
        e.preventDefault(); //prevent reloading page        
        const res = await axios.post("http://localhost:3000/users",{fullName,gender})
        console.log(res);
    };

    return (
        <Container>
            <Button variant="contained">hello bro</Button>

            <form onSubmit={onSubmit}>
                <input
                    type="text" 
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
            <Typography>{fullName ||"justname"}</Typography>
            <Typography>{gender ||"justgender"}</Typography>
        </Container>
    );
}
