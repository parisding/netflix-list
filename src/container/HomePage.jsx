import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { initialize, addToMyList, removeFromMyList } from '../redux/action_creator'
import List from '../components/List';
import Recommendations from '../components/Recommendations';
import './homePage.css';

const HomePage = (props) => {
    const {list, initialize, addToMyList, removeFromMyList} = props;
    console.log(list);
    React.useEffect(() => {
        axios({
            method:'GET',
            url:"https://60c91bc47dafc90017ffc23d.mockapi.io/api/v1/movies",
            }).then(result => {
                initialize(result.data);
            });
    }, []);
    return (
        <div>
            <header className="nav-bar">
                <img src="../download.png" alt="logo"/>
            </header>
            <main>
                <article>
                    <h2>My List</h2>
                    <List data={list.mylist} remove={removeFromMyList}/>
                </article>
                <article>
                    <h2>Recommendation</h2>
                    <Recommendations data={list.recommendations} add={addToMyList}/>
                </article>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({list:state});
const mapDispatchToProps = {
    initialize,
    addToMyList,
    removeFromMyList,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
