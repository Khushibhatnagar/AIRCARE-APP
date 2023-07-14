//imports provide necessary functionality and components to build the app
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground,View, TouchableOpacity,Image, TextInput,FlatList,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import * as FileSystem from 'expo-file-system';
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';



//A stack navigator is a type of navigation component that manages a stack of screens
const Stack = createStackNavigator();



//includes a long list of screens, each representing a different section or feature of the app
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Queries" component={QueriesScreen} options={{ title: 'Queries' }} />
        <Stack.Screen name="Airportchatbot" component={AirportchatbotScreen} options={{ title: 'Airportchatbot' }} />
        <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} options={{ title: 'Flight Details' }} />
        <Stack.Screen name="TicketNo" component={TicketNoScreen} options={{ title: 'Ticket No' }} />
        <Stack.Screen name="BoardingGate" component={BoardingGateScreen} options={{ title: 'Boarding Gate' }} />
        <Stack.Screen name="Others" component={OthersScreen} options={{ title: 'Others' }} />
        <Stack.Screen name="Lounge" component={LoungeScreen} options={{ title: 'Lounge' }} />
        <Stack.Screen name="DomesticLounge" component={DomesticLoungeScreen} options={{ title: 'Domestic Lounge' }} />
        <Stack.Screen name="InternationalLounge" component={InternationalLoungeScreen} options={{ title: 'International Lounge' }} />
        <Stack.Screen name="Fashion" component={FashionScreen} options={{ title: 'Fashion' }} />
        <Stack.Screen name="Shopping" component={ShoppingScreen} options={{ title: 'Shopping' }} />
        <Stack.Screen name="Arcelia" component={ArceliaScreen} options={{ title: 'Arclia' }} />
        <Stack.Screen name="ArtPort by IRHPL" component={ArtPortbyIRHPLScreen} options={{ title: 'ArtPort by IRHPL' }} />
        <Stack.Screen name="Caratlane" component={CaratlaneScreen} options={{ title: 'Caratlane' }} />
        <Stack.Screen name="Cococart" component={CococartScreen} options={{ title: 'Cococart' }} />
        <Stack.Screen name="FabIndia" component={FabIndiaScreen} options={{ title: 'FabIndia' }} />
        <Stack.Screen name="Hidesign" component={HidesignScreen} options={{ title: 'Hidesign' }} />
        <Stack.Screen name="Forest Essentials" component={ForestEssentialsScreen} options={{ title: 'Forest Essentials' }} />
        <Stack.Screen name="Fossil" component={FossilScreen} options={{ title: 'Fossil' }} />
        <Stack.Screen name="Hamleys" component={HamleysScreen} options={{ title: 'Hamleys' }} />
        <Stack.Screen name="Just In Vouge" component={JustInVougeScreen} options={{ title: 'Just In Vouge' }} />
        <Stack.Screen name="MAC by Shoppers Stop" component={MACbyShoppersStopScreen} options={{ title: 'MAC by Shoppers Stop' }} />
        <Stack.Screen name="Mithaas by Shoppers Stop" component={MithaasbyShoppersStopScreen} options={{ title: 'Mithaas by Shoppers Stop' }} />
        <Stack.Screen name="Rare Planet" component={RarePlanetScreen} options={{ title: 'Rare Planet' }} />
        <Stack.Screen name="Relay" component={RelayScreen} options={{ title: 'Relay' }} />
        <Stack.Screen name="SAKKARE & SMOOR by IRHPL" component={SAKKARESMOORbyIRHPLScreen} options={{ title: 'SAKKARE & SMOOR by IRHPL' }} />
        <Stack.Screen name="Shoppers Stop" component={ShoppersStopScreen} options={{ title: 'Shoppers Stop' }} />
        <Stack.Screen name="Sunglass Hut" component={SunglassHutScreen} options={{ title: 'Sunglass Hut' }} />
        <Stack.Screen name="Swarovski" component={SwarovskiScreen} options={{ title: 'Swarovski' }} />
        <Stack.Screen name="TeaPort by IRHPL" component={TeaPortbyIRHPLScreen} options={{ title: 'TeaPort by IRHPL' }} />
        <Stack.Screen name="WK LIFE" component={WKLIFEScreen} options={{ title: 'WK LIFE' }} />
        <Stack.Screen name="Health" component={HealthScreen} options={{ title: 'Health' }} />
        <Stack.Screen name="Fever" component={FeverScreen} options={{ title: 'Fever' }} />
        <Stack.Screen name="Bodyache" component={BodyacheScreen} options={{ title: 'Bodyache' }} />
        <Stack.Screen name="Headache" component={HeadacheScreen} options={{ title: 'Headache' }} />
        <Stack.Screen name="Other" component={Others2Screen} options={{ title: 'Other' }} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}



//The HomeScreen component displays an image background with four clickable tiles. Each tile navigates to a different screen when clicked.
const HomeScreen = ({ navigation }) => {
  const handleFlightDetailsClick = () => {
    navigation.navigate('FlightDetails');
  };

  const handleTicketNoClick = () => {
    navigation.navigate('TicketNo');
  };

  const handleBoardingGateClick = () => {
    navigation.navigate('BoardingGate');
    
  };
  const handleOthersClick = () => {
    navigation.navigate('Others');
    
  };

  return (
    <ImageBackground
      source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
      style={styles.container}
    >
      <Text style={styles.header1}>AIRCARE</Text>
      <View style={styles.tileContainer}>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => handleFlightDetailsClick('FlightDetails')}
        >
          <Text style={styles.tileText}>FLIGHT{'\n'}SCHEDULE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => handleTicketNoClick('TicketNo')}
        >
          <Text style={styles.tileText}>TICKET{'\n'}STATUS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => handleBoardingGateClick('BoardingGate')}
        >
          <Text style={styles.tileText}>BOARDING{'\n'}GATE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => handleOthersClick('Others')}
        >
          <Text style={styles.tileText}>OTHERS</Text>
        </TouchableOpacity>
      </View>

      </ImageBackground>
  );
};






//The OthersScreen component displays an image background with four clickable options:
//Lounge, Fashion, Health, and Queries. When clicked, each option navigates to a different screen.
const OthersScreen = ({ navigation }) => {
  const handleLoungeClick = () => {
    navigation.navigate('Lounge');
  };

  const handleFashionClick = () => {
    navigation.navigate('Fashion');
  };

  const handleHealthClick = () => {
    navigation.navigate('Health');
  };

  const handleQueriesClick = () => {
    navigation.navigate('Queries');
  };

  


  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <Text style={styles.header}>Others</Text>
      <Text>Choose an option:</Text>
      <TouchableOpacity style={styles.option} onPress={handleLoungeClick}>
        <Text style={styles.optionText}>Lounge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleFashionClick}>
        <Text style={styles.optionText}>Fashion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleHealthClick}>
        <Text style={styles.optionText}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleQueriesClick}>
        <Text style={styles.optionText}>Queries</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};








