import React from 'react'
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import deviceStorage from '../../shared/services/deviceStorage';
import LocationCheckBox from '../location-check-box/Location-check-box.component';
import ModalComponent from '../Modal.component';
import { setShoppingZone } from '../../actions/Zone.action';

interface RouteProps {
    zoneState: any,
    setZone: (id)=>{}
}

class LocationCheck extends React.Component<RouteProps> {
    state = {
        chosenZone:null,
        visible: true,
        error: '',
        disableBtn: true
    }

    userZone = deviceStorage.getSavedDataFromDevice('userZone');
        
        render() {

        const {zoneState, zoneState: {zones}} = this.props

        const setSelectedZone = (zone) => {
            let zInd;
            this.setState({
                disableBtn: false
            })
            zones?.zones.map((z, i) => {
                if(z.id === zone.id){
                    z.isSelected = true;
                    zInd = i
                } else {
                    z.isSelected = false;
                }
                return z
            })
            
            if(zInd > -1) {
                this.setState({
                    chosenZone: zones?.zones[zInd]
                })
            }
    
        }
        const { chosenZone, visible }:{chosenZone :any, visible: boolean} = this.state;

        const saveZone = () => {
            if (chosenZone) {
                this.props.setZone(chosenZone)
            } else {
                this.setState({
                    error: 'Please select a zone to continue'
                })
            }
        }

        return (
            <View>
                <ModalComponent display={visible && !zoneState?.shoppingZone?.reconciled} modalTitle="Select a Delivery Area">
                    {
                        zones?.zones && <LocationCheckBox zones={zones?.zones} setSelectedZone={setSelectedZone} selectedId={chosenZone?.id} />
                    }
                    <Button disabled={this.state.disableBtn} title="Continue" onPress={() => saveZone()} />
                </ModalComponent>                
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        zoneState: state.zoneReducer
    }
}

const mapDispatchToProps = {
    setZone: setShoppingZone
}

export default connect<any>(mapStateToProps, mapDispatchToProps)(LocationCheck);

