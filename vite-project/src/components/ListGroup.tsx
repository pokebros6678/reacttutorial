import { useState } from "react";



function ListGroup(){
    let items = [
        'Heather',
        'Jenny',
        'Patrick',
        'Tasha'
    ];

    const [selectedIndex, setSelectedIndex]= useState(-1);  

    return (
        <>
            <h1>Test</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item} 
                        onClick={() => { setSelectedIndex(index); }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup