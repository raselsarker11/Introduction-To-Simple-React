
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


// bookmarks gulo k distracturing koray nibo.
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className="md:w-1/2 bg-gray-300 ml-4 mt-2 pt-2">
            <div className="text-3xl">
                 <h1>Total Reading time: {readingTime} min</h1>
            </div>
            <h1 className='text-3xl text-center'>Bookmarks blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => 
                <Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark}>
                </Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks : PropTypes.array
    readingTime: PropTypes.number
}

export default Bookmarks;