import React from 'react';
import {Text} from 'react-native';
import Appheader from './components/Appheader'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Gallery from './components/gallery';
import Photo from './components/photo';

function App(){
return(
<SafeAreaProvider>
<Appheader/>
</SafeAreaProvider>
)
}

export default App;