import { combineReducers } from 'redux';
 
const songsReducer = () => {
    return [
        { title: 'no scrubs', duration: '4:05'},
        { title: 'yesterday', duration: '3:05'},
        { title: 'hey jude', duration: '2:23'},
        { title: 'linking road', duration: '1:05'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});