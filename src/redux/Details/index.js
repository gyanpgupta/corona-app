import Details from "../../components/Details";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCoronaCasesSummaryRequest } from "./action";

const mapStateToProps = state => ({
  summaryDetails: state.details
});

const mapDispatchToProps = {
  fetchCoronaCasesSummaryRequest
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Details));