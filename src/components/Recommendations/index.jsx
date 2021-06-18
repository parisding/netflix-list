import React from 'react';
import './index.css';

function index(props) {
    const { data, add } = props;
    console.log(1, data)
    return (

        <ul className="list" >
            {data.map(item => {
                return (<li className="item" key={item.id}>
                    <img src={item.img} />
                    <div className="btn">
                        <button onClick={() => add(item.id)}>add</button>
                    </div>
                    <span className="title">{item.title}</span>
                </li>)
            })}
        </ul>

    )
}

export default index;
