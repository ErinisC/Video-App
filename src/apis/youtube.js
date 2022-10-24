import axios from 'axios';

const KEY = "AIzaSyBz3z5ugXsItx1R1djAIkCiM2VP13UEoiM";


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

// key=API_KEY