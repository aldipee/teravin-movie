import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Image, Card, Tile, Header, Rating} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
function MovieDetail(props) {
  return (
    <>
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
              uri:
                'https://image.tmdb.org/t/p/w500/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg',
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
              marginTop: -110,
              borderRadius: 3,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg`,
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
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Parasite</Text>
                <Text style={{fontSize: 14}}>Year : 2020</Text>
                <Text style={{fontSize: 14}}>Release : 20 June 2020</Text>
                <Text style={{fontSize: 14}}>Popularity : 98.403</Text>
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
                  <Text style={{marginLeft: 5}}>{9}/10</Text>
                </View>
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
              style={{textAlign: 'justify', lineHeight: 19, color: '#5c5c5c'}}>
              After he and his wife are murdered, marine Ray Garrison is
              resurrected by a team of scientists. Enhanced with nanotechnology,
              he becomes a superhuman, biotech killing machine—'Bloodshot'. As
              Ray first trains with fellow super-soldiers, he cannot recall
              anything from his former life. But when his memories flood back
              and he remembers the man that killed both him and his wife, he
              breaks out of the facility to get revenge, only to discover that
              there's more to the conspiracy than he thought.
            </Text>
          </View>
          <View style={{marginHorizontal: '5%', marginTop: 30}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 9,
              }}>
              Spoken Language
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginHorizontal: 5,
                  textAlign: 'justify',
                  lineHeight: 19,
                  color: '#5c5c5c',
                }}>
                China
              </Text>
              <Text
                style={{
                  marginHorizontal: 5,
                  textAlign: 'justify',
                  lineHeight: 19,
                  color: '#5c5c5c',
                }}>
                English
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
export default MovieDetail;