//The FlightDetailsScreen component displays a header, an input field, and a submit button. 
//When the submit button is pressed, flight details based on the entered flight number are displayed if available.
export const FlightDetailsScreen = () => {
  const [code, setCode] = useState('');
  const [data, setData] = useState(null);

  const handleSearch = () => {
    if (code === "6290") {
      setData({
        Airline: "AeroMexico",
        FlightNumber: "6290",
        Status: "Scheduled",
        "Operated By": "KLM Royal Dutch Airlines1695",
        DepartureTime: "12:35 PM, Jul 24 2023",
        ArrivalTime: "2:35 PM, Jul 24 2023"
      });
    } else if (code === "6552") {
      setData({
        Airline: "AeroMexico",
        FlightNumber: "6552",
        Status: "Scheduled",
        "Operated By": "KLM Royal Dutch Airlines1697",
        DepartureTime: "8:50 PM, Jul 24 2023",
        ArrivalTime: "10:50 PM, Jul 24 2023"
      });
    } else if (code === "5296") {
      setData({
        Airline: "Air Baltic Corp",
        FlightNumber: "5296",
        Status: "Scheduled",
        "Operated By": "TAP Portugal673",
        DepartureTime: "1:55 PM, Jul 24 2023",
        ArrivalTime: "4:00 PM, Jul 24 2023"
      });
    } else if (code === "8259") {
      setData({
        Airline: "Azores Airlines",
        FlightNumber: "8259",
        Status: "Scheduled",
        "Operated By": "TAP Portugal675",
        DepartureTime: "5:20 PM, Jul 24 2023",
        ArrivalTime: "7:25 PM, Jul 24 2023"
      });
    } else if (code === "8633") {
      setData({
        Airline: "Azores Airlines",
        FlightNumber: "8633",
        Status: "Scheduled",
        "Operated By": "TAP Portugal673",
        DepartureTime: "1:55 PM, Jul 24 2023",
        ArrivalTime: "4:00 PM, Jul 24 2023"
      });
    } else if (code === "7230") {
      setData({
        Airline: "Azul Airlines",
        FlightNumber: "7230",
        Status: "Scheduled",
        "Operated By": "TAP Portugal669",
        DepartureTime: "7:00 AM, Jul 24 2023",
        ArrivalTime: "9:05 AM, Jul 24 2023"
      });
    } else if (code === "7238") {
      setData({
        Airline: "Azul Airlines",
        FlightNumber: "7238",
        Status: "Scheduled",
        "Operated By": "TAP Portugal673",
        DepartureTime: "1:55 PM, Jul 24 2023",
        ArrivalTime: "4:00 PM, Jul 24 2023"
      });
    } else if (code === "7663") {
      setData({
        Airline: "China Southern Airlines",
        FlightNumber: "7663",
        Status: "Scheduled",
        "Operated By": "KLM Royal Dutch Airlines1693",
        DepartureTime: "8:55 AM, Jul 24 2023",
        ArrivalTime: "10:55 AM, Jul 24 2023"
      });
    } else if (code === "7719") {
      setData({
        Airline: "China Southern Airlines",
        FlightNumber: "7719",
        Status: "Scheduled",
        "Operated By": "KLM Royal Dutch Airlines1697",
        DepartureTime: "8:50 PM, Jul 24 2023",
        ArrivalTime: "10:50 PM, Jul 24 2023"
      });
    } else if (code === "9363") {
      setData({
        Airline: "Delta Air Lines",
        FlightNumber: "9363",
        Status: "Scheduled",
        "Operated By": "KLM Royal Dutch Airlines1693",
        DepartureTime: "8:55 AM, Jul 24 2023",
        ArrivalTime: "10:55 AM, Jul 24 2023"
      });
    } else if (code === "7962") {
      setData({
        Airline: "EasyJet",
        FlightNumber: "7962",
        Status: "Scheduled",
        "Operated By": "-",
        DepartureTime: "3:45 PM, Jul 24 2023",
        ArrivalTime: "5:50 PM, Jul 24 2023"
      });
    } else if (code === "9441") {
      setData({
        Airline: "Egyptair",
        FlightNumber: "9441",
        Status: "Scheduled",
        "Operated By": "TAP Portugal675",
        DepartureTime: "5:20 PM, Jul 24 2023",
        ArrivalTime: "7:25 PM, Jul 24 2023"
      });
    } else if (code === "6773") {
      setData({
        Airline: "Finnair",
        FlightNumber: "6773",
        Status: "Scheduled",
        "Operated By": "TAP Portugal671",
        DepartureTime: "7:30 PM, Jul 24 2023",
        ArrivalTime: "9:35 PM, Jul 24 2023"
      });
    } else if (code === "5564") {
      setData({
        Airline: "GOL Linhas Aereas",
        FlightNumber: "5564",
        Status: "Scheduled",
        "Operated By": "KLM Royal Dutch Airlines1695",
        DepartureTime: "12:35 PM, Jul 24 2023",
        ArrivalTime: "2:35 PM, Jul 24 2023"
      });
    } else {
      setData(null);
    }
  };
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <Text style={styles.header3}>Flight Schedule</Text>
      <Text style={styles.header4}>Enter Flight Number</Text>
      <TextInput
        style={styles.searchBar}
        onChangeText={(text) => setCode(text)}
        value={code}
        placeholder="Enter Flight Number"
      />
      <View style={styles.submitButton}>
        <Button title="Submit" onPress={handleSearch} color="black" />
      </View>
      {data ? (
       <View style={styles.container1}>
       <View style={styles.row}>
         <Text style={styles.column}>Airline</Text>
         <Text style={styles.column}>Flight Number</Text>
         <Text style={styles.column}>Departure Time</Text>
         <Text style={styles.column}>Arrival Time</Text>
       </View>
       <View style={styles.row}>
         <Text style={styles.value}>{data.Airline}</Text>
         <Text style={styles.value}>{data.FlightNumber}</Text>
         <Text style={styles.value}>{data.DepartureTime}</Text>
         <Text style={styles.value}>{data.ArrivalTime}</Text>
       </View>
     </View>
     
      ) : (
        <Text>No data found.</Text>
      )}
    </ImageBackground>
  );
      }








