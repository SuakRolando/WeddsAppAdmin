import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {AddImage, PackageDetails, PackagePrice} from '../../assets/icons';
import {Button, Gap, TextInput_EditPackage} from '../../components';

const EditPackage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentWrapper}>
            <Text style={styles.txtHeader}>Edit Package</Text>
            <Gap height={32} />
            <TouchableOpacity>
              <AddImage />
            </TouchableOpacity>
            <Gap height={48} />
            <TextInput_EditPackage
              onChangeText={value => setName(value)}
              value={name}
            />
            <Gap height={39} />
            <TextInput_EditPackage
              icons={<PackagePrice />}
              title="Package Price"
              placeholder="$42 / month"
              onChangeText={value => setPrice(value)}
              value={price}
            />
            <Gap height={39} />
            <TextInput_EditPackage
              icons={<PackageDetails />}
              title="Details Package"
              placeholder="Kami menawarkan ..."
              height={130}
              onChangeText={value => setDetails(value)}
              value={details}
            />
            <Gap height={38} />
            <View style={styles.buttonStyles}>
              <Button
                backgroundColor="#FF8BD0"
                width={261}
                title="Change"
                color="#000"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
    height: 780,
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
  buttonStyles: {
    marginLeft: 15,
  },
});
