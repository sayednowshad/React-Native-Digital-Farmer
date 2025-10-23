import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

// --- Reusable Component for Plant Part Buttons ---
const PartButton = ({ name, activePart, setActivePart }) => {
  const isActive = name === activePart;
  return (
    <TouchableOpacity
      style={[
        styles.partButton,
        isActive ? styles.partButtonActive : styles.partButtonInactive,
      ]}
      onPress={() => setActivePart(name)}
    >
      <Text
        style={[
          styles.partButtonText,
          isActive
            ? styles.partButtonTextActive
            : styles.partButtonTextInactive,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

// --- Reusable Component for Preventive Measure Cards ---
const MeasureCard = ({ iconName, iconSet, text, iconColor }) => {
  const IconComponent =
    iconSet === 'Feather' ? Feather : MaterialCommunityIcons;
  return (
    <View style={styles.measureCard}>
      <IconComponent
        name={iconName}
        size={24}
        color={iconColor}
        style={styles.measureIcon}
      />
      <Text style={styles.measureText}>{text}</Text>
    </View>
  );
};

// --- Reusable Component for FAQ Items ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.faqItem}>
      <TouchableOpacity
        style={styles.faqHeader}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.faqQuestion}>{question}</Text>
        <Feather
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={22}
          color="#555"
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.faqContent}>
          <Text style={styles.faqAnswer}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

// --- Main Screen Component ---
export default function TomatoDiseaseScreen() {
  const [activePart, setActivePart] = useState('Leaf');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* 1. Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tomato Diseases</Text>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Main Image */}
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/533341/pexels-photo-533341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.mainImage}
        />

        {/* 3. Intro Text */}
        <Text style={styles.introText}>
          Tomatoes are a major vegetable crop, but are susceptible to various
          diseases that can affect plant health and fruit quality. Identifying
          them early is key.
        </Text>

        {/* 4. Plant Part Selector */}
        <Text style={styles.sectionTitle}>Select Plant Part</Text>
        <View style={styles.partSelectorContainer}>
          <PartButton
            name="Leaf"
            activePart={activePart}
            setActivePart={setActivePart}
          />
          <PartButton
            name="Stem"
            activePart={activePart}
            setActivePart={setActivePart}
          />
          <PartButton
            name="Root"
            activePart={activePart}
            setActivePart={setActivePart}
          />
          <PartButton
            name="Fruit"
            activePart={activePart}
            setActivePart={setActivePart}
          />
        </View>

        {/* 5. Conditional Disease Info Card */}
        {activePart === 'Leaf' && (
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Leaf Blight</Text>
            <Text style={styles.infoText}>
              <Text style={styles.infoLabel}>Symptoms: </Text>
              Small, dark, water-soaked spots on leaves that enlarge rapidly.
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.infoLabel}>Causes: </Text>
              Fungal pathogen, often thriving in humid and wet conditions.
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.infoLabel}>Signs: </Text>
              White mold may appear on the underside of leaves in damp weather.
            </Text>
          </View>
        )}

        {/* 6. Preventive Measures */}
        <Text style={styles.sectionTitle}>Preventive Measures</Text>
        <MeasureCard
          iconSet="MaterialCommunityIcons"
          iconName="seedling"
          iconColor="#4CAF50" // Green
          text="Use certified disease-free seeds."
        />
        <MeasureCard
          iconSet="Feather"
          iconName="wind"
          iconColor="#2196F3" // Blue
          text="Ensure good air circulation around plants."
        />
        <MeasureCard
          iconSet="MaterialCommunityIcons"
          iconName="weather-pouring"
          iconColor="#f44336" // Red
          text="Avoid overhead watering to keep foliage dry."
        />

        {/* 7. FAQ Section */}
        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>FAQ</Text>
        <FaqItem
          question="How often should I inspect my plants?"
          answer="It's best to inspect your plants daily or at least every other day, especially during periods of high humidity or after rain, to catch early signs of disease."
        />
        <FaqItem
          question="Are chemical treatments necessary?"
          answer="Not always. Many diseases can be managed with cultural practices like proper spacing, watering, and sanitation. Chemical treatments are often a last resort or for severe infections."
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  mainImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  introText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  partSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  partButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  partButtonActive: {
    backgroundColor: '#34A853', // Active green
  },
  partButtonInactive: {
    backgroundColor: '#f0f0f0', // Inactive gray
  },
  partButtonText: {
    fontWeight: '500',
    fontSize: 15,
  },
  partButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  partButtonTextInactive: {
    color: '#888',
  },
  infoCard: {
    backgroundColor: '#e8f5e9', // Light green background
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2e7d32', // Darker green
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  measureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  measureIcon: {
    marginRight: 12,
  },
  measureText: {
    fontSize: 14,
    color: '#333',
    flex: 1, // Allows text to wrap
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: '500',
    color: '#444',
    flex: 1,
  },
  faqContent: {
    paddingBottom: 16,
    paddingLeft: 4, // Align with text
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});