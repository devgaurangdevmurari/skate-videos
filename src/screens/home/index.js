import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {getUserInfo} from '../../actions/actions';
import {useDispatch} from 'react-redux';

import style from './styles';
import {ActivityLoader, InformationItem} from '../../components';
import {hp} from '../../helpers/constants';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    let request = {
      onSuccess: res => {
        setData(res?.data);
        setIsLoading(false);
      },
      onFail: e => {
        setIsLoading(false);
        return e;
      },
    };
    dispatch(getUserInfo(request));
  }, []);

  const renderItem = ({item}) => {
    return <InformationItem data={item} />;
  };

  const itemSeperator = () => <View style={{height: hp(2)}} />;

  const listHeader = () => <View style={{height: hp(7)}} />;

  const listFooter = () => <View style={{height: hp(2)}} />;

  return (
    <View style={style.mainContainerStyle}>
      <ActivityLoader visible={isLoading} />
      <FlatList
        data={data}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeperator}
        ListFooterComponent={listFooter}
        ListHeaderComponent={listHeader}
      />
    </View>
  );
};

export default HomeScreen;
