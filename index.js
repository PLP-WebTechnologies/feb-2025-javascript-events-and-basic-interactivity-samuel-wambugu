const times = document.querySelector(".close");
const modal = document.getElementById("myModal");
const signup = document.querySelector(".signupclass");
const signup2 = document.querySelector(".signupclass2")
const modalcontent = document.getElementById("modal-content1");
const fullname = document.getElementById("fullname").value.trim();
const contact = document.getElementById("contact").value.trim();
const resident = document.getElementById("resident").value.trim();
const email  = document.getElementById("email").value.trim();
const date = document.getElementById("date").value.trim();
const parent = document.getElementById("parent_number").value.trim();
const status = document.getElementById("status").value.trim();
const  occupation = document.getElementById("Occupation").value.trim();
const signupbutton = document.getElementById("sign-up");

signupbutton.onclick = ()=>{
      validation(); 
      
} 
times.onclick= function (){
            modal.style.display="none";
}
signup.onclick = () =>{
      modal.style.display="flex";
      modalcontent.style.display= "flex";
}
signup2.onclick = () =>{
      modal.style.display="flex";
      modalcontent.style.display= "flex";
}
function closemodal(){
      modal.style.display="none";
      modalcontent.style.display= "none";
}

function validation(event) {  
      event.preventDefault();  
  
      const names = ["fullname", "contact", "resident", "email", "date", "parent_number", "status", "occupation"];  
      let isValid = true;  
  
      names.forEach((name) => {  
          const input = document.getElementById(name);  
          const error = document.getElementById(`${name}-error`);  
  
          if (!input.value) {  
              error.style.display = "block";
              isValid = false;
          } else {  
              error.style.display = "none"; 
          }  
      });  
  
      if (isValid) {  
          closemodal(); 
          alert("Your information has been successfully submitted!");  
      }  
  }  
  
  
