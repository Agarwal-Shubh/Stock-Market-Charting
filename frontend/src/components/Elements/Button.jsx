import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
    root: {
        backgroundColor:'#3b4c58',
      '& label.Mui-focused': {
        color: '#fff',
      },
      '&:hover': {
        backgroundColor:'#fff',
        borderColor:'#3b4c58',
        color:'#3b4c58',
        border:'#3b4c58 1px solid'
    },
    },
  })(Button);

export default CustomButton;