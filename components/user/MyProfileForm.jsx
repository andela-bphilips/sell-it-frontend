import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
// import { getCurrentUser } from '../../actions/auth';

class MyProfileForm extends Component {
  constructor(props) {
    super(props);
    const { mobileNumber, slackHandle } = this.props;
    this.state = {
      mobileNumber: this.props.mobileNumber,
      slackHandle: this.props.slackHandle,
      loading: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { mobileNumber, slackHandle } = this.state;
    this.setState({ loading: true });
    this.props.updateUser({ slack_handle: slackHandle, mobile_number: mobileNumber }).then(() => {
      this.setState({ loading: false });
      toastr.info("Profile Updated Successfully");      
    });
  }

  render() {
    const { mobileNumber, slackHandle, updateUser } = this.props;
    const { loading } = this.state;
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit} className="contact-form">
        <div className="row">
          <div className="signin-form">
                  <div className="form-group">
                    <label>Phone number*</label>
                    <input type="text" placeholder="e.g +2348012345691" name="mobileNumber" className="form-control" value={this.state.mobileNumber} onChange={this.onChange} required />
                  </div>{/* End .form-group */}
                  <div className="form-group">
                    <label>Slack Handle*</label>
                    <input type="text" placeholder="e.g @seunkoko" name="slackHandle" className="form-control" value={this.state.slackHandle} onChange={this.onChange} required />
                  </div>{/* End .form-group */}
                </div>{/* End .col-sm-6 */}
        </div>{/* End .row */}
        <div className="clearfix text-center">
          <input type="submit" className="btn btn-primary min-width" disabled={!!loading} defaultValue={loading ? 'Updating...' : 'Update Profile'} />
        </div>{/* End .clearfix */}
      </form>

    );
  }
}

export default MyProfileForm;
