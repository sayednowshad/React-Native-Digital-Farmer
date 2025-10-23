import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

// --- Plant Data ---
const plantData = [
  { id: '1', name: 'Tomato', image: 'https://images.pexels.com/photos/533341/pexels-photo-533341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', color: '#f0f8e8' },
  { id: '2', name: 'Mango', image: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', color: '#fff9e0' },
  { id: '3', name: 'Banana', image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', color: '#fff9e0' },
  { id: '4', name: 'Apple', image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', color: '#ffefef' },
  { id: '5', name: 'Guava', image: 'https://images.pexels.com/photos/3932883/pexels-photo-3932883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', color: '#f0f8e8' },
  { id: '6', name: 'Grapes', image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', color: '#f3e8ff' },
];

// --- Map plant names to screen names ---
const plantScreens = {
  Tomato: '../DiseaseScreens/DiseaseSelectionApple.js',
    Mango: '../DiseaseScreens/DiseaseSelectionMango.js',
    Banana: '../DiseaseScreens/DiseaseSelectionBanana.js',
    Apple: '../DiseaseScreens/DiseaseSelectionApple.js',
    Guava: '../DiseaseScreens/DiseaseSelectionGuava.js',
    Grapes: '../DiseaseScreens/DiseaseSelectionGrapes.js',
};

// --- Plant Card Component ---
const PlantCard = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.plantCard}
    onPress={() => navigation.navigate(item.name)} // <-- use item.name
  >
    <Image source={{ uri: item.image }} style={styles.plantImage} />
    <View style={[styles.plantInfo, { backgroundColor: item.color }]}>
      <Text style={styles.plantName}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

// --- Header Component ---
const ListHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Disease Awareness</Text>
        <Feather name="sliders" size={24} color="#333" />
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a plant..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#888"
        />
      </View>
    </>
  );
};

// --- Main Screen Component ---
export default function DiseaseAwarenessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        ListHeaderComponent={ListHeader}
        data={plantData}
        renderItem={({ item }) => <PlantCard item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
      />
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  listContentContainer: { paddingHorizontal: 16, paddingTop: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#222' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f7f7f7', borderRadius: 12, paddingHorizontal: 12, marginBottom: 16 },
  searchInput: { flex: 1, paddingVertical: 12, marginLeft: 8, fontSize: 16, color: '#333' },
  plantCard: { flex: 1, margin: 8, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#eee', backgroundColor: '#fff' },
  plantImage: { width: '100%', height: 120, resizeMode: 'cover' },
  plantInfo: { paddingVertical: 12, paddingHorizontal: 10, alignItems: 'center' },
  plantName: { fontSize: 16, fontWeight: '600', color: '#333' },
});
