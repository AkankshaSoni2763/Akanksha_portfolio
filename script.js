document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', function() {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    });

    menuIcon.onclick = function() {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});

// document.getElementById("contact").addEventListener("submit", async function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get form data
//     const formData = new FormData(this);

//     // Construct an object from the form data
//     const formDataObject = {};
//     formData.forEach((value, key) => {
//         formDataObject[key] = value;
//     });

//     // Send form data to backend
//     try {
//         const response = await fetch('/api/messages', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formDataObject)
//         });
        
//         // Check if the request was successful
//         if (response.ok) {
//             // Show success message
//             alert("Message sent successfully!");
//             // Reset the form
//             this.reset();
//         } else {
//             // Show error message
//             alert("Error sending message. Please try again later.");
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         // Show error message
//         alert("Error sending message. Please try again later.");
//     }
// });

// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone  = document.getElementById("phone");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");



// function sendEmail(){

//     // const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "akankshasoni2763@gmail.com",
//         Password : "488297DA74094BED2BF5EB7E0946C6C8EFD3",
//         To : 'akankshasoni2763@gmail.com',
//         From : "akankshasoni2763@gmail.com",
//         Subject : "This is the Subject",
//         Body : "And This is the body"
//     }).then(
//       message => alert(message)
//     );

// }

// form.addEventListener("submit" , (e) => {
//     e.preventDefault();

//     sendEmail();
// })