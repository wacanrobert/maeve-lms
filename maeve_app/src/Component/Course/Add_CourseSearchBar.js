import {ListItemButton, TableContainer} from "@mui/material";
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
                <Typography > <Link href="/addViewCourse"underline="none" color="primary"> &nbsp;&nbsp; View Course 
                </Link> </Typography> 
                <Link href="/postCourse" underline="none" color="primary"> &nbsp;&nbsp; <b> Add Course </b>
                </Link>
                <Link href="/putCourse" underline="none" color="primary"> &nbsp;&nbsp;Edit Course
                </Link>
                <Link href="/deleteCourse" underline="none" color="primary"> &nbsp;&nbsp; Delete Course 
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