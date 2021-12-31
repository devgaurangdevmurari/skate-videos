import React from 'react';
import {View, Text, Image} from 'react-native';

import {hp, wp} from '../../helpers/constants';
import style from './styles';
import VideoPlayer from 'react-native-video-player';

const InformationItem = ({data}) => {
  return (
    <View style={style.containerStyle}>
      <View style={{flexDirection: 'row'}}>
        <View style={style.profileViewStyle}>
          <Image
            source={{uri: data?.creator?.new_picture_url}}
            style={style.imageViewStyle}
            resizeMode="cover"
          />
        </View>
        <View style={style.nameViewStyle}>
          <Text style={style.textStyle}>
            {data?.creator?.first_name || 'First name '}
          </Text>
          <Text style={[style.textStyle, {marginLeft: wp(2)}]}>
            {data?.creator?.last_name || 'Last name '}
          </Text>
        </View>
      </View>
      <Text
        style={[style.textStyle, {marginLeft: wp(25), textAlign: 'justify'}]}>
        {data?.caption || 'caption'}
      </Text>
      <VideoPlayer
        style={{marginTop: hp(2)}}
        video={{
          uri: data?.stream_url,
        }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{uri: data?.thumbnail}}
      />
    </View>
  );
};

export default InformationItem;