//The TicketNoScreen component displays an image background with an input field to enter a booking reference. 
//After clicking the submit button, the screen shows ticket details if the reference is found.
export const TicketNoScreen = () => {
  const [code, setCode] = useState('');
  const [data, setData] = useState(null);

  const handleSearch = () => {
    if (code === "AIR629") {
      setData({
        Bookingref:"AIR629",
        Status: "Confirmed",
        Airline: "AeroMexico",
        FlightNumber: "6290",
        DepartureTime: "12:35 PM, Jul 24 2023",
        ArrivalTime: "2:35 PM, Jul 24 2023",
        pn: "Khushi Bhatnagar",
        DepartureCity:"Delhi",
        ArrivalCity:"Bengaluru",
        DepartureGate:"1A",
        ArrivalGate:"3B"
        
      });
    } else if (code === "AIR655") {
      setData({
        Bookingref:"AIR655",
        Status: "Confirmed",
        pn:"Chhavi Bhatnagar",
        Airline: "AeroMexico",
        FlightNumber: "6552",
        DepartureTime: "8:50 PM, Jul 24 2023",
        ArrivalTime: "10:50 PM, Jul 24 2023",
        DepartureCity:"London",
        ArrivalCity:"Bengaluru",
        DepartureGate:"17A",
        ArrivalGate:"12A"
      });
    } else if (code === "DLA529") {
      setData({
        Bookingref:"DLA529",
        Status: "Confirmed",
        pn:"Rocco Bhatnagar",
        Airline: "Air Baltic Corp",
        FlightNumber: "5296",
        DepartureTime: "1:55 PM, Jul 24 2023",
        ArrivalTime: "4:00 PM, Jul 24 2023",
        ArrivalCity:"Delhi",
        DepartureCity:"Bengaluru",
        DepartureGate:"15A",
        ArrivalGate:"2B"

      });
    } else if (code === "ARR825") {
      setData({
        Bookingref:"ARR825",
        Status: "Confirmed",
        pn:"Shannon Smith",
        Airline: "Azores Airlines",
        FlightNumber: "8259",
        DepartureTime: "5:20 PM, Jul 24 2023",
        ArrivalTime: "7:25 PM, Jul 24 2023",
        ArrivalCity:"Scotland",
        DepartureCity:"Bengaluru",
        DepartureGate:"1A",
        ArrivalGate:"31B"

      });
    } else if (code === "AIR723") {
      setData({
        Bookingref:"AIR723",
        Status: "Confirmed",
        pn:"Hannah Tonkin",
        Airline: "Azores Airlines",
        FlightNumber: "8633",
        DepartureTime: "1:55 PM, Jul 24 2023",
        ArrivalTime: "4:00 PM, Jul 24 2023",
        ArrivalCity:"London",
        DepartureCity:"Bengaluru",
        DepartureGate:"5A",
        ArrivalGate:"8A"
      });
    } else if (code === "RIZ723") {
      setData({
        Bookingref:"RIZ723",
        Status: "Confirmed",
        pn:"Alex William",
        Airline: "Azul Airlines",
        FlightNumber: "7230",
        DepartureTime: "7:00 AM, Jul 24 2023",
        ArrivalTime: "9:05 AM, Jul 24 2023",
        DepartureCity:"Mumbai",
        ArrivalCity:"Bengaluru",
        DepartureGate:"7A",
        ArrivalGate:"6B"
      });
    } else if (code === "LJK766") {
      setData({
        Bookingref:"LJK766",
        Status: "Confirmed",
        pn:"Becca Smith",
        Airline: "Azul Airlines",
        FlightNumber: "7238",
        DepartureTime: "1:55 PM, Jul 24 2023",
        ArrivalTime: "4:00 PM, Jul 24 2023",
        DepartureCity:"Franfurt",
        ArrivalCity:"Bengaluru",
        DepartureGate:"7A",
        ArrivalGate:"6B"
      });
    } else if (code === "JKA771") {
      setData({
        Bookingref:"JKA771",
        Status: "Confirmed",
        pn:"Saumya Chaudhary",
        Airline: "China Southern Airlines",
        FlightNumber: "7663",
        DepartureTime: "8:55 AM, Jul 24 2023",
        ArrivalTime: "10:55 AM, Jul 24 2023",
        DepartureCity:"Mumbai",
        ArrivalCity:"Bengaluru",
        DepartureGate:"17A",
        ArrivalGate:"2B"
      });
    } else if (code === "ADC936") {
      setData({
        Bookingref:"ADC936",
        Status: "Confirmed",
        pn:"Navya Ray",
        Airline: "China Southern Airlines",
        FlightNumber: "7719",
        DepartureTime: "8:50 PM, Jul 24 2023",
        ArrivalTime: "10:50 PM, Jul 24 2023",
        DepartureCity:"Bengaluru",
        ArrivalCity:"Paris",
        DepartureGate:"7A",
        ArrivalGate:"6B"
      });
    } else if (code === "WXA796") {
      setData({
        Bookingref:"WXA796",
        Status: "Confirmed",
        pn:"Janvi Verma",
        Airline: "Delta Air Lines",
        FlightNumber: "9363",
        DepartureTime: "8:55 AM, Jul 24 2023",
        ArrivalTime: "10:55 AM, Jul 24 2023",
        DepartureCity:"Bengaluru",
        ArrivalCity:"Delhi",
        DepartureGate:"18A",
        ArrivalGate:"3B"
      });
    } else if (code === "AXW944") {
      setData({
        Bookingref:"AXW944",
        Status: "Confirmed",
        pn:"Mani Aggarwal",
        Airline: "EasyJet",
        FlightNumber: "7962",
        DepartureTime: "3:45 PM, Jul 24 2023",
        ArrivalTime: "5:50 PM, Jul 24 2023",
        DepartureCity:"Bengaluru",
        ArrivalCity:"Mumbai",
        DepartureGate:"1A",
        ArrivalGate:"19B"
      });
    } else if (code === "LKH677") {
      setData({
        Bookingref:"LKH677",
        Status: "Confirmed",
        pn:"Sreekruti Rai",
        Airline: "Egyptair",
        FlightNumber: "9441",
        DepartureTime: "5:20 PM, Jul 24 2023",
        ArrivalTime: "7:25 PM, Jul 24 2023",
        DepartureCity:"Bengaluru",
        ArrivalCity:"Paris",
        DepartureGate:"10B",
        ArrivalGate:"3B"
      });
    } else if (code === "KJT556") {
      setData({
        Bookingref:"KJT556",
        Status: "Confirmed",
        pn:"Tarini Aggarwal",
        Airline: "Finnair",
        FlightNumber: "6773",
        DepartureTime: "7:30 PM, Jul 24 2023",
        ArrivalTime: "9:35 PM, Jul 24 2023",
        DepartureCity:"Bengaluru",
        ArrivalCity:"London",
        DepartureGate:"5A",
        ArrivalGate:"6A"
      });
    } else {
      setData(null);
    }
  };
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <Text style={styles.header3}>Ticket Status</Text>
      <Text style={styles.header4}>Enter Booking Reference</Text>
      
      <TextInput
        style={styles.searchBar}
        onChangeText={(text) => setCode(text)}
        value={code}
        placeholder="Enter Booking Reference"
      />
      <View style={styles.submitButton}>
        <Button title="Submit" onPress={handleSearch} color="black" />
      </View>
      {data ? (
      <View style={styles.container1}>
     
        <View style={styles.row}>
          <Text style={styles.column}>PNR</Text>
          <Text style={styles.column}>Passenger Name</Text>
          <Text style={styles.column}>Status</Text>
          <Text style={styles.column}>Flight Number</Text>
          <Text style={styles.column}>Airline</Text>
          <Text style={styles.column}>Departure City</Text>
          <Text style={styles.column}>Departure Gate</Text>
          <Text style={styles.column}>Departure Time</Text>
          <Text style={styles.column}>Arrival City</Text>
          <Text style={styles.column}>Arrival Gate</Text>
          <Text style={styles.column}>Arrival Time</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.value}>{data.Bookingref}</Text>
          <Text style={styles.value}>{data.pn}</Text>
          <Text style={styles.value}>{data.Status}</Text>
          <Text style={styles.value}>{data.FlightNumber}</Text>
          <Text style={styles.value}>{data.Airline}</Text>
          <Text style={styles.value}>{data.DepartureCity}</Text>
          <Text style={styles.value}>{data.DepartureGate}</Text>
          <Text style={styles.value}>{data.DepartureTime}</Text>
          <Text style={styles.value}>{data.ArrivalCity}</Text>
          <Text style={styles.value}>{data.ArrivalGate}</Text>
          <Text style={styles.value}>{data.ArrivalTime}</Text>
        </View>
      </View>
   
    
      ) : (
        <Text>No data found.</Text>
      )}
    </ImageBackground>
  );
      }









