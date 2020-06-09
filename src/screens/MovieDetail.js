import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {Image, Card, Tile, Header, Rating} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {getMovieDetails} from '../redux/actions/movie';

const localStyle = StyleSheet.create({});
function MovieDetail(props) {
  React.useEffect(() => {
    props.getMovieDetails(props.route.params.id);
  }, [props.route.params.id]);
  return (
    <>
      {props.isLoading ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView>
          <Header
            containerStyle={{
              height: 60,
              backgroundColor: 'transparent',
              borderBottomWidth: 0,
              borderColor: 'transparent',
              paddingTop: 0,
              zIndex: 1,
              width: '100%',
              position: 'absolute',
            }}
            placement="left"
            leftComponent={
              <Icon
                name="ios-arrow-round-back"
                color="#fff"
                size={40}
                onPress={() => props.navigation.goBack()}
              />
            }
          />

          <View style={{zIndex: 0}}>
            {/* Start Tile */}
            <Tile
              activeOpacity={1}
              height={220}
              imageSrc={{
                uri: `https://image.tmdb.org/t/p/w500/${props.movieDetail.backdrop_path}`,
              }}
              //   title="Bloodshot (2018)"
              overlayContainerStyle={{
                justifyContent: 'flex-end',
                flexDirection: 'column',
                paddingBottom: 10,
                paddingHorizontal: 0,
              }}
              //   titleStyle={{
              //     alignSelf: 'flex-start',
              //     backgroundColor: '#000',
              //     width: '100%',
              //   }}
              featured
            />
            {/* Start Title */}
            <Card
              containerStyle={{
                marginHorizontal: 15,
                marginVertical: 5,
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderWidth: 0,
                marginTop: -50,
                borderRadius: 3,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${props.movieDetail.poster_path}`,
                  }}
                  style={{
                    width: 100,
                    height: 130,
                    marginRight: 15,
                    borderRadius: 5,
                  }}
                  PlaceholderContent={<ActivityIndicator />}
                />
                <View>
                  <View style={{width: '84%'}}>
                    <Text
                      style={{
                        fontSize: 21,
                        fontWeight: 'bold',
                      }}>
                      {props.movieDetail.original_title}
                    </Text>
                  </View>
                  <Text style={{fontSize: 14, color: '#a3a3a3'}}>
                    Year : {props.movieDetail.release_date.substring(0, 4)}
                  </Text>
                  <Text style={{fontSize: 14, color: '#a3a3a3'}}>
                    Release : {props.movieDetail.release_date}
                  </Text>
                  <Text style={{fontSize: 14, color: '#a3a3a3'}}>
                    Popularity : {props.movieDetail.popularity}
                  </Text>
                  <View
                    style={{
                      marginTop: 5,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Rating
                      ratingCount={5}
                      imageSize={16}
                      readonly
                      startingValue={9 / 2}
                    />
                    <Text
                      style={{
                        marginLeft: 5,
                        fontWeight: 'bold',
                        color: '#a3a3a3',
                      }}>
                      {props.movieDetail.vote_average}/10
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: 3,
                      color: '#fff',
                      fontWeight: 'bold',
                      backgroundColor: '#61a336',
                      width: 70,
                      padding: 2,
                      borderRadius: 3,
                      textAlign: 'center',
                    }}>
                    {props.movieDetail.runtime} min
                  </Text>
                </View>
              </View>
            </Card>
            {/* Start Paragrpah */}
            <View style={{marginHorizontal: '5%', marginTop: 30}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 9,
                }}>
                Synopsis
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  lineHeight: 19,
                  color: '#5c5c5c',
                }}>
                {props.movieDetail.overview}
              </Text>
            </View>
            <View style={{marginHorizontal: '5%', marginTop: 15}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 9,
                }}>
                Genres
              </Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {props.movieDetail.genres.map((v) => (
                  <Text
                    style={{
                      marginHorizontal: 5,
                      textAlign: 'justify',
                      lineHeight: 19,
                      color: '#9c9c9c',
                      padding: 6,
                      borderRadius: 3,
                      backgroundColor: '#dbdbdb',
                      marginTop: 3,
                    }}>
                    {v.name}
                  </Text>
                ))}
              </View>
            </View>
            <View style={{marginHorizontal: '5%', marginTop: 15}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 9,
                }}>
                Spoken Language
              </Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {props.movieDetail.spoken_languages.map((v) => (
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginTop: 3,
                      textAlign: 'justify',
                      lineHeight: 19,
                      color: '#9c9c9c',
                      padding: 6,
                      borderRadius: 3,
                      backgroundColor: '#dbdbdb',
                    }}>
                    {v.name}
                  </Text>
                ))}
              </View>
            </View>
            <View style={{marginHorizontal: '5%', marginTop: 15}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 2,
                }}>
                Production Countries
              </Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {props.movieDetail.production_countries.map((v) => (
                  <Text
                    style={{
                      marginHorizontal: 5,
                      marginTop: 5,
                      textAlign: 'justify',
                      lineHeight: 19,
                      color: '#9c9c9c',
                      padding: 6,
                      borderRadius: 3,
                      backgroundColor: '#dbdbdb',
                    }}>
                    {v.name}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetails.movieDetail,
  isLoading: state.movieDetails.isLoading,
});

const mapDispatchToProps = {
  getMovieDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
