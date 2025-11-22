// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, Alert } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';
// import { useState } from 'react';
// //import { Text } from 'react-native/types_generated/index';

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();
//   const [Count, SetCount] = useState(0);


//   return (
//     <View style={styles.container}>
//       <Text style = {{fontSize:30, color:'white'}}>Count : {Count}</Text>
//       <Button  title="Press Me" onPress ={ () => console.log('HII')}color="green"/>
//     </View>
//   );
// }

// // const ButtonOnPress = () =>{
// //  SetCount 
// // }

// function App() {
//   const isDarkMode = useColorScheme() === 'light';

//   return (
//     <SafeAreaProvider style={styles.container}>
//           <AppContent/>
//     </SafeAreaProvider>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 0.5,

//     justifyContent:'center',
//     textAlign: 'center',
//    // alignItems: 'center',
//    backgroundColor: 'green' 
    
//     },
// });

// export default App;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

export default function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define async function inside useEffect
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // API call
        const data = await res.json(); // Convert to JSON
        console.log('API Response:', data);
        setResponse(data); // Save data in state
      } catch (error) {
        console.error('Error fetching API:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <ScrollView>
          <Text style={styles.text}>
            {JSON.stringify(response, null, 2)}  {/* Show response as JSON */}
          </Text>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});


