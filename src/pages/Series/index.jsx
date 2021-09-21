import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import tw, { styled, css } from 'twin.macro';

// -- Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Series = (props) => {
  const { dataSeries, getFeed } = props;

  const [loading, setLoading] = useState(true);

  const [itemSeries, setItemSeries] = useState([]);

  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  // -- component didmount
  useEffect(() => {
    if (dataSeries.length < 1) {
      getFeed();
    } else {
      setLoading(false);
      setItemSeries(dataSeries);
    }
  }, []);

  // -- component didupdate
  useEffect(() => {
    if (dataSeries.length > 0) {
      setLoading(false);
      setItemSeries(dataSeries);
    }
  }, [dataSeries]);

  const handleSearch = (event) => {
    const keyword = event.target.value;
    const searchTerm = keyword.toLowerCase();

    let dataFilter = dataSeries.filter(value => {
      return value.title.toLowerCase().match(new RegExp(searchTerm, 'g'))
    });

    setItemSeries(dataFilter);
  };

  const debouncedChangeHandler = useMemo(() => debounce(handleSearch, 350), []);

  return (
    <div>
      <Header titleNav="Series Populer" />
      <Layout>
        <Container>
          {loading ? (
            <div tw="flex justify-center py-10">
              <p tw="text-2xl font-semibold text-gray-600">Loading ...</p>
            </div>
          ) : (
            <div tw="py-10">
              <div tw="flex mb-8">
                <div tw="w-full xl:w-1/2">
                  <Input placeholder="search Series..." onChange={debouncedChangeHandler} />
                </div>
              </div>
              <>
                {(itemSeries.length > 0) ? (
                  <div tw="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-5 xl:gap-5">
                    {itemSeries.map((item, key) => {
                      return (
                        <div tw="block" key={`card-item-${key}`}>
                          <Card>
                            <img src={item.images['Poster Art'].url} alt="kv" />
                          </Card>
                          <p tw="text-gray-800 font-semibold mt-2 truncate">{item.title}</p>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div tw="flex justify-center py-10">
                    <p tw="text-2xl font-semibold text-gray-600">Search Not Found!</p>
                  </div>
                )}
              </>
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
  tw`min-h-screen block pt-24 md:pt-32`,
]);

const Card = styled.div(() => [
  tw`inline-block bg-gray-200 rounded-xl relative overflow-hidden hover:shadow-lg cursor-pointer`,
  css`
    aspect-ratio: 2 / 3;
    width: 100%;
    height: auto;

    img {
      ${tw`absolute top-0 left-0 object-cover w-full h-full`}
    }
  `,
]);

const Input = styled.input(() => [
  tw`w-full px-3 py-4 h-12 text-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600 rounded-lg`,
  css`
    &:placeholder {
      ${tw`text-gray-700`}
    }
  `,
]);

const Container = styled.div(() => [tw`container mx-auto px-4 xl:px-0`]);

const mapProps = (state) => ({
  dataSeries: state.feed.series || [],
});

const mapDispatch = (dispatch) => ({
  getFeed: dispatch.feed.fetchFeed,
});

export default connect(mapProps, mapDispatch)(Series);
