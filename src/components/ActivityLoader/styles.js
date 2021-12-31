import {StyleSheet} from 'react-native';

import {wp} from '../../helpers/constants';
import {colors} from '../../helpers/utils';

const style = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  indicatorViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryWhite,
    borderRadius: wp(3),
    height: wp(20),
    width: wp(20),
  },
});

export default style;
