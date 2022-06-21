import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import BasicTabs from '../forms/Forms'


function getModalStyle() {

  return {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});



class SimpleModal extends React.Component {
  state = {
    open: false,
    logState:'Login'
  };

  logoutSuccessHandler = () => {
    this.setState({
      open: false,
      logState:'Login'
    });

  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false});
  };

  clickHandle = () => {
    //when logged in

    if(window.sessionStorage.getItem('access-token')!==null){
      // this.setState({logState:"Logout"})
      console.log(window.sessionStorage.getItem('access-token'))

      //call logout api

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${window.sessionStorage.getItem('access-token')}`);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("http://localhost:8085/api/v1/auth/logout", requestOptions)
          .then(response => response.text())
          .then(result => {console.log(result)
            
              alert('Logout Successful');
              window.sessionStorage.clear();
              this.logoutSuccessHandler();
              // window.location.reload();
            })
          .catch(error => console.log('error', error));
      
        }

    //when not logged in
    else{
      this.handleOpen();
    }
  }

  logStateHandler = () => {
    if(window.sessionStorage.getItem('access-token')===null){
      this.setState({logState:"Login"})
    }
    else{
      this.setState({logState:"Logout"})

      console.log("set log state to logout", this.state.logState)

    }
  }

  
  //this is the method that is called when the component is mounted
  componentDidMount(){
    this.logStateHandler();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="contained" onClick={this.clickHandle} >{this.state.logState}</Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            
            <BasicTabs />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
