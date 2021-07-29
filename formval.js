
    function validateName(event){
        event.preventDefault();
        var goodName = false;
        var goodEmail = false;
        var goodZip = false;
        var goodCountry = false;
        var goodPass = false; 
        

        if(document.myForm.Name.value == ''){
            event.preventDefault();
           // alert("Please provide your name.");
            var fullName = document.getElementById("NAME");
            var newWarn = document.createElement('label');
            newWarn.textContent = "Please provide a name.";
            var div = document.getElementById("showmessage1");
            div.appendChild(newWarn);
            document.myForm.Name.style.backgroundColor = 'lightcoral';
        } else{
            document.querySelector('#showmessage1').textContent = '';
            document.myForm.Name.style.backgroundColor = 'white';
            var fName = document.myForm.Name.value;
            goodName = true;
            console.log(fName);
          //  alert("Your name is " + fName);
        }

            var emailVal = document.getElementById("EMAIL").value;
            var atpos = emailVal.indexOf("@");
            var dotpos = emailVal.lastIndexOf(".");
        if(document.myForm.Email.value == '' || atpos < 1 || dotpos < atpos){
            event.preventDefault();
           // alert("Please provide your email.");
            var fullEmail = document.getElementById("EMAIL");
            var newWarn = document.createElement('label');
            newWarn.textContent = "Please provide an email.";
            var div = document.getElementById("showmessage2");
            div.appendChild(newWarn);
            document.myForm.Email.style.backgroundColor = 'lightcoral';
            //console.log("Error in Email");
        }else{
            document.querySelector('#showmessage2').textContent = '';
            document.myForm.Email.style.backgroundColor = 'white';
            var email = document.myForm.Email.value;
            goodEmail = true;
            console.log(email);
              //  alert("Your email is " + document.myForm.Email.value);
            }
        


        if(document.myForm.Zip.value == '' || document.myForm.Zip.value.length > 5){
            event.preventDefault();
           //alert("Please provide your zip code.");
            var fullZip = document.getElementById("ZIP");
            var newWarn = document.createElement('label');
            newWarn.textContent = "Please provide a zip code.";
            var div = document.getElementById("showmessage3");
            div.appendChild(newWarn);
            document.myForm.Zip.style.backgroundColor = 'lightcoral';
        }else{
            document.querySelector('#showmessage3').textContent = '';
            document.myForm.Zip.style.backgroundColor = 'white';
            var zip = document.myForm.Zip.value;
            var goodZip = true;
            console.log(zip);
          //  alert("Your zip is " + document.myForm.Zip.value);
        }

        if(document.myForm.Country.value == 'None'){
           // alert("Select an option");
            event.preventDefault();
            var fullCountry = document.getElementById("COUNTRY");
            var newWarn = document.createElement('label');
            newWarn.textContent = "Please provide a zip code.";
            var div = document.getElementById('showmessage4');
            div.appendChild(newWarn);
            document.myForm.Country.style.backgroundColor = 'lightcoral';
            //return false;
        }else {
            document.querySelector('#showmessage4').textContent = '';
            document.myForm.Country.style.backgroundColor = 'white';
            var dropdown = document.myForm.Country.value;
            var goodCountry = true;
            console.log(dropdown);
            //alert(dropdown)
        }


        if(document.myForm.Pass.value == ''){
            event.preventDefault();
            //alert("Please provide a password.");
            var pass = document.getElementById("PASS");
            var newWarn = document.createElement('label');
            newWarn.textContent = "Please provide a valid password.";
            var div = document.getElementById("showmessage5");
            div.appendChild(newWarn);
            document.myForm.Pass.style.backgroundColor = 'lightcoral';
           // console.log("Error in Password");
        } else{

            let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
            var strLabel = document.getElementById('PASS');
            let password = document.getElementById('PASS').value;
        if(strongPassword.test(password)) {
            strLabel.style.backgroundColor = "white"
            document.querySelector('#showmessage5').textContent = '';
           // document.myForm.Pass.style.backgroundColor = 'white';
            var pass = document.myForm.Pass.value;
            var goodPass = true;
            console.log(pass);
        } else{
            event.preventDefault();
            strLabel.style.backgroundColor = 'lightcoral'
            var newWarn = document.createElement('label');
            newWarn.textContent = "Please provide a valid password.";
            var div = document.getElementById("showmessage5");
            div.appendChild(newWarn);
        }
          //  alert(data);
        }

        if(goodCountry && goodPass && goodZip && goodName && goodEmail){
        //    var data = "Name: " + fName + ", Email: " + email + ", Zip: " + zip + ", Country: " + dropdown;
         //   var p = document.createElement('p');
        //    p.textContent = data;
          //  var formData = document.getElementById('formData');
         //   formData.append(p);
         //   console.log(data + "Window Ready");
            window.location = "market.html";
        }
    }


    function validatePassword(){


    }