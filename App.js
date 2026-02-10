import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Dashboard states
  const [inputText, setInputText] = useState('');
  const [listData, setListData] = useState([
    { id: '1', title: 'alpha' },
    { id: '2', title: 'bravo' },
  ]);

  const handleLogin = () => {
    if (username === 'meow' && password === 'meow123') {
      setIsLoggedIn(true);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  const handleAddItem = () => {
    if (inputText.trim() === '') {
      Alert.alert('Input Error', 'Please input a text before pressing the ADD button');
      return;
    }
    const newItem = {
      id: Math.random().toString(),
      title: inputText,
    };
    setListData([...listData, newItem]);
    setInputText('');
  };

  if (isLoggedIn) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.dashboardContainer}>
          <View style={styles.content}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerText}>Taguiam, Jasper</Text>
            </View>

            {/* Input Section */}
            <TextInput
              style={styles.dashboardInput}
              placeholder="Enter Name"
              value={inputText}
              onChangeText={setInputText}
            />

            <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
              <Text style={styles.addButtonText}>+ ADD</Text>
            </TouchableOpacity>

            {/* List Section */}
            <View style={styles.listContainer}>
              <FlatList
                data={listData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{item.title}</Text>
                  </View>
                )}
              />
            </View>
          </View>
          <StatusBar style="dark" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.loginContainer}>
        <View style={styles.loginCard}>
          <Text style={styles.loginTitle}>User Login</Text>
          
          <TextInput
            style={styles.loginInput}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.loginInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // Dashboard Styles 
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  header: {
    backgroundColor: '#3F48CC', 
    padding: 15,
    marginTop: 25, 
    marginBottom: 15,
    borderRadius: 12, 
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  dashboardInput: {
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 18,
    marginBottom: 15,
    color: '#000',
    borderRadius: 12, 
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    backgroundColor: '#03A9F4', 
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 12, 
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15, 
    padding: 10,
    backgroundColor: '#fff',
    overflow: 'hidden', 
  },
  listItem: {
    backgroundColor: '#28a745', 
    padding: 15,
    marginBottom: 10,
    borderRadius: 10, 
  },
  listItemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },

  // Login Styles
  loginContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginCard: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 400,
    padding: 30,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#1c1e21',
  },
  loginInput: {
    backgroundColor: '#f5f6f7',
    borderWidth: 1,
    borderColor: '#dddfe2',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#1877f2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