//The BoardingGateScreen component displays an image background with an input field to enter a booking reference.
//After clicking the submit button, it shows the terminal, gate number, and gate status corresponding to the entered reference, if found.
export const BoardingGateScreen = () => {
  const [code, setCode] = useState('');
  const [data, setData] = useState(null);

  const handleSearch = () => {
    if (code === "AIR629") {
      setData({
        Terminal: "1",
        GateNumber: "2A",
        Gate:"Open"
      });
    } else if (code === "AIR655") {
      setData({
        Terminal: "2",
        GateNumber: "2A",
        Gate:"Closed"
      });
    } else if (code === "DLA529") {
      setData({
        Terminal: "1",
        GateNumber: "17A",
        Gate:"Open"
      });
    } else if (code === "ARR825") {
      setData({
        Terminal: "1",
        GateNumber: "21A",
        Gate:"Open"
      });
    } else if (code === "LNA863") {
      setData({
        Terminal: "2",
        GateNumber: "25A",
        Gate:"Closed"
      });
    } else if (code === "AIR723") {
      setData({
        Terminal: "2",
        GateNumber: "32A",
        Gate:"Closed"
      });
    } else if (code === "RIZ723") {
      setData({
        Terminal: "1",
        GateNumber: "15A",
        Gate:"Open"
      });
    } else if (code === "LJK766") {
      setData({
        Terminal: "1",
        GateNumber: "3A",
        Gate:"Open"
      });
    } else if (code === "JKA771") {
      setData({
        Terminal: "1",
        GateNumber: "8A",
        Gate:"Open"
      });
    } else if (code === "ADC936") {
      setData({
        Terminal: "1",
        GateNumber: "12A",
        Gate:"Closed"
      });
    } else if (code === "WXA796") {
      setData({
        Terminal: "2",
        GateNumber: "10A",
        Gate:"Closed"
      });
    } else if (code === "AXW944") {
      setData({
        Terminal: "1",
        GateNumber: "18A",
        Gate:"Open"
      });
    } else if (code === "LKH677") {
      setData({
        Terminal: "2",
        GateNumber: "18A",
        Gate:"Open"
      });
    } else if (code === "KJT556") {
      setData({
        Terminal: "1",
        GateNumber: "28A",
        Gate:"Open"
      });
    } else {
      setData(null);
    }
  };
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <Text style={styles.header3}>Boarding Gate</Text>
      <Text style={styles.header4}>Enter Booking Reference</Text>
      <TextInput
        style={styles.searchBar}
        onChangeText={(text) => setCode(text)}
        value={code}
        placeholder="Enter Booking Reference"
      />
      <View style={styles.submitButton}>
        <Button title="Submit" onPress={handleSearch} color="black" />
      </View>
      {data ? (
       <View>
        <View style={styles.container1}>
  <View style={styles.row}>
    <Text style={styles.column}>Terminal   </Text>
    <Text style={styles.column}>Gate    Number   </Text>
    <Text style={styles.column}>Gate Status</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.value}>{data.Terminal}</Text>
    <Text style={styles.value}>{data.GateNumber}</Text>
     <Text style={styles.value}>{data.Gate}</Text>
  </View>
</View>
</View>
      ) : (
        <Text>No data found.</Text>
      )}
    </ImageBackground>
  );
      }
  














//The LoungeScreen component displays an image background with two options: "Domestic Lounge" and "International Lounge". 
//Clicking on either option navigates to the corresponding lounge screen.
const LoungeScreen = ({ navigation }) => {
  const handleDomesticLoungeClick = () => {
    navigation.navigate('DomesticLounge');
  };

  const handleInternationalLoungeClick = () => {
    navigation.navigate('InternationalLounge');
  };


  return (
     <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <Text style={styles.header}>Lounge</Text>
      <Text>Choose a lounge:</Text>
      <TouchableOpacity style={styles.option} onPress={handleDomesticLoungeClick}>
        <Text style={styles.optionText}>Domestic Lounge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleInternationalLoungeClick}>
        <Text style={styles.optionText}>International Lounge</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};












//Displays a header with the text "Domestic Lounge" and 
//provides information about the location of the lounge.
const DomesticLoungeScreen = () => {
  return (
     <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <View style={styles.imageContainer}>
       <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/UL-6-6.60ab12daa77a36738e16.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      
      <View style={styles.imageGap} />
      <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/UL-1-1.797dbd283141fe778fb3.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>

      <View style={styles.imageGap} />
      <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/UL-2-2.12d0d3561fefe97ea290.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>


      <View style={styles.imageGap} />
      <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/UL-3-3.bdd78b849f9961f43603.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>

      <View style={styles.imageGap} />
      <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/UL-4-4.38aeddbff66eb4be00bc.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      </View>
      <Text style={styles.header3}>Domestic Lounge</Text>
      <Text style={styles.header}> {'\n'}Location:{'\n'}Terminal 1. Airside - Domestic and in transit Departures. Level 2, above Swarovski, opposite Fossil.
      {'\n'}Terminal 2. Airside - Domestic and in transit Departures. After Security Checks, Level 4.</Text>
    </ImageBackground>
  );
};












//The InternationalLoungeScreen component displays an image background with several images 
//representing different areas of the international lounge.
export const InternationalLoungeScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <View style={styles.imageContainer}>
       <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/BIA2041.193c24ac1bafc25c5769.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      
      <View style={styles.imageGap} />
      <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/Cafe-1.8b11e3ee8748e14a6969.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>

      <View style={styles.imageGap} />
      <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/Wellnesszone-1.a0b394541064dad67054.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>

      <View style={styles.imageGap} />
      <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/Loungebar.b307d9f7018d48dfd2c3.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>

      <View style={styles.imageGap} />
      <TouchableOpacity>
      <Image source={{uri: 'https://www.bengaluruairport.com/static/media/VIP-1.8e03be20c3aa89a777b6.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>


      </View>
      <Text style={styles.header3}>International Lounge</Text>
      <Text style={styles.header}>  {'\n'}                Location:{'\n'}                Terminal 1. Airside - International and in transit Departures. Level 1, opposite Starbucks,{'\n'}                next to Forest Essentials.</Text>
    </ImageBackground>

      
  );
};
















//The FashionScreen component displays an image background with a header titled "Shopping" and a list of shops to choose from. 
//Each shop is represented by a button with its name. When a button is clicked, it navigates to the corresponding shop's page using React Navigation.

const FashionScreen = ({ navigation }) => {
  const handleShoppingClick = () => {
      navigation.navigate('Shopping');
    };
  const handleArceliaClick = () => {
      navigation.navigate('Arcelia');
    };
  const handleArtPortbyIRHPLClick = () => {
      navigation.navigate('ArtPort by IRHPL');
    };
  const handleCaratlaneClick = () => {
      navigation.navigate('Caratlane');
    };
  const handleCococartClick = () => {
      navigation.navigate('Cococart');
    };
  const handleFabIndiaClick = () => {
      navigation.navigate('FabIndia');
    };
  const handleForestEssentialsClick = () => {
      navigation.navigate('Forest Essentials');
    };
  const handleFossilClick = () => {
      navigation.navigate('Fossil');
    };
  const handleRarePlanetClick = () => {
      navigation.navigate('Rare Planet');
    };
  const handleHamleysClick = () => {
      navigation.navigate('Hamleys');
    };
  const handleJustInVougeClick = () => {
      navigation.navigate('Just In Vouge');
    };
  const handleHidesignClick = () => {
      navigation.navigate('Hidesign');
    };
  const handleMACbyShoppersStopClick = () => {
      navigation.navigate('MAC by Shoppers Stop');
    };
  const handleMithaasbyShoppersStopClick = () => {
      navigation.navigate('Mithaas by Shoppers Stop');
    };
  const handleRelayClick = () => {
      navigation.navigate('Relay');
    };
  const handleSAKKARESMOORbyIRHPLClick = () => {
      navigation.navigate('SAKKARE & SMOOR by IRHPL');
    };
  const handleShoppersStopClick = () => {
      navigation.navigate('Shoppers Stop');
    };
  const handleSunglassHutClick = () => {
      navigation.navigate('Sunglass Hut');
    };
  const handleSwarovskiClick = () => {
      navigation.navigate('Swarovski');
    };
  const handleTeaPortbyIRHPLClick = () => {
      navigation.navigate('TeaPort by IRHPL');
    };
  const handleWKLIFEClick = () => {
      navigation.navigate('WK LIFE');
    };


    return (
        <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
        <Text style={styles.header}>Shopping</Text>
        <Text style={styles.optionText}>Choose a shop:</Text>
        <TouchableOpacity style={styles.option} onPress={handleShoppingClick}>
          <Text style={styles.optionText}>Accessorize</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleArceliaClick}>
          <Text style={styles.optionText}>Arcelia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleArtPortbyIRHPLClick}>
          <Text style={styles.optionText}>ArtPort by IRHPL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleCaratlaneClick}>
          <Text style={styles.optionText}>Caratlane</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleCococartClick}>
          <Text style={styles.optionText}>Cococart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleFabIndiaClick}>
          <Text style={styles.optionText}>FabIndia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleForestEssentialsClick}>
          <Text style={styles.optionText}>Forest Essentials</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleFossilClick}>
          <Text style={styles.optionText}>Fossil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleHamleysClick}>
          <Text style={styles.optionText}>Hamleys</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleJustInVougeClick}>
          <Text style={styles.optionText}>Just In Vouge</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleHidesignClick}>
          <Text style={styles.optionText}>Hidesign</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleMACbyShoppersStopClick}>
          <Text style={styles.optionText}>MAC by Shoppers Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleMithaasbyShoppersStopClick}>
          <Text style={styles.optionText}>Mithaas by Shoppers Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleRarePlanetClick}>
          <Text style={styles.optionText}>Rare Planet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleRelayClick}>
          <Text style={styles.optionText}>Relay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleSAKKARESMOORbyIRHPLClick}>
          <Text style={styles.optionText}>SAKKARE & SMOOR by IRHPL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleShoppersStopClick}>
          <Text style={styles.optionText}>Shoppers Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleSunglassHutClick}>
          <Text style={styles.optionText}>Sunglass Hut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleSwarovskiClick}>
          <Text style={styles.optionText}>Swarovski</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleTeaPortbyIRHPLClick}>
          <Text style={styles.optionText}>TeaPort by IRHPL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleWKLIFEClick}>
          <Text style={styles.optionText}>WK LIFE</Text>
        </TouchableOpacity>

      </ImageBackground>
    );
};











