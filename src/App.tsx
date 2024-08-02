import { lazy, Suspense } from 'react'
import './App.css'
import { Loader } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import { ROUTER } from './constant/router'


const Home = lazy(()=>import("./pages/home/home"))
const AddProduct = lazy(()=>import("./pages/addproduct/addproduct"))
const Search = lazy(()=>import("./pages/search/search"))




function App() {

  

  

  return (
    <Suspense fallback={
      <Loader color="blue" />
    }>
      <Routes>
        <Route path={ROUTER.HOME} element={<Home/>}/>
        <Route path={ROUTER.ADDPRODUCT} element={<AddProduct/>}/>
        <Route path={ROUTER.SEARCH} element={<Search/>}/>
      </Routes>

    </Suspense>
  )
}

export default App
