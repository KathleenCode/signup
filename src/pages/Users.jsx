import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
  const { data } = useLoaderData();

  console.log("users", data);

  return (
    <>
    <div style={{display: "flex", gap: "1rem", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      {
       data.map((user) => (
         <Link 
         key={user.id} 
         to={ user.id.toString()}
          style={{ textDecoration: "none", color: "#D7E5CA", backgroundColor: "#4B527E", 
          width: "50%", padding: "1rem 1.5rem", borderRadius: "0.5rem", border: "1px solid #FF9EAA"}}
          className="link">
           <p>Name of user: { user.first_name } { user.last_name }</p>
           <p>Email of user: { user.email }</p>
         </Link>
       ))
       }
      </div>
    </>
  )
}
