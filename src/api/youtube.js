import axios from 'axios'

const KEY = 'AIzaSyDOezA770NvvX8dtezEGAj7oy2cqoDnPik'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
