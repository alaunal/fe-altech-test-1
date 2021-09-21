import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import tw, { styled, css } from 'twin.macro';

// -- Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = (props) => {

  const { rawFeed, getFeed } = props;

  const [ loading, setLoading ] = useState(true);

  // -- component didmount
  useEffect(() => {
    if(rawFeed.length < 1) {
      getFeed();
    } else {
      setLoading(!loading);
    }
    // eslint-disable-next-line
  }, []);

  // -- component didupdate
  useEffect(() => {
    if(rawFeed.length < 1) {
      setLoading(!loading);
    }
    // eslint-disable-next-line
  }, [rawFeed]);

  return (
    <div>
      <Header />
      <Layout>
        <Container>
          {loading ? (
            <div tw="flex justify-center">
              <p tw="text-2xl font-semibold text-gray-600">Loading ...</p>
            </div>
          ) : (
            <div tw="flex justify-center">
              <Card>
                <Link to="/movie">
                  <img
                    src="https://images.unsplash.com/photo-1611783398974-18d64fdad700?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=serhiy-hipskyy-PL980oik5ls-unsplash.jpg&w=640"
                    alt="movie"
                  />
                  <div className="backdrop">Movie</div>
                </Link>
              </Card>
              <Card>
                <Link to="/series">
                  <img
                    src="https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=erik-mclean-U-Vu_r6qyyU-unsplash.jpg&w=640"
                    alt="series"
                  />
                  <div className="backdrop">Series</div>
                </Link>
              </Card>
            </div>
          )}

        </Container>
      </Layout>
      <Footer />
    </div>
  );
};

// -- Styled Area --

const Layout = styled.div(() => [
  tw`min-h-screen flex items-center pt-24 md:pt-32`
]);

const Container = styled.div(() => [tw`container mx-auto px-4 md:px-0`]);

const Card = styled.div(() => [
  tw`inline-block mx-2 md:mx-4 bg-gray-200 rounded-xl relative overflow-hidden hover:shadow-lg`,
  css`
    aspect-ratio: 2 / 3;
    width: 220px;
    height: 100%;

    img {
      ${tw`absolute top-0 left-0 object-cover w-full h-full`}
    }

    .backdrop {
      ${tw`h-full w-full flex items-center justify-center text-gray-100 absolute font-bold text-3xl`}
      background: rgba(0,0,0, .5);
    }
  `,
]);

const mapProps = (state) => ({
  rawFeed: state.feed.raw || [],
});

const mapDispatch = (dispatch) => ({
  getFeed: dispatch.feed.fetchFeed,
});

export default connect(mapProps, mapDispatch)(Home);
