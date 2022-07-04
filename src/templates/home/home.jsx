/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './home.css';
import loadPosts from '../../middleware/loadPost/loadPost';
import Posts from '../../components/posts/postsIndex';
import Button from '../../components/button/buttonIndex';
import TextInput from '../../components/textInput/textInputIndex';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
      posts: [],
      page: 0,
      postPerPage: 10,
      searchTerm: '',
    };
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postAndPhotos = await loadPosts();
    this.setState({
      allPosts: postAndPhotos,
      posts: postAndPhotos.slice(page, postPerPage),
    });
  };

  loadMorePost = () => {
    const {
      page, postPerPage, allPosts, posts,
    } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);
    this.setState({
      page: nextPage,
      posts,
    });
  };

  handleChange = (e) => {
    const searchInput = e.target.value;
    this.setState({ searchTerm: searchInput });
  };

  render() {
    const {
      posts, page, postPerPage, allPosts, searchTerm,
    } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    let filteredPosts = ' ';

    if (searchTerm) {
      filteredPosts = allPosts.filter((post) => post.title.toLowerCase()
        .includes(searchTerm
          .toLowerCase()));
    } else {
      filteredPosts = posts;
    }

    return (
      <section className="container">
        <div className="search-items">

          <TextInput handleChange={this.handleChange} searchTerm={searchTerm} />
          {!!searchTerm && (
            <h1>
              Search term:
              {searchTerm}
            </h1>
          )}
        </div>
        {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p className="msg">Não existem posts com estes termos</p>
        )}

        <div className="btn-container">
          {!searchTerm && (
          <Button text="Load More Posts" onClick={this.loadMorePost} disabled={noMorePosts} />
          )}
        </div>

      </section>
    );
  }
}
export default Home;
