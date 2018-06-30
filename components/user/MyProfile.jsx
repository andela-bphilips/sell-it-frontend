/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/auth';
import MyProfileForm from './MyProfileForm.jsx';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { user, updateUser } = this.props;
    if (user.imageUrl) {
      user.imageUrl = user.imageUrl.replace('sz=50', 'sz=176');
    }
    return (
      <div className="col-md-9 col-md-push-3">
        <div className="page-header text-center">
          <h1>My Profile</h1>
          {/* <p>Your profile</p> */}
        </div>{/* End .page-header */}
        <div className="mb5" />{/* margin */}
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="row">
              <div className="col-sm-12">
                <div
                  className="team-member scroll-anim"
                  data-anim="fadeInUp"
                  data-anim-delay="0.1s"
                >
                  <figure>
                    <img
                      src={user.imageUrl}
                      width="176"
                      height="176"
                      alt="Member"
                    />
                  </figure>
                  <h3>{user.fullname}</h3>
                  <p>{user.email}</p>
                </div>{/* End .team-member */}
              </div>{/* End .col-sm-4 */}
            </div>{/* End .row */}
            {
              user.email &&
              <MyProfileForm
                mobileNumber={user.mobileNumber}
                slackHandle={user.slackHandle}
                updateUser={updateUser}
              />
            }

          </div>{/* End .col-md-10 */}
        </div>{/* End .row */}
        <div className="mb50" />{/* margin */}
      </div>

    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { updateUser })(MyProfile);
