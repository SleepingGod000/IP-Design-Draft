<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Credit Card</title>

    <link href="css/style.css" rel="stylesheet">

	<link href="font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

</head>
<body>

<!-- Navigation -->
    <nav class="navbar-dark navbar-expand-lg bg-dark fixed-top">     
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2 col-lg-2 pt-2">
					<a class="navbar-brand  ml-sm-2" href="#">Shop Logo</a>	
					<button class="navbar-toggler d-md-none d-inline float-right mr-sm-2 mt-2" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>	
					<a class="py-0 d-md-none d-inline float-right" href="#">
						<span class="fa-stack fa-2x has-badge" data-count="10">
							<i class="fa fa-shopping-cart fa-stack-1x"></i>
						</span>
					</a>
					
				</div>
				<div class="col-md-7 col-lg-8 pt-0 py-sm-3">
					<form class="navbar-form" role="search">
						<div class="searchbar">
							<input type="text" class="form-control" placeholder="Search">
							<span class="input-group-btn">
								<button class="btn btn-outline-success mx-1" type="submit">
									<i class="fa fa-search" aria-hidden="true"></i>
								</button>
								<button class="btn btn-outline-info mx-1" type="submit">
									Advanced Search
								</button>
							</span>
						</div>
					</form>
				</div>			
				<div class="col-md-3 col-lg-2">
					<button class="navbar-toggler d-lg-none d-md-inline d-none float-right mr-sm-2 mt-2" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<a class="py-0 d-md-inline d-none float-right" href="#">
						<span class="fa-stack fa-2x has-badge" data-count="10">
							<i class="fa fa-shopping-cart fa-stack-1x"></i>
						</span>
					</a>

				</div>
			</div>
		</div>
    </nav>
	
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Shop
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a class="dropdown-item" href="#">Bicycle</a>
						<a class="dropdown-item" href="#">Gadget</a>
					</div>
				</li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
            <ul class="navbar-nav mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
    </nav>	
	
	<div class="container">
		<form>
			<div class="form-group row">
				<label for="cardType" class="col-sm-2 col-form-label">Card Type</label>
				<div class="col-sm-10">
					<select name="cardType" type="text" class="form-control" id="cardType">
						<option selected>Choose...</option>
						<option value="MasterCard">MasterCard</option>
						<option value="Visa">Visa</option>
					</select>
				</div>
			</div>
			<div class="form-group row">
				<label for="cardHolderName" class="col-sm-2 col-form-label">Cardholder's Name</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="cardHolderName" placeholder="Cardholder's Name">
				</div>
			</div>
			<div class="form-group row">
				<label for="cardNumber" class="col-sm-2 col-form-label">Card Number</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="cardNumber" placeholder="Card Number">
					<p class="text-warning">* No hyphens required</p>
				</div>
			</div>
			<div class="form-group row">
				<label for="expiresOn" class="col-sm-2 col-form-label">Expires On</label>
				<div class="col-sm-5">
					<select name="expiresDate" type="text" class="form-control" id="expiresDate">
						<?php 
						for($i=1; $i<=4; $i++)
						{
							echo "<option value=".$i.">".$i."</option>";
						}
						?> 
						<option name="years"> </option>
					</select>
				</div>
				<div class="col-sm-5">
					<select name="expiresDate" type="text" class="form-control" id="expiresDate">
						<?php 
						for($i=1; $i<=4; $i++)
						{
							echo "<option value=".$i.">".$i."</option>";
						}
						?> 
						<option name="years"> </option>
					</select>
				</div>
			</div>
		</form>
	</div>

</body>
</html>