//The ShoppingScreen component displays an image background with the logo of the shop "Accessorize". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
export const ShoppingScreen = () => {
  return (
      <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://www.accessorize.com/on/demandware.static/-/Library-Sites-accessorize-content-global/default/dw8340e41c/global/logo.png'}} style={styles.Imageapp} />
      </TouchableOpacity>
      <Text style={styles.header6}>Accessorize</Text>
      <Text style={styles.header5}> {'\n'}Ultimate stop for all New women's fashions accessories have landed! Our Accessorize bags, purses, jewellery, shoes, accessories, gifts and beachwear will get you …at BLR Aiprort
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};













//Displays an image background with the logo of the shop "Arcelia". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const ArceliaScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
     
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Arcelia_c838cdd940.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Arcelia</Text>
      <Text style={styles.header5}> {'\n'}A great fragrance is much more than just the fragrance.{'\n'}It’s the thought, the story and the approach behind its creation that makes it memorable.{'\n'}We truly believe that a great fragrance starts with its aroma and ends with myriad of memories and experiences enabling a story to be born.{'\n'}The biggest ingredient common in every fragrance we create is heart.{'\n'}Our fragrances start with the aroma, flirt with your memories, and find a place to settle down in your heart.{'\n'}This fragrance journey lets you dive deeper than the surface of its aroma to create your own story by shoppers stop
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};













//Displays an image background with the logo of the shop "ArtPortbyIRHPL". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const ArtPortbyIRHPLScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/ITC_0667b57681.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>ArtPort by IRHPL</Text>
      <Text style={styles.header5}> {'\n'}ArtPort by IRHPL  (Art & Artifacts) store is a fusion of contemporary-classic finishes with traditional patterns, which{'\n'}represents India's Art and Artifacts from Indian regions with rich heritage. Art, Artifacts &  Souvenir for yourself, your{'\n'}friends and family from all parts of India starting from Kashmiri's Pashmina Shawls to Palm Leaf painting of Kanyakumari{'\n'}are all available under one roof.
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};










//Displays an image background with the logo of the shop "Caratlane". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const CaratlaneScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/caratline_37fd6646e5.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Caratlane</Text>
      <Text style={styles.header5}> {'\n'}Visit Caratlane - A Tanishq partnership to discover beautiful fine jewellery for everyday wear.{'\n'}Check out personalised gifts for all occasions starting at ₹5000. 
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};










//Displays an image background with the logo of the shop "Hamleys". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const HamleysScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Hamleys_02_629e79a29c.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Hamleys</Text>
      <Text style={styles.header5}> {'\n'}For 261 years, Hamleys of London has been The Finest Toy Shop in the World bringing magical experiences and joy to children of all ages.{'\n'}Hamleys’ rich history began with William Hamley, a Cornishman from Bodmin, England.{'\n'}
      William Hamley dreamed of the best toy shop in the world when opening his toy shop at Holborn, London in 1760.
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};














//Displays an image background with the logo of the shop "Cococart". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const CococartScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Cococart_Logo_01_81ab96d8e0.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Cococart</Text>
      <Text style={styles.header5}> {'\n'}Welcome to CocoCart—your prayers answered and your penance rewarded.{'\n'}A immense collectiono of imported chocolates for every type of person out there, cococart is the gatekeeper to a world of delicious,decadent chocolates.
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic 
      </Text>
    </ImageBackground>
  );
};













//Displays an image background with the logo of the shop "FabIndia". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const FabIndiaScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Fabindia_8906f4dc64.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>FabIndia</Text>
      <Text style={styles.header5}>  {'\n'}                                    Fabindia is India's largest private platform for products that are made from traditional techniques, skills and hand-based processes. {'\n'}                                    Fabindia links over 55,000 craft based rural producers to modern urban markets, thereby creating a base for skille, and preserving India's  {'\n'}                                    traditional handicrafts in the process. {'\n'}                                    Fabindia's products are natural, craft based, contemporary, and affordable.
      {'\n'}                                    Timings : Open 24 hours
      {'\n'}                                    Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};













//Displays an image background with the logo of the shop "ForestEssentials". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const ForestEssentialsScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/forest_essentials_0e4e4d3d39.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Forest Essentials</Text>
      <Text style={styles.header5}> {'\n'}Forest Essentials is an Indian cosmetics, skincare and perfume company that specialises in Ayurvedic preparations for its products.{'\n'}It was founded in 2000 by Mira Kulkarni in New Delhi.
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};










//Displays an image background with the logo of the shop "Fossil". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const FossilScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Fossil_69b398c5c0.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Fossil</Text>
      <Text style={styles.header5}> {'\n'}Fossil has always been inspired by American creativity & Ingenuity.{'\n'}Since 1984 we have strived to bring a new life into the industry by making quality, fashionable watches & Accessories.{'\n'}That were both fun & accessible
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};













//Displays an image background with the logo of the shop "JustInVouge". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const JustInVougeScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/just_in_vogue_0310c78ffe.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Just In Vouge</Text>
      <Text style={styles.header5}> {'\n'}Housing over 40 top international and national brands, our diverse portfolio of world class brands makes us a favorite destination of any watch lover.{'\n'}We offer the latest fashion products of coveted lifestyle brands all under one roof.{'\n'}We work to create an excellent retailing ambiance, constant connection and service for you where you can buy your favorite brands while getting the best deals.{'\n'}We strive to be a bench mark in Luxury Retailing by marketing branded lifestyle products in a world class ambience.
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};















//Displays an image background with the logo of the shop "Hidesign". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const HidesignScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Hidesign_ff7eda74d2.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Hidesign</Text>
      <Text style={styles.header5}> {'\n'}Hidesign started in 1978, as a hobby by Dilip Kapur on his return to India after his Ph.D in International Affairs in the United States.{'\n'}The first few bags were different compared to anything being manufactured in Europe and America at that time.{'\n'}From small alternative shops in San Francisco and London, the bags moved to the first adventurous department stores in the early 1990s in London, California and Australia.{'\n'}Hidesign launched its first exclusive boutique in India in 1998 and has quickly grown to 84 exclusive stores and a distribution network in 23 countries that has placed its product in over 2000 stores across the globe.{'\n'}Hidesign stands out for the sensuous naturalness of its high quality leathers and the smooth soft glow of its solid brass fittings in the leather goods it handcrafts.
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};



















