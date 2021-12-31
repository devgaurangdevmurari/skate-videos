import {StyleSheet} from 'react-native';

import {hp, wp} from '../../helpers/constants';
import {colors, fontSize} from '../../helpers/utils';

const style = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 10,
    paddingTop: hp(2),
    paddingHorizontal: hp(1.5),
    borderRadius: wp(5),
    paddingBottom: hp(4),
    shadowColor: colors.primaryBlack,
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor: colors.primaryWhite,
    elevation: 3,
  },
  profileViewStyle: {
    height: wp(20),
    width: wp(20),
    borderRadius: wp(20) / 2,
    backgroundColor: colors.primaryBlack,
  },
  imageViewStyle: {
    height: wp(20),
    width: wp(20),
    borderRadius: wp(20) / 2,
  },
  nameViewStyle: {
    alignSelf: 'center',
    marginLeft: wp(5.33),
    flexDirection: 'row',
  },
  thumbNailViewStyle: {
    height: hp(25),
    marginTop: hp(2),
    backgroundColor: 'orange',
  },
  thumbNailImageStyle: {height: hp(25)},
  textStyle: {
    fontSize: fontSize(20),
    color: colors.primaryBlack,
  },
});

export default style;
