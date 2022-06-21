import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {
  //for tabs
  const [value, setValue] = React.useState(0);

  //log state
  // const [logState, setLogState] = React.useState('login');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//for login
  const [loginUsername, setloginUsername] = React.useState('');
  const [loginPassword, setloginPassword] = React.useState('');

//for registeration
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [password, setPassword] = React.useState('');

//for successMessage
const [successMessage, setSuccessMessage] = React.useState('');


//Login handler
 async function loginHandle(event) {
    event.preventDefault();
    const param = window.btoa(`${loginUsername}:${loginPassword}`);
  try {
  const rawResponse = await fetch("http://localhost:8085/api/v1/auth/login" , {
  method : 'POST' ,
  headers : {
              "Content-Type" : "application/json ; charset-UTF-8" ,
              "Access-Control-Allow-Origin": "*" ,
              authorization : `Basic ${param}`
            }
       } ) ;
  const result = await rawResponse.json ( ) ;
  if ( rawResponse.ok ){
    console.log("success", rawResponse.headers.get('access-token'))
    console.log("success", result)
    // setLogState('Log out');


    window.sessionStorage.setItem ( 'user-details' , JSON.stringify(result) ) ;
    window.sessionStorage.setItem ( 'access-token' , rawResponse.headers.get('access-token')  ) ;

    setSuccessMessage("Login Successful");
    window.location.reload();
  }

  
  else {
      const error = new Error ( ) ;
      error.message = result.message || ' Something went wrong . ' ;

      alert(result.message);


      }
    } catch ( e ) {
    alert ( `Error : ${e.message} ` ) 
      }

  }

//Registeration handler
  async function registerHandle(event) {
    event.preventDefault();
    

    const params = {
      "email_address": email,
      "first_name": firstName,
      "last_name": lastName,
      "mobile_number": contact,
      "password": password
    }    
  try{
        const rawResponse = await fetch("http://localhost:8085/api/v1/signup",{
        body:JSON.stringify(params),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset-UTF-8'          
          }       
        });

      const result = await rawResponse.json();
      

      if(rawResponse.ok) {
        //if success

        setSuccessMessage("Registration Successful. Please Login!");

        console.log("Success ",result);

      } else {
        const error = new Error();
        error.message = result.message || 'something went wrong';
        console.log(result);
        throw error;
        //output.push(error);
      }
    }
    catch(error) {

      console.log("New Error:",error.message);
      //output.push(error.message);

    }
    

    // console.log(firstName, lastName, email, contact, password);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </Box>

    {/* Login Form */}
      <TabPanel value={value} index={0}>
        <ValidatorForm
            useRef="form"
            onSubmit={loginHandle}
            onError={errors => console.log(errors)}
        >
            <TextValidator 
            id="username"
            label="Username" 
            name="username"
            variant="standard"
            value={loginUsername}             
            onChange={e=>{setloginUsername(e.target.value)}} 
            validators={['required']}
            errorMessages={['required']}
            /> 
            <br />

            <TextValidator
            id="password" 
            label="Password" 
            name="password" 
            type="password" 
            variant="standard"
            value={loginPassword}
            onChange={e=>setloginPassword(e.target.value)} 
            validators={['required']}
            errorMessages={['required']} 
            /> 
            <br /><br />
            {successMessage}
            <center><Button variant="contained" color="primary" type="submit" >Login</Button> </center> 
        
        </ValidatorForm>
      </TabPanel>

{/* Registeration form */}

      <TabPanel value={value} index={1}>
        <ValidatorForm
        useRef="form"
        onSubmit={registerHandle}
        onError={errors => console.log(errors)}
        >

            <TextValidator
            id="firstName" 
            label="First Name" 
            name="firstname" 
            variant="standard"
            value={firstName}             
            onChange={e=>setFirstName(e.target.value)}
            validators={['required']}
            errorMessages={['required']}  
            /> <br />

            <TextValidator 
            label="Last Name" 
            name="lastname" 
            variant="standard"
            value={lastName} 
            onChange={e=>setLastName(e.target.value)} 
            validators={['required']}
            errorMessages={['required']} 
            /> <br />

            <TextValidator 
            label="Email" 
            name="email" 
            type="email" 
            variant="standard"
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            validators={['required']}
            errorMessages={['required']} 
            /> <br />
            
            <TextValidator 
            label="Password" 
            name="password" 
            variant="standard" 
            type="password" 
            autoComplete='off'
            value={password} 
            onChange={e=>setPassword(e.target.value)}
            validators={['required']}
            errorMessages={['required']} 
            /> <br />

            <TextValidator 
            label="Contact" 
            name="contact" 
            variant="standard" 
            type="number"
            value={contact}
            onChange={e=>setContact(e.target.value)}
            validators={['required']}
            errorMessages={['required']} 
            /> <br /> 

            {successMessage}

            <br /> 
            <center> <Button variant="contained" color="primary" type='submit'>Register</Button> </center>
        </ValidatorForm>
      </TabPanel>
      
    </Box>
  );
}
