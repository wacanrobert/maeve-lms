import axios from "axios";
import React from "react";

const ADMIN_DATABASE_URL = "http://localhost:8080/admin/getAllAdmins";

class AdminService{

    getAdmins(){
        return axios.get(ADMIN_DATABASE_URL);
    }

}

export default new AdminService()