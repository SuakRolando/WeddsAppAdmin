import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FIREBASE from '../../config/Firebase';

const Order = ({route}) => {
  const {uid} = route.params;

  useEffect(() => {
    getUserID();
    getOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [dataOrder, setDataOrder] = useState([
    {
      image: require('../../assets/pictures/pict1.jpg'),
      name: 'Park Hyung Sik',
      namePackage: 'Silver Package',
      packagePrice: '3.000.000',
      description: 'Warna sesuai tema musim dingin',
      key: 1,
      isPay: true,
      isApprove: false,
    },
    {
      image: require('../../assets/pictures/pict2.jpg'),
      name: 'Rick Abram',
      namePackage: 'Gold Package',
      packagePrice: '5.000.000',
      description: 'Warna sesuai tema musim gugur',
      key: 2,
      isPay: false,
      isApprove: true,
    },
    {
      image: require('../../assets/pictures/pict3.jpg'),
      name: 'Gerald Wuycang',
      namePackage: 'Platinum Package',
      packagePrice: '1.000.000',
      description: 'Warna sesuai tema musim panas',
      key: 3,
      isPay: true,
      isApprove: false,
    },
  ]);
  const [userIDD, setUserID] = useState('');
  console.log('ha', userIDD);
  const [dataUser, setDataUser] = useState({
    // userName: '',
    // image: null,
    // phone: '',
    // price: '',
    // packageName: '',
    // desc: '',
    // isReserve: true,
  });
  console.log('aaa', dataUser);
  const [hasData, setHasData] = useState(false);

  const getUserID = () => {
    const reference = FIREBASE.database().ref(`/vendors/${uid}`);
    reference.on('value', res => {
      const userId = res.val().checklists.userID.userID;
      console.log('id', userId);
      setUserID(userId);
      setHasData(true);
    });
  };

  const getOrderList = () => {
    const reference = FIREBASE.database().ref(
      `/vendors/${uid}/checklists/${userIDD}`,
    );
    console.log('data', reference);
    reference.on('value', res => {
      console.log('hia', res.val().productChecklist.image);
      const userName = res.val().name;
      const image = res.val().image;
      const phone = res.val().phone;
      const price = res.val().price;
      const desc = res.val().description;
      const isReserve = res.val().isReserve;
      const namePackage = res.val().productChecklist.namePackage;

      setDataUser({
        userName: userName,
        image: image,
        phone: phone,
        price: price,
        desc: desc,
        isReserve: isReserve,
        packageName: namePackage,
      });
      // FIREBASE.database()
      //   .ref(`vendors/${uid}/checklists/${userIDD}`)
      //   .update(dataUser);
      // FIREBASE.database().ref(`checklists/${userIDD}`).update(dataUser);
      setHasData(true);
    });
  };

  const approve = () => {
    //const isApprove = true;
    // setDataUser(
    //   {
    //     isReserve: false,
    //     isApprove: isApprove,
    //     isIS: 'mana',
    //     userName: dataUser.userName,
    //     phone: dataUser.phone,
    //     packageName: dataUser.packageName,
    //     price: dataUser.price,
    //     desc: dataUser.desc,
    //     image: dataUser.image,
    //   },
    // );
    setDataUser({
      isReserve: false,
      isApprove: true
    })
    const data = {
      isReserve: false,
      isApprove: true,
      userName: dataUser.userName,
      phone: dataUser.phone,
      packageName: dataUser.packageName,
      price: dataUser.price,
      desc: dataUser.desc,
      image: dataUser.image,
    };
    console.log('xxx', data);
    // FIREBASE.database().ref;
    if (!dataUser) {
      console.log('bbb', dataUser);
    } else {
      FIREBASE.database()
        .ref(`vendors/${uid}/checklists/${userIDD}`)
        .update(data);
      FIREBASE.database().ref(`checklists/${userIDD}`).update(data);
      console.log('ccc', dataUser);
    }
  };

  // const functionCombined = () => {
  //   getUserID();
  //   getOrderList();
  // };
  // const Order = () => {};
  return (
    <View style={{backgroundColor: 'white', paddingTop: 40, flex: 1}}>
      {/* <Gap height={40} /> */}
      {!hasData && (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{color: 'black', fontSize: 20}}>No Reservation!</Text>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderRadius: 10,
              width: 80,
              alignItems: 'center',
              borderColor: '#FF8BD0',
              marginTop: 6,
              paddingVertical: 4,
            }}
            onPress={() => functionCombined()}>
            <Text style={{color: '#FF8BD0'}}>Refresh</Text>
          </TouchableOpacity>
        </View>
      )}
      {hasData && (
        <View style={styles.container}>
          <Image source={{uri: dataUser.image}} style={styles.image} />
          <View style={styles.wrapperTxt}>
            <Text style={styles.nama}>{dataUser.userName}</Text>
            <Text>{dataUser.phone}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>{dataUser.packageName}</Text>
              <Text style={{marginLeft: 8}}>Rp.{dataUser.price}</Text>
            </View>
            <Text style={styles.txtOrder}>Desc: {dataUser.desc}</Text>
            {dataUser.isApprove === true ? null : (
              <TouchableOpacity
                onPress={approve}
                activeOpacity={0.7}
                style={styles.btn}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Approve
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', marginRight: 14}}>
            {dataUser.isReserve === true ? (
              <Text
                style={{marginTop: 14, fontSize: 9, flex: 1, color: '#E9D35F'}}>
                Waiting for approvall
              </Text>
            ) : null}
            {dataUser.isApprove === true ? (
              <Text
                style={{marginTop: 14, fontSize: 9, flex: 1, color: '#5AD71F'}}>
                Approve
              </Text>
            ) : null}
          </View>
        </View>
      )}

      {/* <FlatList
        data={dataUser}
        key={userIDD}
        renderItem={({item}) => (
          <View style={styles.container} key={userIDD}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.wrapperTxt}>
            <Text style={styles.nama}>{item.userName}</Text>
            <Text>{item.phone}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>{item.packageName}</Text>
              <Text style={{marginLeft: 8}}>Rp.{item.price}</Text>
            </View>
            <Text style={styles.txtOrder}>Desc: {item.desc}</Text>
            {item.isApprove === true ? null : (
              <TouchableOpacity
                onPress={approve}
                activeOpacity={0.7}
                style={styles.btn}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  Approve
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', marginRight: 14}}>
            {item.isReserve === true ? (
              <Text
                style={{marginTop: 14, fontSize: 9, flex: 1, color: '#E9D35F'}}>
                Waiting for approvall
              </Text>
            ) : null}
            {item.isApprove === true ? (
              <Text
                style={{marginTop: 14, fontSize: 9, flex: 1, color: '#5AD71F'}}>
                Approve
              </Text>
            ) : null}
          </View>
        </View>
        )}
      /> */}
    </View>
  );
};

export default Order;

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
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: 'white',
    marginBottom: 30,
    borderRadius: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    elevation: 4,
    // marginTop: 148,
  },
  wrapperTxt: {
    marginLeft: 20,
    marginTop: 10,
    width: 190,
  },
  nama: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  image: {
    width: 64,
    height: 64,
    marginTop: 14,
    marginLeft: 14,
    borderRadius: 10,
  },
  txtOrder: {
    fontSize: 12,
  },
});
