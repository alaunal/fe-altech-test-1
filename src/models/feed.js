import dataFeed from '../data/feed.json';

const initialState = {
  raw: [],
  movie: [],
  series: [],
  selected: {},
};

const feed = {
  state: initialState,
  reducers: {
    SET_DATA(state, payload) {
      let replaceState = { ...state, [payload.key]: payload.data };

      return replaceState;
    },
  },
  effects: (dispatch) => ({
    async fetchFeed() {
      try {
        if (dataFeed) {
          let dataSeries = dataFeed.entries.filter((item) => {
            return item.programType === 'series';
          });

          let dataMovie = dataFeed.entries.filter((item) => {
            return item.programType === 'movie';
          });

          dataSeries.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

          dataMovie.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

          dispatch.feed.SET_DATA({ key: 'raw', data: dataFeed.entries });
          dispatch.feed.SET_DATA({ key: 'movie', data: dataMovie });
          dispatch.feed.SET_DATA({ key: 'series', data: dataSeries });

          return {
            status: 200,
            data: dataFeed.entries,
          };
        } else {
          return {
            status: 401,
            data: [],
          };
        }
      } catch (error) {
        return {
          status: 301,
          data: [],
        };
      }
    },
  }),
};

export default feed;
