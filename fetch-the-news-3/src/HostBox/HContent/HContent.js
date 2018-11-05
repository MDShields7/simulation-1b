import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {updateNewsAllList} from '../../ducks/reducer';

class HContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      //temporary stuff
      //createTriviaSetId:
    }
    this.getTriviaSet = this.getTriviaSet.bind(this);
  }
arrayFromObj(obj){
  let newArr = ['hi', 'bye'];
  // console.log(newArr, typeof newArr)
  for (let key in obj){
    // console.log(key, obj[key])
    newArr.push(obj[key])
  }
  console.log(newArr, typeof newArr)
  return newArr
}

getTriviaSet () {
  axios.get('/api/TrivSet').then(res => {
    this.props.updateNewsAllList(res.data)
    console.log('HContent, this.props.newAllList', this.props.newsAllList)
  })
  .catch(err => console.log('error at get TriviaSet', err))
}

createTriviaSet = () => {
  axios.post('/api/TrivSet').then(res => {
    console.log('createTriviaSet')
  })
  .catch(err => console.log('error at post TriviaSet', err))
  //this.setState({createTriviaSetId: 
  axios.post('/api/TrivCreator')
}
editTriviaSet = (id, trivItem) => {
  axios.put(`/api/TrivSet/${id}`, {trivItem})
}
deleteTriviaSet = (id) => {
  axios.delete(`/api/TrivSet/${id}`)
}
createQASet = (qaItem) => {
  axios.post('/api/TrivSet', {qaItem}).then(res => {
  console.log('HContent.js, createQASet, response (take id and post to QACreator):', res)
  })
  // take res.data.id from post put (user.id, res.data.id)
  axios.post('/api/QACreator')
}



  render() {
    // const TrivSetView = this.props.newsAllList.map(elem => {
    //   elem
    // });
    console.log('HContent props', this.props)
    return (
      <div>
        <h1>Host Content</h1>
        {/* {TrivSetView} */}
        <button onClick={this.getTriviaSet}>Get Trivia Sets</button>
      </div>
    )
  }
}
function mapStateToProps( state ){
  const {newsAllList} = state;
  return {
    newsAllList
  };
}
export default connect (mapStateToProps, {updateNewsAllList})(HContent); 
