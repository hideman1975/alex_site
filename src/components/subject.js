/**
 * Created by andrey.manaenko on 19.01.2017.
 */
import React from 'react';

export default class Subject extends React.Component{
    render(){
        return(
          <tr className="tab">
              <td>{this.props.number}</td>
              <td>{this.props.time}</td>
              <td>{this.props.classroom}</td>
              <td>{this.props.lesson_name}</td>
              <td>{this.props.home_work}</td>

          </tr>

        );

    }


}

