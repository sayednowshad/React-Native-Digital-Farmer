import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

const FAQs = [
  {
    question: 'What are Natural Fertilizers?',
    answer: 'Natural fertilizers are made from organic waste, which enriches soil and improves crop yield.',
    icon: '🌱'
  },
  {
    question: 'What is Crop Rotation?',
    answer: 'Crop rotation helps maintain soil health by changing crops every season, preventing soil depletion.',
    icon: '🔄'
  },
  {
    question: 'What are Bio Pesticides?',
    answer: 'Bio pesticides are used to control pests using natural, environmentally friendly solutions.',
    icon: '🧪'
  },
  {
    question: 'How does Vermicompost work?',
    answer: 'Vermicompost uses worms to convert organic waste into nutrient-rich compost for the soil.',
    icon: '🐛'
  }
];

export default function PesticidesAwareness() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header - Digital Farmer & Language */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Digital Farmer</Text>
        <TouchableOpacity>
          <Text style={styles.langOption}>🌍 English</Text>
        </TouchableOpacity>
      </View>

      {/* Cover Image */}
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' }}
        style={styles.coverImage}
      />

      {/* Title and Description */}
      <View style={styles.section}>
        <Text style={styles.title}>Are Pesticides Killing Your Soil?</Text>
        <Text style={styles.desc}>
          Learn how chemical pesticides affect your soil’s health and crop yield
        </Text>
        {/* Sound Button */}
        <TouchableOpacity style={styles.soundBtn}>
          <Text style={styles.soundIcon}>🔊</Text>
        </TouchableOpacity>
      </View>

      {/* Video Section Placeholder */}
      <View style={styles.videoSection}>
        <View style={styles.videoPlaceHolder}>
          {/* Later embed your iframe/video player here */}
          <Text style={styles.videoPlay}>▶️</Text>
        </View>
        <Text style={styles.videoCaption}>
          Watch: How Pesticides Damage Our Soil
        </Text>
        <Text style={styles.videoMeta}>
          12:34 &nbsp;·&nbsp; Subtitles available
        </Text>
      </View>

      {/* Switch to Safer, Organic Farming Title */}
      <Text style={styles.subTitle}>
        Switch to Safer, Organic Farming
      </Text>

      {/* FAQ Accordion Cards */}
      <View style={styles.faqSection}>
        {FAQs.map((faq, idx) => (
          <View key={idx} style={styles.faqCard}>
            <TouchableOpacity
              onPress={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              style={styles.faqHeader}
            >
              <Text style={styles.faqNumber}>{idx + 1}</Text>
              <Text style={styles.faqQuestion}>{faq.question}</Text>
              <Text style={styles.faqIcon}>{faq.icon}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listenBtn}
              onPress={() => { /* You can add listen functionality here */ }}
            >
              <Text style={styles.listenText}>🎧 Listen</Text>
            </TouchableOpacity>
            {openFAQ === idx && (
              <View style={styles.faqAnswerBox}>
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.ctaBtn}>
        <Text style={styles.ctaBtnText}>Learn Organic Farming Today</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2eb', paddingTop: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    marginBottom: 10
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#305c37' },
  langOption: { fontSize: 15, color: '#305c37' },
  coverImage: {
    width: '90%',
    height: 130,
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 12,
    marginTop: 5
  },
  section: {
    marginHorizontal: 22,
    marginVertical: 6
  },
  title: { fontSize: 23, fontWeight: 'bold', color: '#305c37', marginBottom: 5 },
  desc: { fontSize: 14, color: '#625d5d', marginBottom: 7 },
  soundBtn: {
    position: 'absolute',
    right: 0,
    top: 4,
    backgroundColor: '#d2e4d9',
    borderRadius: 50,
    padding: 8
  },
  soundIcon: { fontSize: 22 },
  videoSection: {
    backgroundColor: '#fff',
    marginHorizontal: 18,
    marginBottom: 13,
    borderRadius: 13,
    padding: 11,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2
  },
  videoPlaceHolder: {
    backgroundColor: '#e8f1e6',
    borderRadius: 14,
    height: 115,
    justifyContent: 'center',
    alignItems: 'center'
  },
  videoPlay: { fontSize: 38, color: '#305c37' },
  videoCaption: { fontWeight: '600', fontSize: 15, marginTop: 12, color: '#305c37' },
  videoMeta: { color: '#828282', fontSize: 12, marginTop: 4 },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#385e34',
    marginLeft: 22,
    marginBottom: 8
  },
  faqSection: { marginBottom: 18 },
  faqCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 13,
    marginHorizontal: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  faqNumber: {
    fontWeight: 'bold',
    color: '#305c37',
    fontSize: 18,
    marginRight: 10
  },
  faqQuestion: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#305c37'
  },
  faqIcon: { fontSize: 20 },
  listenBtn: {
    marginTop: 7,
    alignSelf: 'flex-start',
    backgroundColor: '#e8f1e6',
    borderRadius: 8,
    paddingHorizontal: 11,
    paddingVertical: 4
  },
  listenText: { fontSize: 13, color: '#1c4220', fontWeight: '500' },
  faqAnswerBox: {
    marginTop: 8,
    backgroundColor: '#f8faf7',
    borderRadius: 6,
    padding: 8
  },
  faqAnswer: { color: '#525b4e', fontSize: 13 },
  ctaBtn: {
    backgroundColor: '#295e36',
    borderRadius: 22,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 40,
    paddingVertical: 15,
    alignItems: 'center'
  },
  ctaBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.3
  }
});
