import React from 'react';
import UserPanel from './UserPanel'
import {Menu} from 'semantic-ui-react';



class SidePanel extends React.Component {
    render() {
        return(
           <Menu
           size='large'
           inverted
           fixed="left"
           vertical
           style={{background : '#4A154B', fontSize: '1.2rem'}}
           >

            <UserPanel />
           </Menu>
        )
    }
}

export default SidePanel;