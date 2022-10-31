// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   TextInput,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Drinks from '../DataList/Drinks';
// import RNPrint from 'react-native-print';
// import moment from 'moment';

// export default function FirstScreen() {
//   const [searchItem, setSearchItem] = useState('');
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [currentDate, setCurrentDate] = useState('');
//   const [currentTime, setCurrentTime] = useState('');

//   const SelectedItem = item => {
//     let oldStateSelectedItems = selectedItems || [];
//     oldStateSelectedItems.push(item);
//     setSelectedItems([...oldStateSelectedItems]);
//   };

//   // show current date and time
//   useEffect(() => {
//     var date = new Date().getDate();
//     var month = new Date().getMonth() + 1;
//     var year = new Date().getFullYear();

//     setCurrentDate(date + '/' + month + '/' + year);
//     var date = moment().utcOffset('+05:30').format('hh:mm:ss');
//     setCurrentTime(date);
//   }, [currentDate, currentTime]);

//   // Render Flatelist
//   const AllDrinks = ({item}) => {
//     return (
//       <TouchableOpacity
//         style={styles.itemBorder}
//         onPress={() => SelectedItem(item)}>
//         <Image source={item.image} style={styles.imageContainer} />
//         <Text style={styles.textContainer}>{item.productName}</Text>
//         <Text style={styles.textContainer}>Rs.{item.price}</Text>
//       </TouchableOpacity>
//     );
//   };

//   // handle payment button
//   const handlePaymemt = async () => {
//     let printHtml = '';
//     let total = 0;
//     printHtml += `<P style="font-size: 4px;">${currentDate}    ${currentTime}</P>`;
//     selectedItems.forEach((i, index) => {
//       printHtml += `<p style="font-size: 4px;">${i.productName} --- ${i.price}</p>`;
//       total += i.price;
//     });
//     printHtml += `<p style="font-size: 8px;">Total: ${total}</p>`;
//     await RNPrint.print({
//       html: printHtml,
//     });
//     setSelectedItems([]);
//   };

