import React from 'react';
import Header from '../components/HeaderStyle';
import Banner from '../components/Banner';
import imgSample from '../img/post-sample-image.jpg';
import Footer from '../components/Footer';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchPostApi } from '../redux/actions/postAction';
import PropTypes from 'prop-types';

import PostContent from '../components/PostContent';

function SamplePost({ match }) {
  const { name } = match.params;
  console.log('match', name);
  const post = useSelector((state) =>
    state.posts.postsList.filter((e) => e.name === name)
  );

  React.useEffect(() => {
    dispatch(fetchPostApi());
  }, []);

  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <>
      <Header className="masthead" img={imgSample}>
        <Banner title="Clean Blog" subtitle="A Blog Theme by Start Bootstrap" />
      </Header>
      <PostContent post={post} />
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => ({
  posts: state.posts.postsList,
});

SamplePost.propTypes = {
  match: PropTypes.object
};

export default connect(mapStateToProps)(SamplePost);
