import React from "react";
import { PageHeader, Button } from "antd";

export default class PageTitle extends React.Component {
  handleLogout = () => {
    this.props.onAuthLogoutRequest();
  };

  render() {
    return (
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="COVID-19 TEST APP"
        subTitle="This is a Test App"
        extra={[
          <Button onClick={this.handleLogout} key="1" type="primary">
            Logout
          </Button>,
        ]}
      />
    );
  }
}
