import React from 'react';
function App (){
  return(
<div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="container-fluid" href="#">Credit Card Bill Payment</a>
    
    <div class="container-fluid" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="container-fluid" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="container-fluid" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Customer</a>
        </li>
        <li class="nav-item">
        <a class="container-fluid" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Admin</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>

<div class="alert alert-primary" role="alert">
  Welcome to Credit Card Management System!
</div>


<div class ="from-group">
</div>

<div class="alert alert-primary" role="alert">
<div class ="from-group">
<select>
<option value="Login">login</option>
<option value="creditcard">creditcard</option>
<option value="loan">loan</option>
<option value="prepaid card">prepaid card</option>
</select>

</div>
</div>






<div class="grid-container">
  <div class="grid-item">Home </div>
  <div class="grid-item">Pay</div>
  <div class="grid-item">Save</div>
  <div class="grid-item">Invest</div>
  <div class="grid-item">Borrow</div>
  <div class="grid-item">Shop</div>
  </div>




<div class="container p-5 my-5 border">Personal Loan EMI calculator</div>
<div class="container p-5 my-5 border">Home Loan EMI calculator</div>
<div class="container p-5 my-5 border">RD calculator</div>

<div>
</div>
</div>

);
}
export default App;
