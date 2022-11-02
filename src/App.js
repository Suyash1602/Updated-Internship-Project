import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, NavLink } from 'react-router-dom';
import logo from './logo.png'
import { useSelector, useDispatch } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { clearState } from './store/userLoginSlice';
import { FaTwitter, FaInstagram, FaFacebook, } from 'react-icons/fa'


import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



// importing components
import { Home, AboutUs, SignIn, SignUp, ProductList, AddProduct, Invalid } from './components/AllComponents'

// icon
import { FaSignOutAlt } from "react-icons/fa";

function App() {
  const backgroundImg = "http://mdbootstrap.com/img/Photos/Others/images/91.jpg"


  let { userObj, isSuccess } = useSelector(state => state.userLogin);
  let dispatch = useDispatch();

  const userLogOut = () => {
    localStorage.removeItem("token")
    let actionObj = clearState()
    dispatch(actionObj)
  }


  // for chatbot-jinx
  const steps = [
    {
      id: '0',
      message: 'Hey there!',

      // This calls the next id
      // i.e. id 1 in this case
      trigger: '1',
    }, {
      id: '1',

      // This message appears in
      // the bot chat bubble
      message: 'Please write your Name',
      trigger: '2'
    }, {
      id: '2',

      // Here we want the user
      // to enter input
      user: true,
      trigger: '3',
    }, {
      id: '3',
      message: " Hi {previousValue}, how can I help you?",
      trigger: 4
    }, {
      id: '4',
      options: [

        // When we need to show a number of
        // options to choose we create alist
        // like this
        { value: 1, label: 'View Mobile Phones' },
        { value: 2, label: 'View other Products' },

      ],
      end: true
    }
  ];

  // Creating our own theme
  const theme = {
    background: '#82a8f4',
    headerBgColor: '#0F3789',
    headerFontSize: '30px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#1974d2',
    userFontColor: 'white',
  };

  // Set some properties of the bot
  const config = {
    botAvatar: "https://media.istockphoto.com/vectors/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-vector-id1221348467?k=20&m=1221348467&s=612x612&w=0&h=hp8h8MuGL7Ay-mxkmIKUsk3RY4O69MuiWjznS_7cCBw=",
    floating: true,


  };




  return (
    <>
      <div className='d-flex flex-column min-vh-100' style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // height: '500px',
      }}>
        {/* navbar start */}
        <Navbar sticky="top" className="" variant='dark' bg="dark" expand="lg">
          {/* <Container> */}
          <div className="container-fluid mx-auto">
            <NavLink className="nav-link" aria-current="page" to='/' end >
              <img src={logo} width="90px" />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

              <ul className="navbar-nav text-center ">

                {/* showing only after successful login */}
                {isSuccess === true ? <>

                  {/* link for ProductList */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page"
                      to="/productList" >Product List</NavLink>
                  </li>
                  {/* link for AddProduct */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page" to={`/addProduct/${userObj.username}`} >Add Product</NavLink>
                  </li>

                  <NavDropdown className='fw-bold' title={userObj.username} menuVariant="dark">
                    <NavDropdown.Item >
                      <NavLink onClick={userLogOut} className="nav-link " aria-current="page" to="/signin" >Sign Out <FaSignOutAlt /> </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </> : <>

                  {/* link for home */}
                  < li className="nav-item px-3 navHover ">
                    <NavLink className="nav-link fw-bold " aria-current="page" to="/" end>Home</NavLink>
                  </li>

                  {/* link for product list */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page"
                      to="/productList" >Product List</NavLink>
                  </li>


                  {/* link for SignIn */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page" to="/signin" >SignIn</NavLink>
                  </li>



                  {/* link for SignUp */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page" to="/signup" >SignUp</NavLink>
                  </li>

                  {/* link for About */}
                  <li className="nav-item px-3 navHover">
                    <NavLink className="nav-link fw-bold" aria-current="page" to="/aboutUs" >About</NavLink>
                  </li>

                </>}
              </ul>

            </Navbar.Collapse>
          </div>
          {/* </Container> */}
        </Navbar>

        {/* creating routes */}
        <Routes>
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/productList/' element={<ProductList />} />
          {/* <Route path='/productList/:username' element={<ProductList />} /> */}
          <Route path='/addProduct/:username' element={<AddProduct />} />
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Invalid />} />
        </Routes>


        <div className="Jinx "  >
          <ThemeProvider theme={theme}>
            <ChatBot

              // This appears as the header
              // text for the chat bot
              headerTitle="Jinx"
              steps={steps}
              {...config}
              style={{ bottom: " 5rem" }}

            />
          </ThemeProvider>
        </div>



        {/* footer */}
        <footer className="mt-auto bg-dark text-white opacity-50">

          {/* <!-- Copyright --> */}
          <div className="footer-copyright text-center py-3">
            2022 ©Copyright All Rights Reserved  <br /> The Premium Products Pvt Ltd
          </div>
          {/* <!-- Copyright --> */}

        </footer>


      </div >
    </>
  );
}

export default App;
