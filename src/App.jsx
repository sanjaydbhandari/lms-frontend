import './App.css'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Signin from './Pages/Signin'
import NotFound from './Pages/NotFound'
import {Routes,Route} from "react-router-dom"
import Contact from './Pages/Contact'
import CourseList from './Courses/CourseList'
import CourseDescription from './Courses/CourseDescription'
import RequireAuth from './Components/Auth/RequireAuth'
import CreateCourse from './Courses/CreateCourse'
import Denied from './Pages/Denied'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/courses" element={<CourseList />}></Route>
      <Route path="/course/description" element={<CourseDescription />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="denied" element={<Denied />}></Route>
      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />} >
      <Route path="/course/create" element={<CreateCourse/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
