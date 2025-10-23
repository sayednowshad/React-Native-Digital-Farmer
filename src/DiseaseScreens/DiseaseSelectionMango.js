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
// (This component is generic and does not need changes)
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
// (This component is generic and does not need changes)
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
// (This component is generic and does not need changes)
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

// --- Main Screen Component (Mango Version) ---
export default function MangoDiseaseScreen() {
  const [activePart, setActivePart] = useState('Leaf');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* 1. Header - CHANGED */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mango Diseases</Text>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Main Image - CHANGED */}
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.mainImage}
        />

        {/* 3. Intro Text - CHANGED */}
        <Text style={styles.introText}>
          Mangoes are a beloved tropical fruit, but the trees are prone to
          several diseases that can reduce yield and fruit quality. Early
          detection and management are crucial for a healthy harvest.
        </Text>

        {/* 4. Plant Part Selector (Same) */}
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

        {/* 5. Conditional Disease Info Card - CHANGED */}
        {activePart === 'Leaf' && (
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Anthracnose</Text>
            <Text style={styles.infoText}>
              <Text style={styles.infoLabel}>Symptoms: </Text>
              Small, dark, sunken spots (lesions) on leaves, flowers, and
              fruit. On leaves, spots may have a 'shot-hole' appearance.
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.infoLabel}>Causes: </Text>
              Fungal pathogen, which thrives in warm, wet, and humid
              weather.
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.infoLabel}>Signs: </Text>
              Pinkish or orange spore masses may appear on the lesions during
              wet conditions. Twigs can also be affected, leading to 'dieback'.
            </Text>
          </View>
        )}
        
        {/* You can add more conditional blocks here for Stem, Root, Fruit */}
        {/* Example:
        {activePart === 'Fruit' && (
          <View style={styles.infoCard}>
             ... Fruit disease info ...
          </View>
        )}
        */}


        {/* 6. Preventive Measures - CHANGED */}
        <Text style={styles.sectionTitle}>Preventive Measures</Text>
        <MeasureCard
          iconSet="MaterialCommunityIcons"
          iconName="content-cut"
          iconColor="#4CAF50" // Green
          text="Prune trees annually to improve air circulation and remove dead wood."
        />
        <MeasureCard
          iconSet="Feather"
          iconName="shield"
          iconColor="#2196F3" // Blue
          text="Apply recommended fungicides during flowering and fruit development."
        />
        <MeasureCard
          iconSet="MaterialCommunityIcons"
          iconName="leaf-off"
          iconColor="#f44336" // Red
          text="Remove and destroy fallen leaves and infected fruit (sanitation)."
        />

        {/* 7. FAQ Section - CHANGED */}
        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>FAQ</Text>
        <FaqItem
          question="How often should I inspect my trees?"
          answer="Inspect your mango trees weekly, and more frequently during the flowering and fruiting seasons, especially after rain. Early detection of spots on leaves or flowers is key."
        />
        <FaqItem
          question="Are chemical treatments necessary?"
          answer="For diseases like Anthracnose, fungicides are often a key part of management, especially for commercial growing. However, combining them with cultural practices like pruning gives the best results."
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles ---
// (These styles are identical to your provided code and do not need changes)
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
    backgroundColor: '#fff9e0', // Light yellow for Mango
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#e67e22', // Darker orange/yellow
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