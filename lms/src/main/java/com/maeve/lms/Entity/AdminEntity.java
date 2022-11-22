package com.maeve.lms.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_admin")
public class AdminEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int adminId;
	
	private String adminUsername;
	private String adminPassword;
	private String adminFullname;
	private String adminEmail;
	private String adminPhoneNumber;
	private String adminAddress;
	private String adminPosition;
	
	
	public AdminEntity() {}


	public AdminEntity(int adminId, String adminUsername, String adminPassword, String adminFullname, String adminEmail,
			String adminPhoneNumber, String adminAddress, String adminPosition) {
		super();
		this.adminId = adminId;
		this.adminUsername = adminUsername;
		this.adminPassword = adminPassword;
		this.adminFullname = adminFullname;
		this.adminEmail = adminEmail;
		this.adminPhoneNumber = adminPhoneNumber;
		this.adminAddress = adminAddress;
		this.adminPosition = adminPosition;
	}


	public int getAdminId() {
		return adminId;
	}


	public String getAdminUsername() {
		return adminUsername;
	}


	public void setAdminUsername(String adminUsername) {
		this.adminUsername = adminUsername;
	}


	public String getAdminPassword() {
		return adminPassword;
	}


	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}


	public String getAdminFullname() {
		return adminFullname;
	}


	public void setAdminFullname(String adminFullname) {
		this.adminFullname = adminFullname;
	}


	public String getAdminEmail() {
		return adminEmail;
	}


	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}


	public String getAdminPhoneNumber() {
		return adminPhoneNumber;
	}


	public void setAdminPhoneNumber(String adminPhoneNumber) {
		this.adminPhoneNumber = adminPhoneNumber;
	}


	public String getAdminAddress() {
		return adminAddress;
	}


	public void setAdminAddress(String adminAddress) {
		this.adminAddress = adminAddress;
	}


	public String getAdminPosition() {
		return adminPosition;
	}


	public void setAdminPosition(String adminPosition) {
		this.adminPosition = adminPosition;
	}
	
	
	
}
