import React from "react";
import { Table, PageHeader, Button } from "antd";
import Summary from "./Summary";
import { columns } from "./utility";

export default class Details extends React.Component {
  componentDidMount() {
    this.intervalId = setInterval(() => this.loadData(), 60 * 1000);
    this.loadData();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  loadData() {
    this.props.fetchCoronaCasesSummaryRequest();
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };

  render() {
    const { summaryDetails } = this.props;

    return (
      <>
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
        <Summary globalSummary={summaryDetails.Global} />
        <br />
        <Table columns={columns} dataSource={summaryDetails.Countries} />
      </>
    );
  }
}
