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
                <Link href="/putCourse" underline="none" color="primary"> &nbsp;&nbsp;Edit Course
                </Link>
                <Link href="/deleteCourse" underline="none" color="primary"> &nbsp;&nbsp; <b> Delete Course </b>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ListItemButton >
                <SearchBar/> <TextField  placeholder = "Search Course" fullWidth= "true" variant="standard" 
                onKeyPress={() => {navigate('/delete/id=6')}}
                          /> 
            </ListItemButton> 
                

           </MyList>
        </div>
        </TableContainer>
        

        
    );
}