/**
 * Created by andrey.manaenko on 07.02.2017.
 */


export default function(state, action) {

    if (action.type === 'ADD_MESSAGE') {

        return {...state, chat: action.message}
    }
    
    if (action.type === 'LOGIN_USER'){
        return {...state, userRole: action.user.role, userName: action.user.name}
    }

    if (action.type === 'LOGOUT_USER'){
        return {...state, userRole: 'user', userName: 'Гость'}
    }

    if (action.type === 'SWITCH_PAGE'){
        var clearPages = {
            Chatclass: "passivePage",
            Contactclass: "passivePage",
            Fotoclass: "passivePage",
            Messageclass: "passivePage",
            Lessonsclass: "passivePage"
        };
        var menuIcons = ["menuitem", "menuitem", "menuitem", "menuitem", "menuitem"];

       switch (action.menuItem){
           case 'CHAT':
               clearPages.Chatclass = "activePage";
               menuIcons[1] = "menuitemActive";
               break;
           case 'CONTACTS':
               clearPages.Contactclass = "activePage";
               menuIcons[4] = "menuitemActive";
               break;
           case 'FOTOS':
               clearPages.Fotoclass = "activePage";
               menuIcons[2] = "menuitemActive";
               break;
           case 'NEWS':
               clearPages.Messageclass = "activePage";
               menuIcons[3] = "menuitemActive";
               break;
           case 'SHEDULE':
               clearPages.Lessonsclass = "activePage";
               menuIcons[0] = "menuitemActive";
               break;
           default: break;
       }

        return {...state, pages: clearPages, menuItem: menuIcons }
    }

    if(action.type === 'SWITCH_DAY'){
        return {...state, dayShedule: action.dayShed}

    }

        
    return state;
}