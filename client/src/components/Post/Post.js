import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getPost } from '../../actions/post'
import { useParams, Link } from 'react-router-dom'
import PostItem from '../Posts/PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

const Post = ({ post:{ post, loading }, getPost }) => {
    const { id } = useParams()
    useEffect(() => {
        getPost(id)
    }, [ getPost, id ])
  return (
      loading || post === null ? <Spinner/> : <Fragment>
          <Link to='/posts' className='btn btn-light'>Back To Posts</Link>
          <PostItem post={post} showActions={false}/>
          <CommentForm postId={post._id}/>
          <div className='comments'>
            {
                post.comments.map(comment => {
                    return(<CommentItem key={comment._id} postId={post._id} comment={comment}/>)
                })}
          </div>
      </Fragment>
  )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect( mapStateToProps,{ getPost })(Post)