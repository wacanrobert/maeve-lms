import {ListItemButton, TableContainer, TextField} from "@mui/material";
import {MyList, SearchBar, handleChange} from './Style';
import {useNavigate} from "react-router-dom";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


export default function CourseSearchBar(){
    let navigate = useNavigate();


    return (
        <TableContainer component={Paper}>
            <div className ="SearchBar">
           <MyList type = "row">
                <Typography > <Link id="link" href="/updateViewCourses"underline="none" color="#0B3455"> &nbsp;&nbsp; View Course 
                </Link> </Typography> 
                <Link id="link" href="/postCourse" underline="none" color="#0B3455"> &nbsp;&nbsp;Add Course 
                </Link>
                <Link id="link" href="/putCourse" underline="none" color="#0B3455"> &nbsp;&nbsp;Edit Course
                </Link>
                <Link id="link" href="/deleteCourse" underline="none" color="#0B3455"> &nbsp;&nbsp; <b> Delete Course </b>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ListItemButton >
                <SearchBar placeholder = "Search Course" fullWidth= "true" variant="standard" 
                          /> 
            </ListItemButton> 
                

           </MyList>
        </div>
        </TableContainer>
        

        
    );
}