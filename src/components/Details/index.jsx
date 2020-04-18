import React from "react";
import { Table } from "antd";
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

  render() {
    const { summaryDetails } = this.props;

    return (
      <>
        <Summary globalSummary={summaryDetails.Global} />
        <br />
        <Table columns={columns} dataSource={summaryDetails.Countries} />
      </>
    );
  }
}
