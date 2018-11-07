import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './HContentSet.css';

class HContentSet extends Component {
  constructor(props){
    super(props)
    this.state ={
      editCheck: false,
      editText: false,
      tempTrivName: '',
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.newsMyListCreated!== prevProps.newsMyListCreated) {
      const{elemId, elemName} = this.props;
      this.editCheck({elemId: elemId, elemName: elemName})
      console.log('HCS component did update, this.state.editCheck',this.state.editCheck)
    }
  }
  editCheck = (elem) => {
    // if user has ever created any trivia set && if set are loaded in props
    if (this.props.newsMyListCreated[0] && elem['elemId']){
      console.log('HContentSet loop started')
      for (let i = 0; i < this.props.newsMyListCreated.length; i++){
        const{elemId}=elem;
        const{cat_id} = this.props.newsMyListCreated[i];
        console.log('editCheck, elemId',elemId)
        console.log('editCheck, cat_id',cat_id)
        if (elemId === cat_id){ 
          this.setState({
            editCheck: true,
          })
        }
      }
    } else {
      this.setState({
        editCheck: false,
      })
    }
  }
  editTriviaSet = (catId, catName) => {
    console.log('catId', catId, 'catName',catName)
    axios.put(`/api/TrivSet/${catId}`, {catName:catName})
      .then(res => {
      console.log('HCS edit, res.data', res.data);
    })
    .catch(err => console.log('error at post editTriviaSet', err))
  }
  deleteTriviaSet = (myId, setId) => {

    axios.delete(`/api/TrivSet}`)
  }
  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }
  render() {
    const{editCheck, tempTrivName}=this.state;
    const{elemId,elemName} = this.props;
    // const{newsAllList,newsMyList,userId} = this.props;
    // console.log('HContentSet, this.props',this.props)
    console.log('HContentSet, state',this.state)

    return (
      <div className='TrivSet'>
        { editCheck && editText ? 
          <div>
          <input type="text" name='tempTrivName' value={tempTrivName} onChange={this.handleChange}/>
          <button className='btn-sml' onClick={ () => this.editTriviaSet(elemId,elemName)}>Edit</button>
          <button className='btn-sml'>Delete</button>
        </div> 
        editCheck ?
          <div>
            <div className='TrivText'>{elemName} </div>
            <button className='btn-sml' onClick={ () => this.editTriviaSet(elemId,elemName)}>Edit</button>
            <button className='btn-sml'>Delete</button>
          </div>
          : <div>
              <button className='btn-off-sml'>Edit</button>
              <button className='btn-off-sml'>Delete</button>
            </div>
          }
      </div>
    )
  }
}
function mapStateToProps( state ){
  const {newsMyListCreated} = state;
  return {
    newsMyListCreated
  };
}
export default connect (mapStateToProps)(HContentSet); 