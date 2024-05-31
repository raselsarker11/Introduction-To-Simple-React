
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const[bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (book) => {
    const newBookmarks = [...bookmarks, book]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) => {
    
    const newReadingTime = [...readingTime, time]
    setReadingTime(newReadingTime)
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
 

  return (
    <>      
      <div className="max-w-5xl mx-auto">
      <Header></Header>
      <div className="flex">
      <Blogs 
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
         <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

        
      </div>
    </>
  )
}

export default App
