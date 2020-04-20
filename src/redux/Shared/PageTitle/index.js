import PageTitle from "../../../components/Shared/PageTitle";
import { connect } from "react-redux";
import { onAuthLogoutRequest } from "../../Login/action";

const mapDispatchToProps = {
  onAuthLogoutRequest,
};

export default connect(null, mapDispatchToProps)(PageTitle);
