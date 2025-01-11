import { Redirect } from "expo-router";
import { View } from "react-native";
import 'react-native-get-random-values';
import Login from "../components/Login";
import { auth } from "../config/FirebaseConfig";


export default function Index() {

  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >

      {user ? 
        
        <Redirect href="/mytrip" /> :
        <Login />
      }
    </View>
  );
}
