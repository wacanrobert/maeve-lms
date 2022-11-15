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
	private int id;
	
	private String fullnane;
	private String email;
	private String phonenumber;
	private String Address;
	
	public AdminEntity(int id, String fullnane, String email, String phonenumber, String address) {
		super();
		this.id = id;
		this.fullnane = fullnane;
		this.email = email;
		this.phonenumber = phonenumber;
		Address = address;
	}

	@Override
	public String toString() {
		return "AdminEntity [id=" + id + ", fullnane=" + fullnane + ", email=" + email + ", phonenumber=" + phonenumber
				+ ", Address=" + Address + "]";
	}

	public int getId() {
		return id;
	}

	public String getFullnane() {
		return fullnane;
	}

	public void setFullnane(String fullnane) {
		this.fullnane = fullnane;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}
	
}
