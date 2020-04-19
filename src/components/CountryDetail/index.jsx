import React from "react";

export default class CountryDetail extends React.Component {
  // componentDidMount() {
  //   this.intervalId = setInterval(() => this.loadData(), 60 * 1000);
  //   this.loadData();
  // }

  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  // }

  // loadData() {
  //   this.props.fetchCoronaCasesSummaryRequest();
  // }

  render() {
    // const { summaryDetails } = this.props;

    return (
      <>
        Country Details View Section
        {/* <PageTitle {...this.props} />
        <Summary globalSummary={summaryDetails.Global} />
        <br />
        <Table columns={columns} dataSource={summaryDetails.Countries} /> */}
      </>
    );
  }
}