//Displays an image background with the logo of the shop "MACbyShoppersStop". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const MACbyShoppersStopScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
       <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/MAC_93c6ea3bf9.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>MAC by Shoppers Stop</Text>
      <Text style={styles.header5}>  {'\n'}                                    MAC Cosmetics was founded in   by “makeup artist and photographer, Frank Toskan, and beauty salon owner, Frank Angelo” in Toronto, Canada, {'\n'}                                    to create makeup products full of color and boldness that would photograph well for their photography shoots and professional  {'\n'}                                    interests (“Our History,” n.d.). {'\n'}                                    The plain black sleekness of the packaging, formulations of the products and impudent attitude captured the industry’s leading brands’  {'\n'}                                    interests.
      {'\n'}                                    Timings : Open 24 hours
      {'\n'}                                    Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};











//Displays an image background with the logo of the shop "MithaasbyShoppersStop". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const MithaasbyShoppersStopScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
       <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Mithaas_b273bf4384.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Mithaas by Shoppers Stop</Text>
      <Text style={styles.header5}>  {'\n'}                                    Leading Indian retail group Shopper’s Stop has opened a Mithaastop at International SHA by offering wide range of Tea,Chocolates ,Sweets and savouries at  {'\n'}                                    Kempegowda International Airport Bengaluru,Passengers travelling through have the flexibility to shop.
      {'\n'}                                    Timings : Open 24 hours
      {'\n'}                                    Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};











//Displays an image background with the logo of the shop "RarePlanet". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const RarePlanetScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
       <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Rare_Planet_a35d086e92.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Rare Planet</Text>
      <Text style={styles.header5}> {'\n'}Rare Planet, India's truly Handmade Lifestyle Brand. The brand Offers a wide range of modern and modified handicrafts from rural artisans.{'\n'}Major categories include Handicrafts, Terracotta, Copper, Studio Pottery, Hand painted Steel, Accessories, Fashion Jewelry, Confectionery, Beverages and many more.
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};











//Displays an image background with the logo of the shop "Relay". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const RelayScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Relay_1_e765783c18.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Relay</Text>
      <Text style={styles.header5}>  {'\n'}                                    Travel Retail Services Private Limited (TRS) was conceptualized to enhance the experience of customers by with an exclusive range of products and services  {'\n'}                                    at Travel locations. {'\n'}                                    Travel Retail Services exclusively distributes the RELAY franchise in India. Relay is a renowned and convenience retail brand owned by Lagardère  {'\n'}                                    Travel Retail, Paris, a subsidiary of Lagardère group with a global presence in travel areas where long-haul & short-haul travelers can quickly and easily find{'\n'}                                     products and services that can enhance their journey.
      {'\n'}                                    Timings : Open 24 hours
      {'\n'}                                    Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};












