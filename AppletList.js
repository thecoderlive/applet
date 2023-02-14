import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const appletListItem = ({ item }) => (
<View style={styles.applet_list_item}>
<Image
    style={styles.applet_icon}
    source={{uri: item.applet_icon}}
   />
<Text style={styles.applet_for}>{item.applet_for}</Text>
<Text style={styles.indicator}>{item.indicator}</Text>
<Text style={styles.works_with}>{item.works_with}</Text>
<Image
    style={styles.bell_icon}
    source={{uri: item.bell_icon}}
   />
</View>
  );

const AppletList = ({ item }) => (
<FlatList
    style={styles.applet_list}
    data={item}
    renderItem={appletListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default AppletList;

const styles = StyleSheet.create({
    'applet_icon': {
        'width': '10vw',
        'height': '10vw',
        'margin': 5
    },
    'applet_for': {
        'fontSize': 25,
        'fontWeight': '700',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'indicator': {
        'color': '#080707',
        'fontSize': 17,
        'fontWeight': '800',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'works_with': {
        'color': '#767474',
        'fontSize': 15,
        'fontWeight': '700',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'bell_icon': {
        'width': '6vw',
        'height': '6vw',
        'margin': 5
    }
});