//   const handleReset = async () => {
//     await setSelectedItems([]);
//   };
//   return (
//     <>
//       <SafeAreaView style={styles.viewContainer}>
//         <Text style={styles.headingContainer}>SQUAD KITCHEN</Text>
//         <View>
//           <TextInput
//             placeholder="Search Here....."
//             onChangeText={text => setSearchItem(text)}
//             value={searchItem}
//             style={styles.textInput}
//           />
//         </View>
//         <FlatList
//           data={Drinks}
//           numColumns={3}
//           renderItem={AllDrinks}
//           keyExtractor={item => item.id}
//           showsVerticalScrollIndicator={false}
//         />
//       </SafeAreaView>
//       <View style={styles.statusContainer}>
//         <TouchableOpacity
//           style={{backgroundColor: 'silver', width: '30%'}}
//           onPress={() => handleReset()}>
//           {/* <Text style={{color: 'black'}}>{currentDate}</Text> */}
//           <Text
//             style={{
//               color: 'black',
//               fontSize: 20,
//               alignSelf: 'center',
//               marginTop: 20,
//             }}>
//             Reset
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => handlePaymemt()}
//           style={{
//             backgroundColor: 'green',
//             width: '80%',
//             borderRadius: 10,
//             marginLeft: 10,
//             marginRight: 2,
//           }}>
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 25,
//               marginTop: 20,
//               marginLeft: 80,
//             }}>
//             PRINT
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   imageContainer: {
//     height: 140,
//     width: 115,
//   },
//   viewContainer: {
//     flex: 1,
//     marginLeft: 3,
//     marginRight: 3,
//     marginBottom: 150,
//   },
//   textContainer: {
//     alignSelf: 'center',
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   itemBorder: {
//     borderColor: 'green',
//     borderWidth: 1,
//     marginLeft: 1,
//     marginTop: 2,
//     borderRadius: 5,
//   },
//   textInput: {
//     borderColor: 'silver',
//     borderWidth: 2,
//     borderRadius: 15,
//     width: '98%',
//     alignSelf: 'center',
//     marginTop: 3,
//   },
//   makePayment: {
//     marginTop: 670,
//     position: 'absolute',
//     alignSelf: 'center',
//     marginLeft: 280,
//   },
//   headingContainer: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     color: 'black',
//   },
//   statusContainer: {
//     height: 70,
//     width: '70%',
//     backgroundColor: 'silver',
//     marginTop: 660,
//     position: 'absolute',
//     flexDirection: 'row',
//   },
//   resultContainer: {
//     width: 70,
//     color: 'white',
//     height: 50,
//   },
//   paymetStyle: {
//     marginLeft: 290,
//     color: 'red',
//     width: 130,
//   },
//   rmsContainer: {
//     height: 130,
//     width: '100%',
//     backgroundColor: 'silver',
//     marginTop: 715,
//     position: 'absolute',
//     // flexDirection: 'row',
//     flex: 1,
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Drinks from '../DataList/Drinks';
import RNPrint from 'react-native-print';
import moment from 'moment';

// main component
export default function ThirdPage() {
  const [searchItem, setSearchItem] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Render FlatList
  const AllDrinks = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemBorder}
        onPress={() => SelectedItem(item)}>
        <Image source={item.image} style={styles.imageContainer} />
        <Text style={styles.textContainer}>{item.productName}</Text>
        <Text style={styles.textContainer}>Rs.{item.price}</Text>
      </TouchableOpacity>
    );
  };

  const SelectedItem = item => {
    let oldStateSelectedItems = selectedItems || [];
    oldStateSelectedItems.push(item);
    setSelectedItems([...oldStateSelectedItems]);
  };

  // handle reset button
  const handleReset = async () => {
    await setSelectedItems([]);
  };

  // handle payment button
  const handlePaymemt = async () => {
    let printHtml = '';
    let total = 0;
    printHtml += `<P style="font-size: 4px;">${currentDate}    ${currentTime}</P>`;
    selectedItems.forEach((i, index) => {
      printHtml += `<p style="font-size: 4px;">${i.productName} --- ${i.price}</p>`;
      total += i.price;
    });
    printHtml += `<p style="font-size: 8px;">Total: ${total}</p>`;
    await RNPrint.print({
      html: printHtml,
    });
    setSelectedItems([]);
  };
  return (
    <>
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.headingContainer}>SQUAD KITCHEN</Text>
        <TextInput
          placeholder="Search Here....."
          placeholderTextColor="black"
          onChangeText={text => setSearchItem(text)}
          value={searchItem}
          style={styles.InputFeild}
        />
        <View style={styles.listView}>
          <FlatList
            data={Drinks}
            numColumns={3}
            renderItem={AllDrinks}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
      <View style={styles.secondView}>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => handleReset()}>
          {/* <Text style={{color: 'black'}}>{currentDate}</Text> */}
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePaymemt()}
          style={styles.printButton}>
          <Text style={styles.printText}>PRINT</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginBottom: '43%',
  },
  headingContainer: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
  },
  InputFeild: {
    borderColor: 'silver',
    borderWidth: 2,
    borderRadius: 15,
    width: '98%',
    alignSelf: 'center',
    marginTop: 3,
    paddingLeft: 30,
  },
  textContainer: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    height: Dimensions.get('screen').height / 5,
    width: Dimensions.get('screen').width / 2,
  },
  itemBorder: {
    borderColor: 'green',
    borderRadius: 5,
    borderWidth: 2,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 2,
  },
  listView: {
    marginTop: '1%',
    marginLeft: '1%',
    marginRight: '1%',
    marginBottom: '10%',
  },
  secondView: {
    height: Dimensions.get('screen').height / 7,
    width: Dimensions.get('screen').width,
    // backgroundColor: 'red',
    marginTop: '177%',
    position: 'absolute',
    flexDirection: 'row',
  },
  resetButton: {
    backgroundColor: 'silver',
    width: 150,
    height: 80,
    marginLeft: 4,
    // marginTop: 20,
    borderRadius: 10,
  },
  resetText: {
    color: 'white',
    fontSize: 25,
    paddingTop: 20,
    alignSelf: 'center',
  },
  printButton: {
    backgroundColor: 'blue',
    width: 240,
    height: 80,
    // marginTop: 20,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 2,
  },
  printText: {
    color: 'white',
    fontSize: 25,
    marginTop: 20,
    alignSelf: 'center',
  },
});
