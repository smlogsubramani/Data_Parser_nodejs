import React from 'react'

const Footer = () => {
  return (
    <div>
        <div class="footer">
	    <div class="container">		
		<div class="row text-center">						
			<div class="col-lg-11 col-sm-11 col-xs-11">
				<div class="footer_menu">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Service</a></li>
                        <li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>						
				<div class="footer_copyright">
					<p>© 2023 Loga. All Rights Reserved.</p>
				</div>	
				<div class="footer_profile">
					<ul>
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-pinterest"></i></a></li>
					</ul>
				    </div>						
			        </div>						
		        </div>				
	        </div>
        </div>
    </div>
  )
}

export default Footer