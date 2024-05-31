export default function Singer({ singer }) {
    console.log(singer);

    return (
        <div>
            <h1>Singer: {singer.name}</h1>
            <h5>Age: {singer.age}</h5>
        </div>
    );
}