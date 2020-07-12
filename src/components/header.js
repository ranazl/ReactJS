import React,{Component} from 'react';
import '../css/header.css';
import group from '../assets/group.png';
import product from '../assets/product.png';
import order from '../assets/order.png';
import notification from '../assets/notification.png';
import girl from '../assets/girl.jpg';
// import hey from '../assets/hey.png';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        
            <div >
                <p>
                    <div id="headerLinks" class="row">

                     
                        {/* <img src={hey} alt="logo" style={{width:70,height:70}}/> */}
                        

                        <div className="headerIcon">
                        <a href="" className="text">users </a>
                        <img src={group} alt="users"/>
                        </div>


                        <div className="headerIcon">
                        <a href="" className="text">order </a>
                        <img src={order} alt="order"/>
                        </div>


                        <div className="headerIcon">
                        <a href="" className="text">products </a>
                        <img src={product} alt="products"/>
                        </div>

                        <div className="headerIcon notification">
                        <a href="" className="text">more ... </a>
                        </div>

                        <div className="notificationProfile">
                            <img src={notification} alt="notification" />
                            <img src={girl} alt="profile" className="profile"/>
                        </div>

                    </div>

                </p>


            </div>

      
         );
    }
}
 
export default Header;