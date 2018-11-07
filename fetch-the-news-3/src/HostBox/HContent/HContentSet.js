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
      // editElem Arr: [],
      tempTrivId: '',
      tempTrivName: '',
      editElement: null
    }
  }
  componentDidMount(){
    //Set array of editable elems to state
    // console.log('component did mount starting', this.props.newsMyListCreated[0])
    // if(this.props.newsMyListCreated[0]){
    //   let arr =[];
    //   for (let i = 0; i < this.props.newsMyListCreated.length; i++){
    //     const{cat_id} = this.props.newsMyListCreated[i];
    //       arr.push(cat_id)
    //   }
    //   this.setState({
    //     editElemArr: arr,
    //   })
    //   console.log('this.state.editElemArr',this.state.editElemArr)
    // }
  }
  componentDidUpdate(prevProps){
    // if (this.props.trivArray!== prevProps.trivArray) {
      // const{elemId, elemName} = this.props;
      // this.editCheckFn({elemId: elemId, elemName: elemName})
      // console.log('HCS component did update, this.state.editCheck',this.state.editCheck)
    console.log('component did update starting', this.props.newsMyListCreated[0])
    if(this.props.newsMyListCreated[0]){
      let arr =[];
      for (let i = 0; i < this.props.newsMyListCreated.length; i++){
        const{cat_id} = this.props.newsMyListCreated[i];
          arr.push(cat_id)
      }
      // this.setState({
      //   editElemArr: arr,
      // })
      console.log('this.state.editElemArr',this.state.editElemArr)
    }
  }
  updateEditElemArr (){
    // console.log('component did update starting', this.props.newsMyListCreated[0])
    if(this.props.newsMyListCreated[0]){
      let arr =[];
      for (let i = 0; i < this.props.newsMyListCreated.length; i++){
        const{cat_id} = this.props.newsMyListCreated[i];
          arr.push(cat_id)
      }
      this.setState({
        editElemArr: arr,
      })
      console.log('this.state.editElemArr',this.state.editElemArr)
    }
  }
  
  editCheckFn = (elem) => {
    // console.log("this.props.newsMyListCreated[0] && elem['elemId']")
    // console.log(this.props.newsMyListCreated[0], elem['elemId'])

    // if user has ever created any trivia set && if set are loaded in props
    if (this.state.newsMyListCreated[0] && elem['elemId']){
      // console.log('HContentSet loop started')
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
    console.log('editTriviaSet firing off')
    this.setState({

      editText: true,
      tempTrivId: catId,
      tempTrivName: catName,
    })
  }
  submitTriviaSet = (catId) => {
    console.log('submitTriviaSet firing off')
    const {tempTrivName} = this.state;
    this.setState({
      editElement: '',
      editText: false,
      tempTrivId: catId,
      tempTrivName: tempTrivName,
    })
    // console.log('catId', catId, 'catName',catName)
    // axios.put(`/api/TrivSet/${catId}`, {catName:tempTrivName})
    //   .then(res => {
    //   console.log('HCS submit, res.data', res.data);
    // })
    // .catch(err => console.log('error at post editTriviaSet', err))
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
    const{trivSetToMap, editCheck, editText, tempTrivName}=this.state;
    // const{elemId,elemName} = this.props;
    const { trivArray } = this.props;
    const TrivCard = trivArray.map(elem => {
      // this.editCheckFn(elem)
      let elemId = elem.cat_id;
      let elemName = elem.cat_name;
      let key = elemId;
      let sharedIndex = this.props.newsMyListCreated.findIndex(e => e.cat_id === elemId) !== -1
      let editBtn = () => {
        this.setState({editElement: elemId});
        this.editTriviaSet(elemId,elemName);
      }
      let submitBtn = () => {
        this.setState({editElement: ''});
        this.submitTriviaSet(elemId);
      }
      // console.log(editCheck ? ('tempTrivName: '+ tempTrivName) : ('elemName: ' + elemName));
      return (<div >
        <input className='inputTrivText' type="text" name='tempTrivName' value={editCheck ? tempTrivName : elemName} onChange={this.handleChange}/>
        {/* {/* <button className={ editCheck ? 'btn' : 'btn-off' } onClick={ editCheck && editText ? submitBtn : editCheck ? editBtn : null }> */}
          <button className={ sharedIndex ? 'btn' : 'btn-off' } onClick={ this.state.editElement === elemId ? submitBtn : editBtn }>
          {this.state.editElement === elemId ? 'Submit' : 'Edit'}</button>
          <button className={ sharedIndex ? 'btn' : 'btn-off' } >Delete</button>
      </div> )
    })
    console.log(this.state)
    console.log(this.props)

    return (
      <>
        {TrivCard}
      </>
      // <div className='TrivSet'>
      //   { editCheck && editText ? 
      //   <div>
      //     <input className='inputTrivText' type="text" name='tempTrivName' value={tempTrivName} onChange={this.handleChange}/>
      //     <button className='btn-sml' onClick={ () => this.editTriviaSet(elemId,elemName)}>Edit</button>
      //     <button className='btn-sml'>Delete</button>
      //   </div> 
      //    : editCheck ?
      //     <div>
      //       <input className='inputTrivText' type="text" name='tempTrivName' value={elemName} onChange={this.handleChange}/>
      //       <button className='btn-sml' onClick={ () => this.editTriviaSet(elemId,elemName)}>Edit</button>
      //       <button className='btn-sml'>Delete</button>
      //     </div>
      //     : <div>
      //         <input className='inputTrivText' type="text" name='tempTrivName' value={elemName} onChange={this.handleChange}/>
      //         <button className='btn-off-sml'>Edit</button>
      //         <button className='btn-off-sml'>Delete</button>
      //       </div>
      //     }
      // </div>
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