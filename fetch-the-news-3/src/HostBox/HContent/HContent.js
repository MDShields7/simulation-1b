import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {updateNewsAllList, updateNewsMyList} from '../../ducks/reducer';
import HCSet from './HContentSet';

class HContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      //temporary stuff
      //createTriviaSetId:
      trivSetName: '',
      userId: 2,
    }
  }
  componentDidMount = () => {
    // this.getTriviaSet();
    this.getMyTriviaSet();
  }
  getTriviaSet = () => {
    axios.get('/api/TrivSet').then(res => {
      this.props.updateNewsAllList(res.data)
      console.log('HContent, this.props.newAllList', this.props.newsAllList)
    })
    .catch(err => console.log('error at get TriviaSet', err))
  }
  getMyTriviaSet = () => {
    axios.get('/api/MyTrivSet', {params:{userId:this.state.userId}}).then(res => {
      this.props.updateNewsMyList(res.data)
      console.log('HContent, this.props.newsMyList', this.props.newsMyList)
    })
    .catch(err => console.log('error at get TriviaSet', err))
  }
  getMyTriviaCreated = () => {
    axios.get('/api/MyTrivSetCreated', {params:{userId:this.state.userId}}).then(res => {
      this.props.updateNewsMyList(res.data)
      console.log('HContent, this.props.newsMyList', this.props.newsMyList)
    })
    .catch(err => console.log('error at get TriviaSet', err))
  }
  createTriviaSet = () => {
    console.log('createTriviaSet w/ req.body',this.state.trivSetName)
    axios.post('/api/TrivSet', {trivSetName: this.state.trivSetName})
    .then(res => { 
      this.createTrivCreator(res.data[0]['cat_id'])
      this.getTriviaSet() })
    .catch(err => console.log('error at post TriviaSet', err))
    }
  createTrivCreator = (catId) => {
    const{userId} = this.state;
    console.log('createTrivCreator, userId:', userId,'catId:', catId)
    axios.post('/api/TrivCreator', {tcr_user_id: userId, tcr_cat_id: catId})
      .then(res => {console.log('createTriviaCreator, res.data',res.data)})
      .catch(err => console.log('error at post TriviaSet', err))
  }
  editTriviaSet = (itemId) => {
      axios.put(`/api/TrivSet`, {userId: this.state.userId,itemId:itemId})
  }
  deleteTriviaSet = (myId, setId) => {

    axios.delete(`/api/TrivSet}`)
  }
  createQASet = (qaItem) => {
    axios.post('/api/TrivSet', {qaItem}).then(res => {
    console.log('HContent.js, createQASet, response (take id and post to QACreator):', res)
    })
    // take res.data.id from post put (user.id, res.data.id)
    axios.post('/api/QACreator')
  }
  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }


  render() {
    const{newsAllList,newsMyList,userId} = this.props;
    
    // const TrivSetView = newsAllList.map(elem => (
    //   <div key={elem.cat_id}>
    //     <HCSet
    //     id={elem.cat_id}
    //     name={elem.cat_name}
    //     />
    //     {/* { userId === elem.cat_id ?
    //       <button onClick={() => this.editTriviaSet(elem.cat_id)}>Edit</button> : <div>Not Editable</div>
    //     } */}
    //   </div>
    // ));
    const MyTrivSetView = newsMyList.map(elem => (
      <div key={elem.cat_id}>
        <HCSet
        id={elem.cat_id}
        name={elem.cat_name}
        />
        { userId === elem.cat_id ?
          <button onClick={() => this.editTriviaSet(elem.cat_id)}>Edit</button> : <div>Not Editable</div>
        }
      </div>
    ));
    const{trivSetName} = this.state;
    console.log('HContent props', this.props)
    return (
      <div>
        <h1>Host Content</h1>
        {/* ALL TRIVIA SETS
        {TrivSetView} */}
        MY TRIVIA SETS
        {MyTrivSetView}
        <button onClick={this.getTriviaSet}>Get All Trivia Sets Ever Made</button>
        <button onClick={this.getMyTriviaSet}>Get My Trivia Sets (made & collected by me)</button>
        <div>
          <div>Create a new trivia set</div>
          <input type="text" name='trivSetName' value={trivSetName} onChange={this.handleChange}/>
          <button onClick={this.createTriviaSet}>Create</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps( state ){
  const {newsAllList, newsMyList} = state;
  return {
    newsAllList,
    newsMyList
  };
}
export default connect (mapStateToProps, {updateNewsAllList, updateNewsMyList})(HContent); 

// arrayFromObj(obj){
//   let newArr = ['hi', 'bye'];
//   // console.log(newArr, typeof newArr)
//   for (let key in obj){
//     // console.log(key, obj[key])
//     newArr.push(obj[key])
//   }
//   console.log(newArr, typeof newArr)
//   return newArr
// }