import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"

import MainLayout from "./layout/MainLayout"
import Home from "./Components/Home"
import Project from "./Components/Project"
import Team from "./Components/Team"
import Jobs from "./Components/Jobs"
import Events from "./Components/Events"
import Documents from "./Components/Documents"
import Contacts from "./Components/Contacts"
import Account from "./Components/Account"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='/'
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
            <Route
              path='account'
              element={<Account />}
            ></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
