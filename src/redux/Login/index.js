import Login from "../../components/Login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { onAuthRequest } from "./action";

const mapStateToProps = (state) => ({
  authDetails: state.auth,
});

const mapDispatchToProps = {
  onAuthRequest,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
