/* global */
import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import createPersistPlugin, { getPersistor } from '@rematch/persist';
import storage from 'redux-persist/es/storage';
import * as models from '../models';

// Create plugins
const persistPlugin = createPersistPlugin({
    key: 'root',
    storage,
    blacklist: [],
});

const loadingPlugin = createLoadingPlugin({});

const configureStore = () => {
    const store = init({
      models,
      redux: {
        middlewares: [],
      },
      plugins: [persistPlugin, loadingPlugin],
    });

    const persistor = getPersistor();
    const { dispatch } = store;

    return { persistor, store, dispatch };
};

export default configureStore;
