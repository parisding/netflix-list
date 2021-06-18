export const initialize = (data) => ({
    type: 'init',
    payload: data,
});
export const addToMyList = (id) => ({
    type: 'add',
    payload: id,
})
export const removeFromMyList = (id) => ({
    type: 'remove',
    payload: id,
})
