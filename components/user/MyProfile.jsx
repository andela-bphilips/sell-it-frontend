import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MyProfile extends Component {
  render() {
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
                <div className="team-member scroll-anim" data-anim="fadeInUp" data-anim-delay="0.1s">
                  <figure>
                    <img src="/assets/images/team/member2.jpg" alt="Member" />
                  </figure>
                  <h3>Philips Blessing</h3>
                  <p>Lagos</p>
                </div>{/* End .team-member */}
              </div>{/* End .col-sm-4 */}
            </div>{/* End .row */}
            <form action="#" className="contact-form">
  <div className="row">
    <div className="signin-form">
      <div className="form-group">
        <label>Phone number*</label>
        <input type="text" placeholder="e.g +2348012345691" className="form-control" required />
      </div>{/* End .form-group */}
      <div className="form-group">
        <label>Slack Handle*</label>
        <input type="text" placeholder="e.g @seunkoko" className="form-control" required />
      </div>{/* End .form-group */}
    </div>{/* End .col-sm-6 */}
  </div>{/* End .row */}
  <div className="clearfix text-center">
    <input type="submit" className="btn btn-primary min-width" defaultValue="Update Profile" />
  </div>{/* End .clearfix */}
</form>

          </div>{/* End .col-md-10 */}
        </div>{/* End .row */}
          <div className="mb50" />{/* margin */}
        </div>

    );
  }
}
