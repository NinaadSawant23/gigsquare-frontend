import React, { useState } from 'react';
import './userAuth.css';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
    MDBTabsContent
} from 'mdb-react-ui-kit';
import logo from '../Images/logo.svg';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { SIGNIN_URL, SIGNUP_URL } from '../URLconstants';

const UserAuth = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [logged,setLogged] = useState('freelancer')
    const [isSelected, setSelected] = useState(false);
    const [btndisabled, setbtnDisabled] = useState(false)
    const [userName, setUserName] = useState('');
    const [passWord, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const history = useNavigate();

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
        setUserName('');
        setPassword('');
    };

    const handlelogClick = (value) => {
        if (value === logged) {
            setSelected(true)
            return;
        }
        setLogged(value);
        setSelected(true)
    };

    const onChangeText = (e, type) => {
        if (type === 'username') {
            setUserName(e.target.value)
        }
        if (type === 'password') {
            setPassword(e.target.value)
        }
        if (type === 'firstname') {
            setFirstname(e.target.value)
        }
        if (type === 'lastname') {
            setLastName(e.target.value)
        }
        if (type === 'email') {
            setEmail(e.target.value)
        }
    }

    const onSignup = async () => {
        setbtnDisabled(true)
        try {
            const response = await axios({ method: 'post', url: SIGNUP_URL, data: { username: userName, password: passWord } });
            if (response && response.status === 200) {
                toast.success("Registered Succesfully")
                setJustifyActive('tab1');

            }
        }

        catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error('No response received from the server');
            } else {
                toast.error('Error: ' + error.message);
            }

        }
        setbtnDisabled(false)
        setUserName('');
        setPassword('');

    }
    const onSignIn = async () => {
        setbtnDisabled(true)
        try {
            const response = await axios({
                method: 'post',
                url: SIGNIN_URL,
                data: { username: userName, password: passWord }
            });

            if (response && response.status === 200) {
                const token = response.data.token;
                history.push('/questions');
                toast.success('LogIn successful');
                localStorage.setItem('token', token);
                localStorage.setItem('user', userName);

            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error('No response received from the server');
            } else {
                toast.error('Error: ' + error.message);
            }
            setUserName('');
            setPassword('');
        }
        setbtnDisabled(false)

    }
    return (
        <div className='bg-color'>
            {console.log('TAb Active', justifyActive)}
            <MDBContainer fluid className="">
                <MDBRow>
                    <MDBCol col='10' md='6' style={{ paddingLeft: '39px' }}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            className="custom-img" alt="" style={{ width: '170%', height: '100%' }} />
                    </MDBCol>
                    {isSelected ? <MDBCol col='4' md='6'>
                        <div className='vertical-center border-style'>
                            <div className='d-flex flex-row'><img src={logo} alt="logo" className="" />
                                <p className='logo-header'>TrustWork.AI</p>
                            </div>
                            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} className='header-title bg-color-cus'>
                                        Login
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className='header-title bg-color-cus'>
                                        Register
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>

                            <MDBTabsContent>
                                <MDBTabsPane open={justifyActive === 'tab1'}>
                                    <p className='margin-bottom2'>Username</p>
                                    <MDBInput wrapperClass='mb-4' type='text' label="Username" onChange={(e) => onChangeText(e, 'username')} />
                                    <p className='margin-bottom2'>Password</p>
                                    <MDBInput wrapperClass='mb-4' type='password' label="Password" onChange={(e) => onChangeText(e, 'password')} />
                                    <button className='btn-sign' onClick={() => { onSignIn() }} disabled={btndisabled}>Sign In</button>
                                    <p className="text-center">Not a member? <a href="#!" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Register</a></p>

                                </MDBTabsPane>

                                <MDBTabsPane open={justifyActive === 'tab2'}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <p className='margin-bottom2'>First Name</p>
                                            <MDBInput wrapperClass='mb-4' type='text' label="First Name" onChange={(e) => onChangeText(e, 'firstname')} value={firstName} />
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='margin-bottom2'>Last Name</p>
                                            <MDBInput wrapperClass='mb-4' type='text' label="Last Name" onChange={(e) => onChangeText(e, 'lastname')} value={lastName} />
                                        </div>
                                    </div>
                                    <p className='margin-bottom2'>Email</p>
                                    <MDBInput wrapperClass='mb-4' type='text' label="Email" onChange={(e) => onChangeText(e, 'email')} value={email} />
                                    <p className='margin-bottom2'>Password</p>
                                    <MDBInput wrapperClass='mb-4' type='password' label="Password" onChange={(e) => onChangeText(e, 'password')} value={passWord} />
                                    <button className='btn-sign' onClick={() => onSignup()} disabled={btndisabled}>Sign Up</button>

                                </MDBTabsPane>

                            </MDBTabsContent>
                        </div>

                    </MDBCol> : <MDBCol col='4' md='6'>
                        <div className='vertical-center border-style'>
                            <div className='d-flex flex-row'><img src={logo} alt="logo" className="" />
                                <p className='logo-header'>TrustWork.AI</p>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p className='margin-bottom2 text-center' style={{fontSize:'20px'}}>Join in as a Client or Freelancer?</p>
                            <br/>
                            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handlelogClick('client')} active={logged === 'client'} className='header-title bg-color-cus'>
                                        Client
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handlelogClick('freelancer')} active={logged === 'freelancer'} className='header-title bg-color-cus'>
                                        Freelancer
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </div>

                    </MDBCol>}

                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default UserAuth;