import { List} from "@mui/material";
import {styled} from "@mui/material/styles";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
  justifyContent: 'center',
  alignItems: "center",
}));

const preventDefault = (event) => event.preventDefault();

export const Choice = () =>{
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
    </Box>
  );
};

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0B3455',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
  return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchIcon sx={{ marginRight: '10px' }} />
          <Input
              placeholder={placeholder}
              onChange={onChange}
              sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
              disableUnderline
          />
      </Box>
  )
};

export const handleChange = (value) => {
  console.log(value);
};




