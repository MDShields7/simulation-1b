import React, { Component } from 'react'
import {connect} from 'react-redux';
import './HContentSet.css'

class HContentSet extends Component {
  constructor(props){
    super(props)
    this.state ={
      editCheck: false,
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.newsMyListCreated!== prevProps.newsMyListCreated) {
      const{elemId, elemName} = this.props;
      this.editCheck({elemId: elemId, elemName: elemName})
      console.log('HCS component did mount, this.state.editCheck',this.state.editCheck)
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
    // axios.put(`/api/TrivSet`, {catId: this.state.userId,catName:catName})
  }
  deleteTriviaSet = (myId, setId) => {

    axios.delete(`/api/TrivSet}`)
  }
  render() {
    const{editCheck}=this.state;
    const{elemName} = this.props;
    // const{newsAllList,newsMyList,userId} = this.props;
    // console.log('HContentSet, this.props',this.props)
    console.log('HContentSet, state',this.state)

    return (
      <div className='TrivSet'>
        <div className='TrivText'>{elemName}</div>
        { editCheck ?
          <div>
            <button className='btns'>Edit</button>
            <button className='btns'>Delete</button>
          </div>
          : <div>
              <button className='btns-dead'>Edit</button>
              <button className='btns-dead'>Delete</button>
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