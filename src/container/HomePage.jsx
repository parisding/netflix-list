import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { initialize, addToMyList, removeFromMyList } from '../redux/action_creator'
import List from '../components/List';
// import Recommendations from '../components/Recommendations';
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
        <div style={{backgroundColor:'black'}}>
            <header className="nav-bar">
                <img src="../download.png" alt="logo"/>
            </header>
            <main >
                <article>
                    <h2 style={{color:'azure'}}>My List</h2>
                    <List data={list.mylist} btn={'remove'} handler={removeFromMyList}/>
                </article>
                <article>
                    <h2 style={{color:'azure'}}>Recommendation</h2>
                    <List data={list.recommendations} btn={'add'} handler={addToMyList}/>
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
