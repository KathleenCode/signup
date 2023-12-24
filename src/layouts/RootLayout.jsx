import { Outlet } from "react-router-dom";
import Header from "./../components/Header";

export default function RootLayout() {
  return (
    <div>
        <Header />
        <main style={{color: "#39A7FF", padding: "1rem 1rem"}}>
            <Outlet />
        </main>
    </div>
  );
}
