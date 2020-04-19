import Dashboard from "../../components/Dashboard";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCoronaCasesSummaryRequest } from "./action";

const mapStateToProps = state => ({
  summaryDetails: state.dashboard
});

const mapDispatchToProps = {
  fetchCoronaCasesSummaryRequest
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));