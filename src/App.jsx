import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
// import './App.css';
import RootLayout from './layouts/RootLayout';
import Home from "./pages/Home";
import Register, { registerAction } from "./pages/Register";
import Blog from "./pages/Blog";
import UsersLayout from "./layouts/UsersLayout";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";
import { loader as userData, userDetailLoader, homeLoader } from "./utils/User.util";
import UserError from "./pages/UserError";

// JSX way of routing
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <RootLayout />}>
    <Route index element={<Home />} loader={ homeLoader }/>
    <Route path="/register" element={<Register />} action={registerAction} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/users" element={<UsersLayout />} errorElement={ <UserError />}>
      <Route index element={<Users />} loader={userData}/>
      <Route path=":id" element={<UserDetails />} loader={userDetailLoader}/> 
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {

  return <RouterProvider router={ router } />
}

export default App
