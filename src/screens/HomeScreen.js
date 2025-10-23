import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) { // <- pass navigation here
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>AgriChain</Text>
        <View style={styles.notificationBell}>
          <Text>🔔</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>Search farmers, products, or schemes...</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} />
          <View>
            <Text style={styles.profileName}>Prem Sai</Text>
            <Text style={styles.profileSubtitle}>Farmer • AndhraPradesh, India</Text>
            <Text style={styles.activeStatus}>● Active</Text>
          </View>
        </View>

        {/* Menu Cards Grid */}
        <View style={styles.grid}>
          {menuItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.card, { backgroundColor: item.bg || '#fff' }]}
              onPress={() => item.screen && navigation.navigate(item.screen)} // dynamic navigation
            >
              <Text style={styles.cardIcon}>{item.icon}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {navItems.map((n, idx) => (
          <TouchableOpacity key={idx} style={styles.navItem}>
            <Text style={[styles.navIcon, n.active && styles.navIconActive]}>{n.icon}</Text>
            <Text style={[styles.navLabel, n.active && styles.navLabelActive]}>
              {n.label}{n.badge && <Text style={styles.badge}>{n.badge}</Text>}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// Add `screen` property to cards for navigation
const menuItems = [
  { icon: '💬', title: 'Farmer WhatsApp', desc: 'Connect with community', bg: '#eafbea' },
  { icon: '🛍️', title: 'Buy & Sell', desc: 'Trade crops & tools', bg: '#eaf3fa' },
  { icon: '🏛️', title: 'Government Schemes', desc: 'Subsidies & support', bg: '#fef6ef' },
  { icon: '🏬', title: 'Market Places', desc: 'Real-time crop rates', bg: '#f6f0fa' },
  { icon: '👨‍🔬', title: 'Expert Connections', desc: 'Agri-scientists & mentors', bg: '#eafbea', screen: 'DiseaseAwareness' },
  { icon: '🛡️', title: 'Pesticides Awareness', desc: 'Usage & safety guides', bg: '#fff2f2', screen: 'PesticidesAwareness' }, // <- add screen here
];

const navItems = [
  { icon: '🏠', label: 'Home', active: true },
  { icon: '🔗', label: 'Blockchain' },
  { icon: '💬', label: 'Messages', badge: 3 },
  { icon: '⚙️', label: 'Settings' }
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  logo: { fontSize: 24, fontWeight: 'bold', color: '#163300' },
  notificationBell: { fontSize: 24 },
  searchBar: {
    margin: 20,
    borderRadius: 15,
    padding: 12,
    backgroundColor: '#f7f7f7'
  },
  searchText: { color: '#aaa', fontSize: 16 },
  content: { flex: 1 },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7fbff',
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 18
  },
  avatar: { width: 54, height: 54, borderRadius: 99, marginRight: 14 },
  profileName: { fontSize: 18, fontWeight: 'bold', color: '#322' },
  profileSubtitle: { fontSize: 13, color: '#555' },
  activeStatus: { color: 'green', marginTop: 2, fontWeight: 'bold', fontSize: 13 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  card: {
    width: '47%',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    alignItems: 'flex-start'
  },
  cardIcon: { fontSize: 32, marginBottom: 12 },
  cardTitle: { fontSize: 15, fontWeight: '600', color: '#222' },
  cardDesc: { fontSize: 11, color: '#666', marginTop: 2 },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ececec',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 22
  },
  navItem: { alignItems: 'center', flex: 1 },
  navIcon: { fontSize: 24, color: '#979797' },
  navIconActive: { color: '#047857' },
  navLabel: { fontSize: 11, color: '#979797' },
  navLabelActive: { color: '#047857', fontWeight: 'bold' },
  badge: {
    fontSize: 10, color: '#fff', backgroundColor: '#db2323', borderRadius: 6,
    paddingHorizontal: 4, marginLeft: 4
  }
});
