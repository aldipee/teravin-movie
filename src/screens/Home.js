import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Card, Button, Overlay} from 'react-native-elements';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {Header} from 'react-native-elements';
import {connect} from 'react-redux';

import {getAllMovies} from '../redux/actions/movie';
import MovieItem from '../components/MovieItem';
function Home(props) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showModal, setShowModal] = React.useState(false);

  const handleShowData = () => {
    setCurrentPage(currentPage + 1);
    setShowModal(false);
  };
  const Loading = (total) => {
    return Array.from(Array(4).keys()).map((data) => (
      <Card
        containerStyle={{
          marginHorizontal: 5,
          marginVertical: 5,
          paddingHorizontal: 5,
          paddingVertical: 5,
          borderWidth: 0,
          borderRadius: 4,
        }}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item
              width={100}
              height={130}
              borderRadius={0}
            />

            <SkeletonPlaceholder.Item marginLeft={20}>
              <SkeletonPlaceholder.Item
                width={180}
                height={20}
                borderRadius={4}
              />

              <SkeletonPlaceholder.Item
                marginTop={6}
                width={120}
                height={20}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={120}
                height={20}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={120}
                height={20}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </Card>
    ));
  };

  React.useEffect(() => {
    props.getAllMovies(currentPage);
    setTimeout(() => {
      setShowModal(true);
    }, 10000);
  }, [currentPage]);

  return (
    <SafeAreaView>
      <Header
        containerStyle={{
          height: 60,
          paddingTop: 0,
          backgroundColor: '#fff',
          marginBottom: '3%',
          borderBottomWidth: 1,
          borderBottomColor: '#dbdbdb',
        }}
        placement="left"
        leftComponent={{icon: 'menu', color: '#6e6e6e'}}
        centerComponent={{
          text: 'Teravin Movie',
          style: {color: '#6e6e6e', fontWeight: 'bold', fontSize: 17},
        }}
        rightComponent={{icon: 'home', color: '#6e6e6e'}}
      />

      <View>
        {props.isLoading ? (
          <Loading />
        ) : (
          <>
            <ScrollView>
              <FlatList
                initialNumToRender={10}
                data={props.movies.results}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={item.id}
                    onPress={() =>
                      props.navigation.navigate('MovieDetail', {id: item.id})
                    }>
                    <MovieItem {...item} key={item.id} />
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </>
        )}
      </View>
      {showModal ? (
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 100,
            },

            shadowOpacity: 0.8,
            shadowRadius: 12.35,

            elevation: 14,
            height: 60,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: '10%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 300}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16, width: '50%'}}>
                Data has been updated!
              </Text>
              <Button
                containerStyle={{margin: 0}}
                titleStyle={{fontSize: 14}}
                title="Show data"
                onPress={handleShowData}
              />
              <Button
                containerStyle={{margin: 0, width: '20%'}}
                titleStyle={{fontSize: 14}}
                title="Later"
                onPress={() => setShowModal(false)}
                type="outline"
              />
            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  movies: state.listMovies.movies,
  isLoading: state.listMovies.isLoading,
});

const mapDispatchToProps = {getAllMovies};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
