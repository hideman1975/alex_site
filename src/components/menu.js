/**
 * Created by andrey.manaenko on 26.01.2017.
 */
import React from 'react';
import MenuButton from './menuButton';


export default class Menu extends React.Component {

    
    render() {
       return (
       <nav className = "mainmenu">
           <MenuButton className={this.props.menuItem[0]} cont="Расписание"
                       label="calendar" actionType="SHEDULE"/>
           <MenuButton  className={this.props.menuItem[1]} cont="Чат"
                        label="comment_add" actionType="CHAT"/>
           <MenuButton  className={this.props.menuItem[2]} cont="Фотографии"
                        label="images" actionType="FOTOS"/>
           <MenuButton  className={this.props.menuItem[3]} cont="Объявления"
                        label="page_writing" actionType="NEWS"/>
           <MenuButton  className={this.props.menuItem[4]} cont="Контакты"
                        label="email" actionType="CONTACTS"/>
       </nav>
       );
   }
}
