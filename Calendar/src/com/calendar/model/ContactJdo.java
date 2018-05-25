package com.calendar.model;

import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

@PersistenceCapable
public class ContactJdo {
	@PrimaryKey
	String id ="";

	@Persistent
	String LoginId = "";
	
	@Persistent
	boolean verified_email =false;

	@Persistent
	String FirstName = "";

	@Persistent
	String LastName = "";

	@Persistent
	String Picture = "";

	@Persistent
	String LoginType = "";
	
	public String getLoginType() {
		return LoginType;
	}

	public void setLoginType(String loginType) {
		LoginType = loginType;
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public boolean isVerified_email() {
		return this.verified_email;
	}

	public String getLoginId() {
		return LoginId;
	}

	public void setLoginId(String loginId) {
		LoginId = loginId;
	}

	public void setVerified_email(boolean verified_email) {
		this.verified_email = verified_email;
	}

	public String getFirstName() {
		return this.FirstName;
	}

	public void setFirstName(String FirstName) {
		this.FirstName = FirstName;
	}

	public String getLastName() {
		return this.LastName;
	}

	public void setLastName(String LastName) {
		this.LastName = LastName;
	}

	public String getPicture() {
		return Picture;
	}

	public void setPicture(String picture) {
		this.Picture = picture;
	}
	
	public String toString() {
		return

		"ContactJdo [id=" + this.id + ", LoginId=" + this.LoginId + ", verified_email=" + this.verified_email + ", FirstName=" + this.FirstName + ", LastName=" + this.LastName + ",picture="
				+ this.Picture + "]";
	}
}
