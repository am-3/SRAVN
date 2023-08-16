import Error from "./components/NotFound"
import Home from "./components/Home";
import HomeLayout from './Layouts/HomeLayout'
import About from "./components/About";
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import Inventory from './components/Inventory'
import Contact from "./components/Contact";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import ManageLayout from "./Layouts/ManageLayout";
import MemberLayout from "./Layouts/MemberLayout";
import Members from "./components/Members";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/account' element={<ManageLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="members" element={<MemberLayout/>}>
          <Route index element={<Members/>}/>
        </Route>
        <Route path="inventory" element={<Inventory />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App
