import {Client} from "pg";

// this is the database information
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "notemanagement",
    password: "277353",
    port: 5432,
});

// this is the database connection
client.connect().then(() => {
    console.log("Connected to database");
}).catch((e:any) => {
    console.log(e);
})

export default client;