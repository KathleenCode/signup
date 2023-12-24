import { useLoaderData, useNavigate } from "react-router-dom";

export default function UserDetails() {
  const navigate = useNavigate()

    // const user = useLoaderData().data;
    const { data } = useLoaderData();
    console.log("data", data);

  return (
    <>
    <button onClick={() => navigate(-1)}>Back</button>
     <div style={{ textAlign: "center"}}>
      <img src={ data.avatar } alt={ data.first_name } />
      <p>{data.first_name} {data.last_name}</p>
      <p>email: {data.email}</p>
     </div>
    </>
  );
}
