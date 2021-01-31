import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POSTS_LOADING_REQUEST } from '../../redux/types';
import { Helmet } from 'react-helmet';
import { Row } from 'reactstrap';
import { GrowingSpinner } from '../../components/spinner/Spinner';
import PostCardOne from '../../components/post/PostCardOne';

const PostCardList = () => {
  const {posts} = useSelector((state) => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: POSTS_LOADING_REQUEST})
  }, [dispatch])

  return (
    <Fragment>
      <Helmet title="Home">
        <Row>
          {posts ? <PostCardOne posts={posts} /> : GrowingSpinner}
        </Row>
      </Helmet>
    </Fragment>
  )
};

export default PostCardList;