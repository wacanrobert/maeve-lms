import axios from "axios";
import React from "react";

const GETALLADMIN_DATABASE_URL = "http://localhost:8080/admin/getAllAdmins";

class AdminService extends Component{

    getAllAdmins(){
        return axios.get(GETALLADMIN_DATABASE_URL);
    }

}

export default new AdminService()