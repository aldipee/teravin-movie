import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {Image, Card, Tile, Header, Rating} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {getMovieDetails} from '../redux/actions/movie';
import {colors} from '../utils/colors';

function MovieDetail(props) {
  React.useEffect(() => {
    props.getMovieDetails(props.route.params.id);
  }, [props.route.params.id]);
  return (
    <>
      {props.isLoading ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color={colors.BLUE} />
        </View>
      ) : (
        <ScrollView>
          <Header
            containerStyle={[styles.header]}
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
              overlayContainerStyle={styles.tile}
              featured
            />
            {/* Start Title */}
            <Card containerStyle={styles.cardTitle}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${props.movieDetail.poster_path}`,
                  }}
                  style={styles.poster}
                  PlaceholderContent={<ActivityIndicator />}
                />
                <View>
                  <View style={{width: '84%'}}>
                    <Text style={styles.title}>
                      {props.movieDetail.original_title}
                    </Text>
                  </View>
                  <Text style={styles.subTitle}>
                    Year : {props.movieDetail.release_date.substring(0, 4)}
                  </Text>
                  <Text style={styles.subTitle}>
                    Release : {props.movieDetail.release_date}
                  </Text>
                  <Text style={styles.subTitle}>
                    Popularity : {props.movieDetail.popularity}
                  </Text>
                  <View style={styles.horizontalCenter}>
                    <Rating
                      ratingCount={5}
                      imageSize={16}
                      readonly
                      startingValue={props.movieDetail.vote_average / 2}
                    />
                    <Text style={styles.textBold}>
                      {props.movieDetail.vote_average}/10
                    </Text>
                  </View>
                  <Text style={styles.greenBadge}>
                    {props.movieDetail.runtime} min
                  </Text>
                </View>
              </View>
            </Card>
            {/* Start Paragrpah */}
            <View style={styles.detailContainer}>
              <Text style={styles.titleDetail}>Synopsis</Text>
              <Text
                style={{
                  textAlign: 'justify',
                  lineHeight: 19,
                  color: '#5c5c5c',
                }}>
                {props.movieDetail.overview}
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 9,
                }}>
                Genres
              </Text>
              <View style={styles.horizontalWrap}>
                {props.movieDetail.genres.map((v) => (
                  <Text style={styles.greyBadge}>{v.name}</Text>
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
              <View style={styles.horizontalWrap}>
                {props.movieDetail.spoken_languages.map((v) => (
                  <Text style={styles.greyBadge}>{v.name}</Text>
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
              <View style={styles.horizontalWrap}>
                {props.movieDetail.production_countries.map((v) => (
                  <Text style={styles.greyBadge}>{v.name}</Text>
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
  header: {
    height: 60,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderColor: 'transparent',
    paddingTop: 0,
    zIndex: 1,
    width: '100%',
    position: 'absolute',
  },
  tile: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    paddingBottom: 10,
    paddingHorizontal: 0,
  },
  cardTitle: {
    marginHorizontal: 15,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 0,
    marginTop: -50,
    borderRadius: 3,
  },
  poster: {
    width: 100,
    height: 130,
    marginRight: 15,
    borderRadius: 5,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  subTitle: {fontSize: 14, color: colors.MAIN_GREY},
  horizontalCenter: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBold: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: colors.MAIN_GREY,
  },
  greenBadge: {
    fontSize: 14,
    marginTop: 3,
    color: colors.WHITE,
    fontWeight: 'bold',
    backgroundColor: colors.GREEN,
    width: 70,
    padding: 2,
    borderRadius: 3,
    textAlign: 'center',
  },
  titleDetail: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  greyBadge: {
    marginHorizontal: 5,
    textAlign: 'justify',
    lineHeight: 19,
    color: colors.SECOND_GREY,
    padding: 6,
    borderRadius: 3,
    backgroundColor: colors.THIRD_GREY,
    marginTop: 3,
  },
  horizontalWrap: {flexDirection: 'row', flexWrap: 'wrap'},
  detailContainer: {marginHorizontal: '5%', marginTop: 30},
});

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetails.movieDetail,
  isLoading: state.movieDetails.isLoading,
});

const mapDispatchToProps = {
  getMovieDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
