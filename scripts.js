document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login successful!');
    // Here you would normally handle authentication
    window.location.href = 'dashboard.html';
});

document.querySelectorAll(".option")[0].addEventListener("click",function(){alert("pressed");});