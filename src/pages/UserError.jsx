import { useRouteError } from "react-router-dom";

export default function UserError() {

    const error = useRouteError();

  return (
    <>
    <p>PEOPLE !</p>
    <div>Something went wrong</div>
    <span>{ error.message }</span>
    </>
  );
}
