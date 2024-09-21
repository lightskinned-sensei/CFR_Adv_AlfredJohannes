document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');


    function getVisibleArea() {
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        const rect = document.body.getBoundingClientRect();
    
        // Calculate the visible width and height
        const visibleWidth = Math.max(0, window.innerWidth - scrollLeft);
        const visibleHeight = Math.max(0, window.innerHeight - scrollTop);
    
        return { width: visibleWidth, height: visibleHeight };
    }
    
    function moveButton() {
        // Get the visible area of the page
        const visibleArea = getVisibleArea();
        
        // Generate random coordinates within the visible area
        const newX = Math.floor(Math.random() * visibleArea.width);
        const newY = Math.floor(Math.random() * visibleArea.height);
    
        // Create a temporary element to store the button's current position
        const tempElement = document.createElement('div');
        tempElement.style.position = 'fixed';
        tempElement.style.pointerEvents = 'none';
        tempElement.style.transition = 'transform 0.3s ease-out'; // Adjust duration as needed
        tempElement.style.transform = `translate(${loginButton.offsetLeft}px, ${loginButton.offsetTop}px)`;
    
        // Move the button to the new position
        loginButton.style.transform = `translate(${newX}px, ${newY}px)`;
    
        // Remove the temporary element after the animation completes
        setTimeout(() => {
            tempElement.remove();
        }, 300); // Match this with the transition duration
    }
    
    
    function getVisibleArea() {
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        const rect = document.body.getBoundingClientRect();
    
        // Calculate the visible width and height
        const visibleWidth = Math.max(0, window.innerWidth - scrollLeft);
        const visibleHeight = Math.max(0, window.innerHeight - scrollTop);
    
        return { width: visibleWidth, height: visibleHeight };
    }
    
    
    

    // Debounce functionality
    let debounceTimer;
    loginButton.addEventListener('mousemove', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (!isValidLogin()) {
                moveButton();
            }
        }, 50); // Adjust this value as needed
    });

    function resetButtonPosition() {
        loginButton.style.transform = '';
    }

    // Event listener for form submission
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
    
        if (isValidLogin()) {
            console.log('Valid login details entered');
            resetButtonPosition();
            // Handle successful login here
        } else {
            moveButton();
        }
    });
});

// Placeholder function to check login validity
function isValidLogin() {
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();

    // Define the correct credentials here
    const correctUsername = 'admin';
    const correctPassword = 'password';

    return username === correctUsername && password === correctPassword;
}
