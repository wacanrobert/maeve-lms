import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {MyList, Choice, SearchBar, handleChange} from './Style';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function CourseSearchBar(){
    let navigate = useNavigate();

    return (
        <div className ="SearchBar">
           <MyList type = "row">
                <Typography > <Link href="/courses"underline="none" color="inherit"> &nbsp;&nbsp; View Course 
                </Link> </Typography> 
                <Link href="/addCourse" underline="none" color="inherit"> &nbsp;&nbsp;Add Course 
                </Link>
                <Link href="/deleteCourse" underline="none" color="inherit"> &nbsp;&nbsp; Delete Course 
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

        
    );
}