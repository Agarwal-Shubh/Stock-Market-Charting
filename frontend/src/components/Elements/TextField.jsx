import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

const CustomTextField = withStyles({
    root: {
        borderStyle: 'solid',
        borderRadius: '.5px',
        borderColor: "#3b4c58",
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderColor: "#3b4c58",
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: "#3b4c58",
        },
        '&:hover fieldset': {
            borderColor: "#3b4c58",
        },
        '&.Mui-focused fieldset': {
            borderColor: "#3b4c58",
        },
      },
    },
  })(TextField);

  export default CustomTextField;