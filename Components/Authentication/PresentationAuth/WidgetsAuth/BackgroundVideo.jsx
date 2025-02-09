import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const BackgroundVideo = () => (
  <Video
    source={{
      uri: 'https://videos.pexels.com/video-files/4038571/4038571-uhd_1440_2732_25fps.mp4',
    }}
    style={styles.video}
    resizeMode="cover"
    repeat
    muted
    playWhenInactive
    playInBackground
  />
);

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default BackgroundVideo;
