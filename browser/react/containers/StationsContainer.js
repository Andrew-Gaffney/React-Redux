import React from 'react'
import {connect} from 'react-redux'
import Stations from '../components/Stations'

const mapStateToProps = (state) => {
  return {stations: convertSongs(state.songs)}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

const  convertSongs = (songsArray) => {
  const stations = {}
  songsArray.forEach(song => {
      const genre = song.genre
      stations[genre] = stations[genre] || []
      stations[genre].push(song)
  })
return stations
}
export const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations)
