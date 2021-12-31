import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';

import style from './styles';

const ActivityLoader = ({visible}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      statusBarTranslucent
      style={{flex: 1}}>
      <View style={style.containerStyle}>
        <View style={style.indicatorViewStyle}>
          <ActivityIndicator size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

export default ActivityLoader;
