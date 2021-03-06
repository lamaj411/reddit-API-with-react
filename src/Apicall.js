import React,{ Component } from 'react';
import axios from 'axios';

class Apicall extends Component {

componentWillMount(){
  this.getReddit();
}


getReddit(){
  axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
  .then(res =>{
    const posts=res.data.data.children.map(obj=>obj.data);
    this.setState({posts});
  });
}

constructor(props){
  super(props);

  this.state = {
    posts:[],
    subr:'space'
  };
  this.getReddit=this.getReddit.bind(this);
}

  render(){
    return(
      <div>
      <h2>{`/r/${this.state.subr}`}</h2>
      <ul className="list-group">
      {this.state.posts.map(post=>
      <li className="list-group-item" key={post.id}>{post.title}</li>
    )}
      </ul>
      </div>
    );
  }
}


export default Apicall;
