import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LocationCheckBox = ({zone}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {}}>
                <Text>{zone?.name}</Text>
            </TouchableOpacity>
            <View>
                {zone?.areas && zone?.areas.length > 0 ? <Text>{zone?.areas}</Text>:
                !zone.areas &&<Text>We currently have no area in this zone</Text>}
            </View>
        </View>
    )
}

export default LocationCheckBox;