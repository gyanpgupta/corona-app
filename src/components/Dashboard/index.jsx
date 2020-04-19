import React from "react";
import { Table } from "antd";
import Summary from "../Shared/Summary";
import PageTitle from "../Shared/PageTitle";
import { columns, getSortedCountriesData } from "./utility";

export default class Dashboard extends React.Component {
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
        <PageTitle {...this.props} />
        <Summary globalSummary={summaryDetails.Global} />
        <br />
        <Table columns={columns} dataSource={getSortedCountriesData(summaryDetails.Countries)} />
      </>
    );
  }
}