//Displays an image background with the logo of the shop "SAKKARESMOORbyIRHPL". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const SAKKARESMOORbyIRHPLScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
       <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Smoor_Sakkare_d6e9d46ac8.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>SAKKARE & SMOOR by IRHPL</Text>
      <Text style={styles.header5}>  {'\n'}                                    SAKKARE & SMOOR by IRHPL offers a wide range of Sweets, Savories, Cookies & Chocolates. {'\n'}                                    SAKKARE by Anand sweets grounded by authentic, wrapped in royalty, Sakkare pays ode the royal taste of India its range of traditional, handcrafted sweets &  {'\n'}                                    Savories make every moment a memorable- A tribute of traditional. {'\n'}                                    SMOOR. {'\n'}                                    TRUE CHOCOLATE. {'\n'}                                    TRUE  STORY  {'\n'}                                    Rich, Honest ingredients & skilled craftsmanship come together to tell a story like never It`s a couverture chocolate of finest kind.
      {'\n'}                                    Timings : Open 24 hours
      {'\n'}                                    Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};











//Displays an image background with the logo of the shop "ShoppersStop". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const ShoppersStopScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
        <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/shoppers_stop_14ca9a3790.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Shoppers Stop</Text>
      <Text style={styles.header5}>  {'\n'}                                    Leading Indian retail group Shopper’s Stop has opened a freshly renovated fashion-led outlet at Kempegowda International Airport Bengaluru. {'\n'}                                    Passengers travelling through can shop from a wide array of brands national & international.The store features a range of premium national and {'\n'}                                    international brands, including Tommy Hilfiger, CK jeans, French Connection, Guess, Being Human and US polo are just a few of the many brands available. {'\n'}                                    It has a national presence in 34 cities and offers customers a world-class shopping experience through its 72 stores. 
      {'\n'}                                    Timings : Open 24 hours
      {'\n'}                                    Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};












//Displays an image background with the logo of the shop "SunglassHut". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const SunglassHutScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
        <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/sunglass_hut_cf6f86d56a.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Sunglass Hut</Text>
      <Text style={styles.header5}> {'\n'}Sunglass Hut is an international retailer of sunglasses founded in United States, in 1971, now a part of Italian-based Luxottica Group, the world’s largest eyewear company.{'\n'}Sunglass Hut has more than 2200 stores across the world and it entered India in 2009.{'\n'}Sunglass Hut is the curator of premium sunglasses in the world and house to brands like RayBan, Oakley, Vogue, Micheal kors, Gucci, Prada, Bvlgari and many more.
      {'\n'}Timings : Open 24 hours
      {'\n'}Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};












//Displays an image background with the logo of the shop "Swarovski". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const SwarovskiScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
       <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/Swarovski_0639ca1e22.png'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>Swarovski</Text>
      <Text style={styles.header5}> {'\n'}                                    Swarovski delivers a diverse portfolio of quality, craftsmanship, and creativity.Founded in 1895 in Austria, Swarovski designs, manufactures and markets {'\n'}                                    high-quality crystals and created stones as well as finished products such as jewellery, accessories and lighting.{'\n'}                                    Swarovski crystal makes for an exceptional gift.{'\n'}                                    Naturally brilliant, the fashionable silver-tone necklaces, bracelets, and earrings have proven most successful.{'\n'}                                    True eye-catchers, the cocktail rings are commanding pieces of impeccable craftsmanship. Swarovski jewellery truly boosts creative self-expression.{'\n'}                                   
      {'\n'}                                    Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};












//Displays an image background with the logo of the shop "TeaPortbyIRHPL". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const TeaPortbyIRHPLScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
       <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/ITC_1_908694b9a9.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>TeaPort by IRHPL</Text>
      <Text style={styles.header5}> {'\n'}                                    TeaPort by IRHPL (Coffee, Tea, Spices) truly depicts real sense of place. Coffee, Tea, Spices and their elements are part of our day to day life and best gift{'\n'}                                    to offer to family, friends and business partners.{'\n'}                                    We have Coffee, Chai & spices as per sub-category like Malnad {'\n'}                                    Coffee, Kodava Coffee, Niligiri Chai, Assam Chai, Darjeeling Chai, Organic Coffee, Organic Chai, Araku Coffee, Cardamom, Clove, Pepper,  etc. {'\n'}                                    Customer will understand a basic background story of the product before they buy.{'\n'}                                    The store also has a Fresh Ground Coffee, grinded and packed in front of them as per the customers requirement.
      {'\n'}                                    Timings : Open 24 hours
      {'\n'}                                    Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};











//Displays an image background with the logo of the shop "WKLIFE". 
//It also includes a header with the shop name and a description of the products they offer. 
//It provides information about the shop's timings and location within the airport.
const WKLIFEScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <TouchableOpacity>
      <Image source={{uri: 'https://d1lyi436ccpkte.cloudfront.net/uploads/WKL_d5ca8eb50f.jpg'}} style={styles.AppImage} />
      </TouchableOpacity>
      <Text style={styles.header6}>WK LIFE</Text>
      <Text style={styles.header5}> {'\n'}                                 WK LIFE is an iconic London based brand.WK life presents Ultra modern uniquely designed lifestyle assortments to cater the need of everyone.{'\n'}                                 The brand is known globally because of its premium quality and unique designs in every miscellany; be it from lifestyle essentials to electronic gadgets, 
                                             {'\n'}                                 their every design is bold and unique.{'\n'}                                 The brand has great foothold in the northern region since its inception in 2018, but slowly it is gaining popularity among brand cognizant buyers of every region.
      {'\n'}                                 Wk provides extensive range of products, lifestyle essentials, travel gear, mobile accessories, and Bluetooth speakers and so on...
      {'\n'}                                 which literally makes it "ONE STOP SHOP" for all your lifestyle needs
      {'\n'}                                 Timings : Open 24 hours
      {'\n'}                                 Location : Domestic Departure
      </Text>
    </ImageBackground>
  );
};










//The QueriesScreen component displays an image background and provides online assistance options.
//It includes a header with the text "Online Assistance" and a prompt for the user to click on the AI Assistant option. 
//When the user clicks on the option, it will navigate them to the Airport Chatbot screen.
const QueriesScreen = ({ navigation }) => {
  const handleAirportchatbotClick = () => {
    navigation.navigate('Airportchatbot');
  };


  return (
     <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <Text style={styles.header}>Online Assistance</Text>
      <Text>Please Click:</Text>
      <TouchableOpacity style={styles.option} onPress={handleAirportchatbotClick}>
        <Text style={styles.optionText}>AI Assistant</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};










//The AirportchatbotScreen component displays a chatbot interface 
//that provides information about flights, amenities, airport address, and lost and found based on user queries.
export const AirportchatbotScreen = ({ navigation }) => {
  
  //const steps = () => 
  {
    const steps =[
      {
        id:'Greet',
        message:'Hello! I am your AI Assistant',
        trigger:'Ask Query'
      },
      {
        id:'Ask Query',
        message:'Please enter your name',
        trigger:'waiting'
     },

     {
      id:'waiting',
      user:true,
      trigger:'Query'
     },
     {
      id:'Query',
      message:'Hi {previousValue}, Please select your issue',
      trigger:'issues'
     },
     {
      id:'issues',
      options:[
        {value:"Flights",label:"Flights",trigger:"Flights"},
        {value:"Amenities & Services",label:"Amenities & Services",trigger:"Amenities & Services"},
        {value:"Airport Address",label:"Airport Address",trigger:"Airport Address"},
        {value:"Lost & Found",label:"Lost & Found",trigger:"Lost & Found"}
      ],
     },
     {
      id:'Amenities & Services',
      message:'Please select your issue',
      trigger:'issues5'    
     },
     {
      id:'Airport Address',
      message:'Kempegowda International Airport, KIAL Rd, Devanahalli, Bengaluru, Karnataka 560300',
      end: true   
     },
     {
      id:'Lost & Found',
      message:'Departure Hall: Opposite check-in counter #86. (From within the airport)',
      end: true    
     },
     {
      id:'Flights',
      message:'Please select your issue',
      trigger:'issues1'    
     },
     {
      id:'issues1',
      options:[
        {value:"Departure Time",label:"Departure Time",trigger:"Departure Time"},
        {value:"Arrival Time",label:"Arrival Time",trigger:"Arrival Time"},
        {value:"Airline Name",label:"Airline Name",trigger:"Airline Name"},
        {value:"Boarding Gate",label:"Boarding Gate",trigger:"Boarding Gate"}
      ],
     },
     {
      id:'issues5',
      options:[
        {value:"Internet & Wi-Fi",label:"Internet & Wi-Fi",trigger:"Internet & Wi-Fi"},
        {value:"Baggage Services",label:"Baggage Services",trigger:"Baggage Services"},
        {value:"Charging Point",label:"Charging Point",trigger:"Charging Point"},
        {value:"Calling Facility",label:"Calling Facility",trigger:"Calling Facility"}
      ],
     },
     {
      id:'Internet & Wi-Fi',
      message:'Free Wi-Fi Service: send an SMS “WIFI BIAL” to 56677 and you will receive the wi-fi password on your cellphone',
      end: true
     },
     {
      id:'Baggage Services',
      message:'Located at Gate #4 & #7, departures (check-in hall) Baggage wrapping charges Rs.450',
      end: true
     },
     {
      id:'Charging Point',
      message:'Located at Gate #4 & #7, departures (check-in hall) Baggage wrapping charges Rs.450',
      end: true
     },
     {
      id:'Calling Facility',
      message:'Located at Gate #4 & #7, departures (check-in hall) Baggage wrapping charges Rs.450',
      end: true
     },
    
    
     {
      id:'Departure Time',
      message:'Please Enter Flight Number',
      trigger:'waiting1'
     },
     {
      id:'Arrival Time',
      message:'Please Enter Flight Number',
      trigger:'waiting2'
     },
     {
      id:'Airline Name',
      message:'Please Enter Flight Number',
      trigger:'waiting3'
     },
     {
      id:'Boarding Gate',
      message:'Please Enter Flight Number',
      trigger:'waiting4'
     },
     {
      id:'waiting2',
      user: true,
      trigger: 'CheckFlightNumber2',
     },
     {
      id:'waiting3',
      user: true,
      trigger: 'CheckFlightNumber3',
     },
     {
      id:'waiting1',
      user: true,
      trigger: 'CheckFlightNumber',
     },
     {
      id:'waiting4',
      user: true,
      trigger: 'CheckFlightNumber4',
     },
     {
      id: 'CheckFlightNumber',
      message: ({ previousValue }) => {
        const flightNumber = previousValue.trim();
        if (flightNumber === '6552') {
          return 'Departure Time:8:50 PM, Jul 24 2023';
        } 
        else if (flightNumber === '6290') {
          return 'Departure Time:12:35 PM, Jul 24 2023';
        } 
        else if (flightNumber === '5296') {
          return 'Departure Time:1:55 PM, Jul 24 2023';
        } 
        else if (flightNumber === '8259') {
          return 'Departure Time:5:20 PM, Jul 24 2023';
        } 
        else if (flightNumber === '8633') {
          return 'Departure Time:1:55 PM, Jul 24 2023';
        } 
        else if (flightNumber === '7230') {
          return 'Departure Time:7:00 AM, Jul 24 2023';
        } 
        else if (flightNumber === '7238') {
          return 'Departure Time:1:55 PM, Jul 24 2023';
        } 
        else if (flightNumber === '7663') {
          return 'Departure Time:8:55 AM, Jul 24 2023';
        } 
        else if (flightNumber === '7719') {
          return 'Departure Time:8:50 PM, Jul 24 2023';
        } 
        else if (flightNumber === '9363') {
          return 'Departure Time:8:55 AM, Jul 24 2023';
        } 
        
        else {
          return 'Flight number not found.';
        }
      },
      end: true,
    },
    {
      id: 'CheckFlightNumber4',
      message: ({ previousValue }) => {
        const flightNumber = previousValue.trim();
        if (flightNumber === 'AIR629') {
          return ' GateNumber: 2A';
        } 
        else if (flightNumber === 'AIR655') {
          return 'GateNumber: 5A';
        } 
        else if (flightNumber === 'DLA529') {
          return 'GateNumber: 17A';
        } 
        else if (flightNumber === 'ARR825') {
          return 'GateNumber: 21A';
        } 
        else if (flightNumber === 'LNA863') {
          return 'GateNumber: 25A';
        } 
        else if (flightNumber === 'AIR723') {
          return 'GateNumber: 32A';
        } 
        else if (flightNumber === 'RIZ723') {
          return 'GateNumber: 15A';
        } 
        else if (flightNumber === 'LJK766') {
          return ' GateNumber: 3A';
        } 
        else if (flightNumber === 'JKA771') {
          return 'GateNumber: 8A';
        } 
        else if (flightNumber === 'ADC936') {
          return 'GateNumber: 12A';
        } 
        
        else {
          return 'Flight number not found.';
        }
      },
      end: true,
    },
    {
      id: 'CheckFlightNumber3',
      message: ({ previousValue }) => {
        const flightNumber = previousValue.trim();
        if (flightNumber === '6552') {
          return 'Airlines: AeroMexico';
        } 
        else if (flightNumber === '6290') {
          return 'Airlines:AeroMexico';
        } 
        else if (flightNumber === '5296') {
          return 'Airlines:Air Baltic Corp';
        } 
        else if (flightNumber === '8259') {
          return 'Airlines:Azores Airlines';
        } 
        else if (flightNumber === '8633') {
          return 'Airlines:Azores Airlines';
        } 
        else if (flightNumber === '7230') {
          return 'Airlines:Azul Airlines';
        } 
        else if (flightNumber === '7238') {
          return 'Airlines:China Southern Airlines';
        } 
        else if (flightNumber === '7663') {
          return 'Airlines:China Southern Airlines';
        } 
        else if (flightNumber === '7719') {
          return 'Airlines:Delta Air Lines';
        } 
        else if (flightNumber === '9363') {
          return 'Airlines:Delta Air Lines';
        } 
        
        else {
          return 'Flight number not found.';
        }
      },
      end: true,
    },
    {
      id: 'CheckFlightNumber2',
      message: ({ previousValue }) => {
        const flightNumber = previousValue.trim();
        if (flightNumber === '6552') {
          return 'Arrival Time:10:50 PM, Jul 24 2023';
        } 
        else if (flightNumber === '6290') {
          return 'Arrival Time:2:35 PM, Jul 24 2023';
        } 
        else if (flightNumber === '5296') {
          return 'Arrival Time:4:00 PM, Jul 24 2023';
        } 
        else if (flightNumber === '8259') {
          return 'Arrival Time:7:25 PM, Jul 24 2023';
        } 
        else if (flightNumber === '8633') {
          return 'Arrival Time:4:00 PM, Jul 24 2023';
        } 
        else if (flightNumber === '7230') {
          return 'Arrival Time:9:05 AM, Jul 24 2023';
        } 
        else if (flightNumber === '7238') {
          return 'Arrival Time:4:00 PM, Jul 24 2023';
        } 
        else if (flightNumber === '7663') {
          return 'Departure Time:8:55 AM, Jul 24 2023';
        } 
        else if (flightNumber === '7719') {
          return 'Arrival Time:10:55 AM, Jul 24 2023';
        } 
        else if (flightNumber === '9363') {
          return 'Arrival Time:10:55 AM, Jul 24 2023';
        } 
        
        else {
          return 'Flight number not found.';
        }
      },
      end: true,
    },
     
    
    ]
  return (
     <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
    <>
    <Segment floated="right">
      <ChatBot steps={steps}/>  
    </Segment>
    </>
    </ImageBackground>
  );

}
}









//The HealthScreen component displays a screen with various health symptoms. 
//Users can select a symptom such as fever, bodyache, headache, or other symptoms to navigate 
//to a specific health-related page for more information or assistance.
const HealthScreen = ({ navigation }) => {
  const handleFeverClick = () => {
      navigation.navigate('Fever');
    };
  const handleBodyacheClick = () => {
      navigation.navigate('Bodyache');
    };
  const handleHeadacheClick = () => {
      navigation.navigate('Headache');
    };
  const handleOthers2Click = () => {
      navigation.navigate('Other');
    };
    return (
       <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
        <Text style={styles.header}>Health</Text>
        <Text>Choose a symptom:</Text>
        <TouchableOpacity style={styles.option} onPress={handleFeverClick}>
          <Text style={styles.optionText}>Fever</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleBodyacheClick}>
          <Text style={styles.optionText}>Bodyache</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleHeadacheClick}>
          <Text style={styles.optionText}>Headache</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleOthers2Click}>
          <Text style={styles.optionText}>Other</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
};











//The FeverScreen component displays information related to fever. 
//It shows the predicted medication and the location where it can be found 
//The screen is styled with a background image.
const FeverScreen = () => {
  return (

    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
    <Text style={styles.header3}>Fever</Text>
             <View style={styles.container1}>
  <View style={styles.row}>
    <Text style={styles.column}>Predicted Medication  </Text>
    <Text style={styles.column}>Location </Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.value}>Paracetamol</Text>
    <Text style={styles.value}>Level 1 Terminal Building
</Text>
  </View>
</View>
    </ImageBackground>
  );
};











//The BodyacheScreen component displays information related to fever. 
//It shows the predicted medication and the location where it can be found 
//The screen is styled with a background image.
const BodyacheScreen = () => {
  return (

    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
      <Text style={styles.header3}>Bodyache</Text>
             <View style={styles.container1}>
  <View style={styles.row}>
    <Text style={styles.column}>Predicted Medication  </Text>
    <Text style={styles.column}>Location </Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.value}>Ibuprofen</Text>
    <Text style={styles.value}>Level 1 Terminal Building
</Text>
  </View>
</View>
    </ImageBackground>
  );
};










//The HeadacheScreen component displays information related to fever. 
//It shows the predicted medication and the location where it can be found 
//The screen is styled with a background image.
const HeadacheScreen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
    
    <Text style={styles.header3}>Headache</Text>
             <View style={styles.container1}>
  <View style={styles.row}>
    <Text style={styles.column}>Predicted Medication  </Text>
    <Text style={styles.column}>Location </Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.value}>Aspirin</Text>
    <Text style={styles.value}>Level 1 Terminal Building
</Text>
  </View>
</View>
    </ImageBackground>
  );
};











//The Others2Screen component displays information related to other health issues. 
//It shows the name of the clinic and its location. 
//The screen is styled with a background image.
const Others2Screen = () => {
  return (
    <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80'}} 
    style={styles.container}
  >
   
   <Text style={styles.header3}>Other</Text>
             <View style={styles.container1}>
  <View style={styles.row}>
    <Text style={styles.column}>Clinic </Text>
    <Text style={styles.column}>Location </Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.value}>Aster Medical Clinic</Text>
    <Text style={styles.value}>1st Floor next to Forex Counter 
</Text>
  </View>
</View>
        
    </ImageBackground>
  );
};









//The code defines styles for various components like text, images, containers, and buttons, 
//specifying their appearance with properties such as font size, color, margin, and padding.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppImage: {
    height: 150,
    width: 150,
    marginBottom: 10,
  },
  container2: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  Imageapp: {
    height: 150,
    width: 800,
    marginBottom: 10,
  },
  map: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Transcity-Regular'
  },
  header1: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    fontFamily: 'Transcity-Regular'
  },
  header5: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Transcity-Regular'
  },
  header2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Transcity-Regular'
  },
  header3: {
    fontSize: 55,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Transcity-Regular',
    color: 'black',
  },
  header6: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Transcity-Regular',
    color: 'black',
  },
  header4: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Transcity-Regular',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    width: 200,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  value: {
    flex: 1,
    textAlign: 'center',
    paddingBottom: 5,
    fontFamily: 'Transcity-Regular',
  },
  container1: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: 'black',
    marginBottom: 100,
    marginTop: 50,
  
  },
  submitButton: {
    
    paddingVertical: 6, // Adjust the padding as needed
    paddingHorizontal: 12, // Adjust the padding as needed
    borderRadius: 2,
    width: 150,
    height: 25,
    alignSelf: 'center',
    fontFamily: 'Transcity-Regular'
  },
  mapContainer: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Transcity-Regular'
  },
  flightDuration: {
    marginTop: 20,
  },
  imageGap: {
    width: 10, 
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  searchBar: {
    height: 40,
    borderColor: 'black',
    alignSelf: 'center',
    borderWidth: 2,
    width: 300 ,// Adjust the width as needed
    fontFamily: 'Transcity-Regular',
    backgroundColor: 'white',
  },
  tile: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
   
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tileText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Transcity-Regular'
  },
  flightNo: {
    marginTop: 20,
  },
  option: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    width: 200,
    backgroundColor: 'white',
  },
  optionText: {
    textAlign: 'center',
    fontFamily: 'Transcity-Regular',
    fontWeight: 'bold'
  },
});
