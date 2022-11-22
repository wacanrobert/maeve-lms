package com.maeve.lms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maeve.lms.Entity.AdminEntity;
import com.maeve.lms.Entity.CourseEntity;
import com.maeve.lms.Repository.AdminRepository;
import com.maeve.lms.Repository.CourseRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository arepo;
	
	///Create or insert a record
		public AdminEntity insertAdmin(AdminEntity admin) {
			return arepo.save(admin);
		}
		
		
	//Read a record from the table named tbl_admin
		public List<AdminEntity> getAllAdmins(){
			return arepo.findAll();
		}
		
		
	//Read or search admin record by AdminFullname
		public AdminEntity findByAdminFullname(String fname) {
			if (arepo.findByAdminFullname(fname) != null) {
				return arepo.findByAdminFullname(fname); // findByAdminFullname is a user-defined method
			}
			else {
				return null;
			}
		}
		
		
	//Update an admin record
		@SuppressWarnings("finally")
		public AdminEntity putAdmin(int id, AdminEntity newAdminDetails) throws Exception{
			AdminEntity  admin = new AdminEntity();
			
			try {
				// 1 - search id of admin
				admin = arepo.findById(id).get(); // findById pre-defined method 
				
				// 2 - update/set the new attributes of the admin record
				admin.setAdminPassword(newAdminDetails.getAdminPassword());
				admin.setAdminPosition(newAdminDetails.getAdminPosition());
				
			}catch(NoSuchElementException nex) {
				throw new Exception("ID Number: " + id + " does not exist!");
			}finally {
				// 3 - save the information and return the new admin
				return arepo.save(admin);
			}
		}
	
	
	//Delete a admin record
		public String deleteAdmin(int id) {
			String msg = "";
			// 1 - search id
			if(arepo.findById(id)!=null) {
				// 2 - if found delete
				arepo.deleteById(id);
				
				msg = "Admin ID Number " + id + " is successfully deleted!";
			}
			else {
				msg = "Admin ID Number " + id + " is not found!";
			}
			return msg;
		}
		
}
