import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { Header } from '../components/HeaderStyle';
import imghome from '../img/home-bg.jpg';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPostApi } from '../redux/actions/postAction';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import PropTypes from 'prop-types';

function Home({ posts, error, loading }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    dispatch(fetchPostApi());
  };

  // Get current posts
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPosts);
  const activepage = indexOfLastPosts / postsPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header className="masthead" img={imghome}>
        <Banner title="Clean Blog" subtitle="A Blog Theme by Start Bootstrap" />
      </Header>{' '}
      <PostList posts={currentPosts} error={error} loading={loading} />{' '}
      <Pagination
        activepage={activepage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />{' '}
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.postsList,
  loading: state.posts.loading,
  error: state.posts.error,
});

export default connect(mapStateToProps)(Home);

Home.propTypes = {
  posts: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
};
