import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../Header';
import Gap from '../Gap';

const ContentOrder = () => {
  const [dataOrder, setDataOrder] = useState([
    {
      image: require('../../assets/pictures/pict1.jpg'),
      name: 'Park Hyung Sik',
      namePackage: 'Silver Package',
      packagePrice: '3.000.000',
      description: 'Warna sesuai tema musim dingin',
      key: 1,
    },
    {
      image: require('../../assets/pictures/pict2.jpg'),
      name: 'Rick Abram',
      namePackage: 'Gold Package',
      packagePrice: '5.000.000',
      description: 'Warna sesuai tema musim gugur',
      key: 2,
    },
    {
      image: require('../../assets/pictures/pict3.jpg'),
      name: 'Gerald Wuycang',
      namePackage: 'Platinum Package',
      packagePrice: '1.000.000',
      description: 'Warna sesuai tema musim panas',
      key: 3,
    },
  ]);
  // const Order = () => {};
  return (
    <View>
      {/* <> */}
      <Gap height={148} />
      {/* <Header /> */}
      {dataOrder.map(item => (
        <View style={styles.container} key={item.key}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.wrapperTxt}>
            <Text style={styles.nama}>{item.name}</Text>
            <Text>{item.namePackage}</Text>
            <Text>Rp. {item.packagePrice}</Text>
            <Text
              style={{
                width: 200,
              }}>
              Desc: {item.description}
            </Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
              <Text>Approve</Text>
            </TouchableOpacity>
          </View>
          {/* <Text>index</Text> */}
        </View>
      ))}
      {/* </> */}
    </View>
  );
};

export default ContentOrder;

const styles = StyleSheet.create({
  btn: {
    width: 165,
    height: 40,
    backgroundColor: '#FFD0EC',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 170,
    width: 350,
    backgroundColor: 'pink',
    marginBottom: 30,
    borderRadius: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    // elevation: 10,
    // marginTop: 148,
  },
  wrapperTxt: {
    marginLeft: 43,
    marginTop: 10,
  },
  nama: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  image: {
    width: 64,
    height: 64,
    marginTop: 16,
    marginLeft: 12,
    borderRadius: 10,
  },
});
