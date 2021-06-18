const initState = {mylist:[], recommendations:[]};

export default function reducer(prevState = initState, action){
    const {type, payload} = action;
    switch (type){
        case 'init':
            return payload;
        case 'add':
            console.log('call add');
            const [newItem] = prevState.recommendations.filter(item => item.id === payload);
            const newMylist = [...prevState.mylist, newItem];
            const newRecommendation = prevState.recommendations.filter(item => item.id !== payload);
            return {mylist:newMylist, recommendations:newRecommendation};  
            case 'remove':
            console.log('call remove');
            const [newItem1] = prevState.mylist.filter(item => item.id === payload);
            const newRecommendation1 = [...prevState.recommendations, newItem1];
            const newMylist1 = prevState.mylist.filter(item => item.id !== payload);
            return {mylist:newMylist1, recommendations:newRecommendation1};
        default: 
            return prevState;
    }
}