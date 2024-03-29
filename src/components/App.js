import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



class App extends React.Component {
    // The Arrow function as being an async function
    state = { videos:[], selectedVideo: null };

    // 初始時預設 搜尋 building video 
    componentDidMount(){
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {
        console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response);
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        console.log('from the App component: ', video);
        this.setState({ selectedVideo: video })
    }

    render(){
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="six wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                 </div>
            </div>
        )
        
    }
}

export default App;