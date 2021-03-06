import React, {Component} from 'react';
// import store from '../store';
import Lyrics from '../components/Lyrics';
import {connect} from 'react-redux'

import {searchLyrics} from '../action-creators/lyrics';

// class LyricsContainer extends Component {
//
//   constructor() {
//
//     super();
//
//     this.state = Object.assign({
//       artistQuery: '',
//       songQuery: ''
//     }, store.getState());
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleArtistInput = this.handleArtistInput.bind(this);
//     this.handleSongInput = this.handleSongInput.bind(this);
//
//   }
//
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }
//
//   handleArtistInput(artist) {
//     this.setState({ artistQuery: artist });
//   }
//
//   handleSongInput(song) {
//     this.setState({ songQuery: song });
//   }
//

//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     return (
//       <Lyrics
//         {...this.state}
//         handleChange={this.handleChange}
//         setArtist={this.handleArtistInput}
//         setSong={this.handleSongInput}
//         handleSubmit={this.handleSubmit} />
//     );
//   }
//
// }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.state.artistQuery && this.state.songQuery) {
  //     store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
  //   }
  // }

const mapStateToProps = (state, ownProps) => {
  return {
    songQuery: state.songQuery,
    artistQuery: state.ArtistQuery,
    handleChange: state.handleChange,
    setSong: state.setSong,
    setArtist: state.setArtist
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {handleSubmit: function(event) {
      event.preventDefault()
      if (ownProps.artistQuery && ownProps.songQuery) {
            dispatch(searchLyrics(ownProps.artistQuery, ownProps.songQuery))
      }
    }
  }
}
const LyricsContainer = connect(mapStateToProps, mapDispatchToProps)(Lyrics)
export default LyricsContainer;
