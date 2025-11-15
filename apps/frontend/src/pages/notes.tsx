import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Notes() {
  const [users, setUsers] = useState([]);

  const getAll = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
    console.log(res.data);
  };

  // this is for to run the function getAll()
  useEffect(() => {
    getAll();
  }, []); // [] mean run this effect only once

  return (
    <>
      {users.map((user: any, id: number) => (
        <>
          <Box key={id}>
            <Typography variant="h4">{id}</Typography>
            <Typography variant="h4">{user.fullName}</Typography>
            <Typography variant="h4">{user.gender}</Typography>
          </Box>
        </>
      ))}
    </>
  );
}
