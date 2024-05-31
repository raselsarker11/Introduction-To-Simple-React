// import React from 'react';

// class Clock extends React.Component {

//     // constructor(props) {
//     //     super(props);
//     //     this.state = {data : new Date()}
//     // }
    

//     // constructor ar poribortay shortcut.
//     state = { data: new Data()}

//     componentDidMount() {
//         this.clockTimer = setInterval(() => this.tick(), 1000)
//     } 

//     componentWillUnmount() {
//         clearInterval(this.clockTimer)
//     }

//     tick(){
//         this.setState({data : new Date});
//     }


//     render() {
//         return(
//             <h1 className="heading">
//                 <span className="text">{this.state.date.toLocaleTimeString(this.props.locale)}</span>
//             </h1>
//         )
//     }
// }

// export default Clock;
import React, { useState, useEffect } from 'react';

const Clock = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const clockTimer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(clockTimer);
        };
    }, []);

    return (
        <h1 className="heading">
            <span className="text">{date.toLocaleTimeString(props.locale)}</span>
        </h1>
    );
}

export default Clock;
