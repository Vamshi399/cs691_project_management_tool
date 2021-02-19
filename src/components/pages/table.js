import React from 'react';
import Cookies from 'js-cookie';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;
    var roles = Cookies.get('roles');
    var username = Cookies.get('username');
    var roles = Cookies.get('roles');
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th className="th">Project Name</th>
              <th className="th">Task</th>
              <th className="th">Assignee</th>
              <th className="th">Status</th>
            </tr>
            {items.map(item => {
              if (roles == 'teammember') {
                if(username==item.assignee){
                  return (
                    <tr>
                      <td className="td">{item.project}</td>
                      <td className="td">{item.text}</td>
                      <td className="td">{item.assignee}</td>
                      <td className="td">{item.complete ? 'Completed' : 'Pending'}</td>
                    </tr>
                  );
                }
              } //
              else{
                return (
                  <tr>
                    <td className="td">{item.project}</td>
                    <td className="td">{item.text}</td>
                    <td className="td">{item.assignee}</td>
                    <td className="td">{item.complete ? 'Completed' : 'Pending'}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;