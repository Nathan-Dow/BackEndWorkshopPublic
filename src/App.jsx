import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './Profile.jsx'
import Blogs from './Blogs.jsx' 
import MyStory from './MyStory.jsx'

function App() {
  const [count, setCount] = useState(1)
  

  return (
    <Routes>
      <Route path="/myStory" element={<MyStory />} />
      <Route path="/" element={<Profile />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  )
}

export default App
