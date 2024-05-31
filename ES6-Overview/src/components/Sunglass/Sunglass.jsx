

import './Sunglass.css'
// Sunglass ar moddahy watch k use korbo import korlam.
import Watch from '../Watch/Watch';
import { add, multiply, subtract } from '../../Utils/calculate';
// import add from '../../Utils/calculate';

const Sunglass = () => {

    const first = 55;
    const second = 65;
    const sum = add(first, second)
    const mult = multiply(first, second);
    const sub = subtract(first, second);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;