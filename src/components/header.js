import React,{Component} from 'react';
import '../css/header.css';
import group from '../assets/group.png';
import product from '../assets/product.png';
import submit from '../assets/submit.png'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        
            <div class="sideLinks">
                <p>
                    <div id="headerLinks" class="row">

                        <div class="headerIcon">
                        <a href="" style={{color:"black",fontWeight:"bold"}}>users </a>
                        <img src={group} alt="users"/>
                        </div>


                        <div class="headerIcon">
                        <a href="" style={{color:"black",fontWeight:"bold"}}>order </a>
                        <img src={submit} alt="users"/>
                        </div>


                        <div class="headerIcon">
                        <a href="" style={{color:"black",fontWeight:"bold"}}>products </a>
                        <img src={product} alt="users"/>
                        </div>

                        <div class="headerIcon">
                        <a href="" style={{color:"black",fontWeight:"bold"}}>more ... </a>
                        </div>

                    </div>

                </p>


            </div>

      
         );
    }
}
 
export default Header;