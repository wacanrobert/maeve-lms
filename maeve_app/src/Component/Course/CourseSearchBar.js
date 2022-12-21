import {ListItemButton, ListItemIcon, ListItemText, TableContainer} from "@mui/material";
import {MyList, Choice, SearchBar, handleChange} from './Style';
import Button from '@mui/material/Button';
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
                <Typography > <Link href="/courses"underline="none" color="inherit"> &nbsp;&nbsp; View Course 
                </Link> </Typography> 
                <Link href="/postCourse" underline="none" color="inherit"> &nbsp;&nbsp;Add Course 
                </Link>
                <Link href="/putCourse" underline="none" color="inherit"> &nbsp;&nbsp;Edit Course
                </Link>
                <Link href="/deleteCourse" underline="none" color="inherit"> &nbsp;&nbsp; Delete Course 
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ListItemButton >
                    <SearchBar placeholder = "Search Course" onChange={(event) => handleChange(event.target.value)}
                        searchBarWidth='500px' /> 
            </ListItemButton> 
           </MyList>
        </div>
        </TableContainer>
        

        
    );
}