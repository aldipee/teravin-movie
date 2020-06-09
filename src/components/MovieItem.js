import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Card, Image, Rating} from 'react-native-elements';

function MovieItem({
  original_title,
  release_date,
  poster_path,
  overview,
  vote_average,
  vote_count,
  popularity,
}) {
  return (
    <View>
      <Card
        containerStyle={{
          marginHorizontal: 5,
          marginVertical: 5,
          paddingHorizontal: 5,
          paddingVertical: 5,
          borderWidth: 0,
          borderRadius: 4,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
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
                  flexShrink: 1,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {original_title}
              </Text>
            </View>
            <Text style={{fontSize: 12}}>
              Year : {release_date.substring(0, 4)}
            </Text>
            <Text style={{fontSize: 12}}>Release : {release_date}</Text>
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
                startingValue={vote_average / 2}
              />
              <Text style={{marginLeft: 5, fontWeight: 'bold'}}>
                {vote_average}/10
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default MovieItem;
