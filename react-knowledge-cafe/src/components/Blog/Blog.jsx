import PropTypes from 'prop-types';
import { MdBookmarks } from "react-icons/md";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    // blog api ar field gulo k distractturing korbo.
    const{title, cover, author, author_img, posted_date, hashtags, reading_time} = blog;

    return (
        <div className='mb-20 space-y-4'>
            <img src={cover} alt={`Cover picture at the title ${title}`}  />
            <div className="flex justify-between">
                <div className="flex">
                    <img className='w-14' src={author_img} alt="..."  />
                    <div className="ml-6">
                        <h4>{author}</h4> 
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="div">
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-2xl text-red-600'
                    ><MdBookmarks></MdBookmarks></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(reading_time)}
            className='text-purple-800 font-bold underline'
            >Mark as Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;