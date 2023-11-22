import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.scss"

import MainLayout from "./layout/MainLayout"
import Home from "./Components/Home"
import Project from "./Components/Project"
import Team from "./Components/Team"
import Jobs from "./Components/Jobs"
import Events from "./Components/Events"
import Documents from "./Components/Documents"
import Contacts from "./Components/Contacts"
import Account from "./Components/Account"
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='/sunrise/'
            element={<MainLayout />}
          >
            <Route
              index
              element={<Home />}
            ></Route>
            <Route
              path='project'
              element={<Project />}
            ></Route>
            <Route
              path='team'
              element={<Team />}
            ></Route>
            <Route
              path='jobs'
              element={<Jobs />}
            ></Route>
            <Route
              path='events'
              element={<Events />}
            ></Route>
            <Route
              path='documents'
              element={<Documents />}
            ></Route>
            <Route
              path='contacts'
              element={<Contacts />}
            ></Route>
          </Route>
          <Route
              path='/sunrise/login'
              element={<Login />}
            ></Route>
          <Route
              path='/sunrise/account'
              element={<Account />}
            ></Route>
          <Route
              path='/sunrise/dashboard'
              element={<Dashboard />}
            ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
