/**
 * Created by andrey.manaenko on 26.01.2017.
 */
import React from 'react';
import MenuButton from './menuButton';
import MenuShort from './menuShort';

export default class Menu extends React.Component {

    
    render() {
       return (
       <nav className = "mainmenu">
           <MenuShort clickApp= {this.props.collmeback} label="H" actionType="SHORT_LABEL"/>
           <MenuButton clickApp= {this.props.collmeback} label="Рассписание" actionType="SHEDULE"/>
           <MenuButton clickApp= {this.props.collmeback} label="Блог" actionType="CHAT"/>
           <MenuButton clickApp= {this.props.collmeback} label="Фото" actionType="FOTOS"/>
           <MenuButton clickApp= {this.props.collmeback} label="Объявления" actionType="NEWS"/>
           <MenuButton clickApp= {this.props.collmeback} label="Контакты" actionType="CONTACTS"/>
       </nav>
       );
   }
}
