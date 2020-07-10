import React, { useReducer } from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";
import firebase from "../../firebase";

class UserPanel extends React.Component {
state = {
    user: this.props.currentUser
}



  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
        Signed in as<strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>,
    },
    {
      key: "sign out",
      text: <span onClick={this.handleSignout}>Sign Out</span>,
    },
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!"));
  };

  render() {
    // console.log(this.props.currentUser);

    return (
      <Grid style={{ background: "#4A154B" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header inverted flaoted="left" as="h2">
              <Icon name="modx" />
              <Header.Content>DevChat</Header.Content>
            </Header>
          </Grid.Row>
          {/* User Dropdown */}

          <Header style={{ padding: "0.25" }} as="h4" inverted>
            <Dropdown
              trigger={<span>{this.state.user.displayName}</span>}
              options={this.dropdownOptions()}
            />
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}



export default UserPanel;
