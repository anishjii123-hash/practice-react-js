import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './componant/Header';
import Footer from './componant/Footer';
import SideBar from './componant/SideBar';
import Form from './componant/Form';
import CreateList from './componant/CreateList';
import PostList from './componant/PostList';
import { useState } from 'react';
import PostListProvider from './componant/Store/Post-list-store';

function App() {
   const [selectTab, setSelectTab]=useState("Home");

  return (
    <PostListProvider>
    <>
    <div className="app">
     <SideBar selectTab = {selectTab}  setSelectTab={setSelectTab}/>
     <div className='cointainer'>
    <Headers/>
    {selectTab === "Home"?(<PostList/>):(<Form/>)}
    <Footer/>
    </div>
    </div>
    </>
    </PostListProvider>
  )
}

export default App
