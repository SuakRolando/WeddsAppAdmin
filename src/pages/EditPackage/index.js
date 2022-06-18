import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {AddImage, PackageDetails, PackagePrice} from '../../assets/icons';
import {Gap, TextInput_EditPackage} from '../../components';

const EditPackage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <Text style={styles.txtHeader}>Edit Package</Text>
          <Gap height={32} />
          <AddImage />
          <Gap height={48} />
          <TextInput_EditPackage />
          <TextInput_EditPackage
            icons={<PackagePrice />}
            title="Package Price"
            placeholder="$42 / month"
          />
          <TextInput_EditPackage
            icons={<PackageDetails />}
            title="Details Package"
            placeholder="Kami menawarkan ..."
            height={130}
          />
        </View>
      </View>
    </View>
  );
};

export default EditPackage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    backgroundColor: '#FFD0EC',
    height: 566,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  txtHeader: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginTop: 52,
  },
  contentWrapper: {
    marginHorizontal: 28,
  },
});
