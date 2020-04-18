import Details from "../../components/Details";
import { connect } from "react-redux";
import { fetchCoronaCasesSummaryRequest } from "./action";

const mapStateToProps = state => ({
  summaryDetails: state.details
});

const mapDispatchToProps = {
  fetchCoronaCasesSummaryRequest
};

export default connect(mapStateToProps,mapDispatchToProps)(Details);