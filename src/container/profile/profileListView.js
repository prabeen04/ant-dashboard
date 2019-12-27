import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Icon } from "antd";
import { getSingleProfile } from "../../actions/profile_actions";
import classNames from "classnames";
import "../post/post.css";

function ProfileListView(props) {
  const listClasses = classNames({
    "post-row": true,
    "single-post": true,
    "activated-profile-listview":
      props.user.name === props.activatedProfile.name
  });
  return (
    <div
      className={listClasses}
      style={{ display: "flex", margin: "0.5rem" }}
      onClick={() => props.getSingleProfile(props.user)}
    >
      <div className="post-title">
        <Icon type="idcard" className="post-icon" /> &nbsp;&nbsp;&nbsp;
        {props.user.name}
      </div>
      <div className="post-title">
        <Icon type="user" className="post-icon" /> &nbsp;&nbsp;&nbsp;
        {props.user.email}
      </div>
      <div className="post-title">
        <Icon type="clock-circle-o" className="post-icon" /> &nbsp;&nbsp;&nbsp;
        {props.user.location}
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  activatedProfile: state.profileReducer.singleProfile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getSingleProfile
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(ProfileListView);
