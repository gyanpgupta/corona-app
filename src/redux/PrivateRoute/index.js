import PrivateRoute from "../../components/PrivateRoute";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  authDetails: state.auth,
});

export default connect(mapStateToProps, null)(PrivateRoute);
