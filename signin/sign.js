function generateCaptcha() {  
    const captchaLength = 6;  
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
    let captcha = '';  

    for (let i = 0; i < captchaLength; i++) {  
        const randomIndex = Math.floor(Math.random() * chars.length);  
        captcha += chars[randomIndex];  
    }  

    document.getElementById('captcha').textContent = captcha;  
    return captcha;  
}  

let captchaCode = generateCaptcha(); // Generate CAPTCHA on load  

function validateCaptcha() {  
    const userInput = document.getElementById('captchaInput').value;  
    const messageElement = document.getElementById('message');  

    if (userInput === captchaCode) {  
        messageElement.textContent = 'تأیید شد!';  
        messageElement.style.color = 'green';  
    } else {  
        messageElement.textContent = 'کد اشتباه است! دوباره تلاش کنید.';  
        messageElement.style.color = 'red';  
        captchaCode = generateCaptcha(); // Generate a new CAPTCHA  
    }  

    document.getElementById('captchaInput').value = ''; // Clear input  
}