import { Feather } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return(
    
    <Tabs screenOptions={{
      headerTitleAlign:"center",
      headerTintColor:"#300",
      headerTitleStyle:{
        fontSize:30,
        fontFamily:"monospace",
        fontWeight:700
      },
      headerStyle:{
        backgroundColor:"#f47b7b"
      },
      tabBarStyle:{
        backgroundColor:"#3B0505",
        height:70,
        paddingTop:10
      },
      tabBarIconStyle:{
        backgroundColor:"#f47b7b",
        width:45,
        height:45,
        borderRadius:100
      }
    
    }}>
<Tabs.Screen name="index" options={{headerTitle:"Presente", tabBarShowLabel:false,
    tabBarIcon: function(){return <Feather name="home" size={28} color={"#3B0505"} /> } }} />
<Tabs.Screen name="futuro" options={{headerTitle:"Futuro",href:null}} />
    </Tabs>
  )
}
