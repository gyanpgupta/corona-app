import React from "react";
import { Table, Row, Col } from "antd";
import Summary from "../Shared/Summary";
import PageTitle from "../../redux/Shared/PageTitle";
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
        <Row>
          <PageTitle {...this.props} />
        </Row>
        <Row>
          <Col span={2} />
          <Col span={20}>
            <Summary globalSummary={summaryDetails.Global} />
            <br />
            <Table
              columns={columns}
              dataSource={getSortedCountriesData(summaryDetails.Countries)}
            />
          </Col>
          <Col span={2} />
        </Row>
      </>
    );
  }
}
