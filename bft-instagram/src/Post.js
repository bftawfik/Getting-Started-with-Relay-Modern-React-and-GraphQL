import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Post extends React.Component{

  render(){
    return(
      <div className='pa3bg-black-05 ma3'>
        <div className='w-100' style={{
            backgroundImage:`url(${this.props.post.imgUrl})`,
            backgroundSize:'cover',
            paddingBottom: '100%',
          }}/>
        <div className='pt3'>
          {this.props.post.description}&nbsp;
          <span className='red f6 pointer dim' onClick={this._handleDelete}>Delete</span>
        </div>
      </div>
    )
  }

  _handleDelete=() => {

  }
}

export default createFragmentContainer(Post, graphql`
  fragment Post_post on Post {
    id
    description
    imgUrl
  }
`)
