import React from 'react';
import './index.css';


function index(props) {
    const { data, remove } = props;
    console.log(data);
    return (
        <ul className="list">
            {data.map(item => {
                return (
                <li className="item" key={item.id}>
                    <img src={item.img} />
                    <div className="btn">
                        <button onClick={() => remove(item.id)}>remove</button>
                    </div>
                    <span className="title">{item.title}</span>
                </li>)
            })}
        </ul>

    )
}
export default index
