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
                <Typography > <Link href="/updateViewCourses"underline="none" color="primary"> &nbsp;&nbsp; View Course 
                </Link> </Typography> 
                <Link href="/postCourse" underline="none" color="primary"> &nbsp;&nbsp;Add Course 
                </Link>
                <Link href="/putCourse" underline="none" color="primary"> &nbsp;&nbsp; <b> Edit Course</b>
                </Link>
                <Link href="/deleteCourse" underline="none" color="primary"> &nbsp;&nbsp; Delete Course 
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ListItemButton >
                <SearchBar placeholder = "6" onChange={(event) => handleChange(event.target.value)}
                        searchBarWidth='500px' /> 
            </ListItemButton> 
                

           </MyList>
        </div>
        </TableContainer>
        

        
    );
}