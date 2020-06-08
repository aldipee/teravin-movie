import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import MovieItem from '../components/MovieItem';
function Home(props) {
  const list = [
    {
      popularity: 122.055,
      vote_count: 2537,
      video: false,
      poster_path: '/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
      id: 338762,
      adult: false,
      backdrop_path: '/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg',
      original_language: 'en',
      original_title: 'Bloodshot',
      genre_ids: [28, 878],
      title: 'Bloodshot',
      vote_average: 7,
      overview:
        "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      release_date: '2020-03-05',
    },
    {
      popularity: 124.024,
      vote_count: 7772,
      video: false,
      poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
      id: 496243,
      adult: false,
      backdrop_path: '/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg',
      original_language: 'ko',
      original_title: '기생충',
      genre_ids: [35, 18, 53],
      title: 'Parasite',
      vote_average: 8.5,
      overview:
        "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      release_date: '2019-05-30',
    },
    {
      popularity: 100.849,
      vote_count: 794,
      video: false,
      poster_path: '/wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg',
      id: 514847,
      adult: false,
      backdrop_path: '/naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg',
      original_language: 'en',
      original_title: 'The Hunt',
      genre_ids: [28, 27, 53],
      title: 'The Hunt',
      vote_average: 6.7,
      overview:
        "Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",
      release_date: '2020-03-11',
    },
  ];
  return (
    <ScrollView>
      <View>
        <Header
          containerStyle={{height: 60, paddingTop: 0}}
          placement="left"
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />

        <View>
          {list.map((item) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('MovieDetail')}>
              <MovieItem {...item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
export default Home;
