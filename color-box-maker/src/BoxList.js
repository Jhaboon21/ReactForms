import React, {useState} from "react";
import Box from './Box';
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const [boxes, setBoxes] = useState([]);
    const add = (boxObj) => {
        setBoxes(boxes => [...boxes, boxObj])
    };
    const remove = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    const boxComponents = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            width={box.width || 5}
            height={box.height || 5}
            handleRemove={remove}
            backgroundColor={box.backgroundColor || 'blue'}
        />
    ))

    return (
        <div>
            <p>Let's make colored boxes. Values are defaulted at 5, 5, and blue.</p>
            <NewBoxForm createBox={add} />
            {boxComponents}
        </div>
    )
}

export default BoxList;