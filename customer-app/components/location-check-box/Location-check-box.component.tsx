import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LocationCheckBox = ({zones, setSelectedZone, selectedId} ) => {

    return (
        <View style={style.viewContainer}>

            {
                zones && zones.map((zone, i) => {
                const showDescription = zone?.isSelected || selectedId ==zone.id ? style.showDescription: style.hideDescription;

                    return <View key={i}>
                                <TouchableOpacity>
                                    <Text onPress={() => setSelectedZone(zone)} style={style.head}>{zone?.name}</Text>
                                </TouchableOpacity>
                                <View style={[style.viewDescription, showDescription]}>
                                    {zone?.areas && zone?.areas.length > 0 ? <Text>{zone?.areas}</Text>:
                                    !zone?.areas &&<Text>We currently have no area in this zone</Text>}
                                </View>
                    </View>
                })
            }
            
        </View>
    )
}

const style = StyleSheet.create({
    viewContainer: {
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    head: {
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 3,
        padding: 5
    },
    viewDescription: {
        borderWidth: 1,
        borderColor: 'lightGrey',
        borderRadius: 3,
        padding: 7
    },
    hideDescription: {
        display: 'none'
    },
    showDescription: {
        display: 'flex'
    }
})

export default LocationCheckBox;