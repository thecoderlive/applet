import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import AppletList from './AppletList'

const Applet = () => (
<ScrollView style={styles.applet} showsVerticalScrollIndicator={false}>
<AppletList item={item.applet_list}/>
<Text style={styles.manage_applets}>{item.manage_applets}</Text>
<Text style={styles.about_applets}>{item.about_applets}</Text>
</ScrollView>
)

export default Applet;

const styles = StyleSheet.create({
    'manage_applets': {
        'fontSize': 18,
        'fontWeight': '700',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_applets': {
        'fontSize': 14,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});