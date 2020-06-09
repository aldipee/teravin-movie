import React from 'react';
import {Provider} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {PersistGate} from 'redux-persist/integration/react';
import {View, Text} from 'react-native';

import Index from './src/index';
import {store, persistor} from './src/redux/store';
const App = () => {
  const [isInternetReachable, setisInternetReachable] = React.useState(false);
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setisInternetReachable(state.isInternetReachable);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {!isInternetReachable && (
            <View
              style={{
                backgroundColor: 'red',
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Warning. No Internet Connection!
              </Text>
            </View>
          )}
          <Index />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
