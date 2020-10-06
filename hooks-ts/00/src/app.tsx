import * as React from 'react'
import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker, SidebarComponent } from "./component";
import {Color} from './model/color';


export const App = () => {
    const [name, setName] = React.useState('defaultUserName')
    const [editingName, setEditingName] = React.useState('defaultUserName')
    const [color, setColor] = React.useState<Color>({red: 20, green: 40, blue: 180})

    const loadUsername = () => {
        setTimeout(() => {
            setName('name from async call')
            setEditingName('name from async call')
        }, 500);
    }

    React.useEffect(() => {
        loadUsername();
    }, [])

    const setUsernameState = () => {
        setName(editingName)
    }

    const sureFnc = React.useMemo(() => {
        if (editingName === '' || editingName === name) { 
            return 1 
        }else if(!(editingName.match(/[0-9]+/g)&&editingName.match(/[a-z]+/g)&&editingName.match(/[A-Z]+/g)&&editingName.match(/[\.||\,||\@||\，||\_]+/g))){
            return 2
        }else{
            return 0
        }
    },[editingName,name])

    return (
        <>
            <SidebarComponent isVisible={true} />
            <ColorPicker color={color} onColorUpdated={setColor}/>
            <ColorBrowser color={color}/>
            <HelloComponent userName={name} />
            <NameEditComponent
                initialUserName={name}
                editingName={editingName}
                onNameUpdated={setUsernameState}
                onEditingNameUpdated={setEditingName}
                disabled={sureFnc}
            />
        </>
    );
}

