package com.maeve.lms.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.maeve.lms.Entity.AdminEntity;
import com.maeve.lms.Service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	AdminService aserv;
	
	//Create or insert a record
	@PostMapping("/postAdmin")
	public AdminEntity insertAdmin(@RequestBody AdminEntity admin) {
		return aserv.insertAdmin(admin);
	}
	
	
	//Read a record/s
	@GetMapping("/getAllAdmins")
	public List<AdminEntity> getAllAdmins(){
		return aserv.getAllAdmins();
	}
		
	@GetMapping("/getByAdminFullname")
	public AdminEntity findByAdminFullname(@RequestParam String fullname) {
		return aserv.findByAdminFullname(fullname);
	}
	
	//update a record 
	@PutMapping("/putAdmin")
	public AdminEntity putAdmin(@RequestParam int id, @RequestBody AdminEntity newAdminDetails) throws Exception{
		return aserv.putAdmin(id, newAdminDetails);
	}
		
	//delete a record 
	@DeleteMapping("/deleteAdmin/{AdminId}")
	public String deleteAdmin(@PathVariable int AdminId) {
		return aserv.deleteAdmin(AdminId);
	}
}
