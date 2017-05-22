import React from 'react'
import {connect} from 'react-redux'
import Station from '../components/Station'
import {convertSong} from '../utils'
import {toggleSong} from '../action-creators/player'


const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs.filter((song) => {
      return song.genre === ownProps.params.genreName
    }).map(convertSong),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong,
    genreName: ownProps.params.genreName
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {toggleOne: function (song, list) {
    dispatch(toggleSong(song, list))
    }
  }
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station)

export default StationContainer
