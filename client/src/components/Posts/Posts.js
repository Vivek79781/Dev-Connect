import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/post'
import Spinner from '../layout/Spinner'
import PostItem from './PostItem'
import PostForm from './PostForm'

const Posts = ({ getPosts, post: { posts, loading }}) => {
    useEffect(() => {
        getPosts();
    },[ getPosts ])
    
  return (
    loading ? <Spinner/> : 
    <Fragment>
      <h1 className="large text-primary">
        Posts
      </h1>
      <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>
      <PostForm/>

      <div className="posts">
        { posts.length > 0 ? posts.map( (post) => {
          // {console.log("HO JAO BSDK")}
          return(<PostItem key={ post._id } post={ post } />)
          // {console.log("HOTA KYU NHI H")}
        }) : <h4>No Posts Found...</h4>}
      </div>
    </Fragment> 
  )
}

Posts.propTypes = {
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect( mapStateToProps, { getPosts })(Posts)