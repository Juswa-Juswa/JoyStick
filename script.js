// READ ME: Some of the functions or event lister doent work when putted 
//          on the same event listener therefore they are mostly seperated.

//- - - - - - - - - - - - - - - - -> Log In

var attempt = {};

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');

    togglePasswordBtn.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordBtn.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            togglePasswordBtn.textContent = 'Show';
        }
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (attempt[username] === undefined) {
            attempt[username] = 1;
        } else {
            attempt[username]++;
        }

        if (attempt[username] > 5) {
            loginForm.querySelector('button[type="submit"]').disabled = true;
            alert('You have exceeded the maximum login attempts for this username.');
            return; 
        }

        if ((username === 'Joshua' && password === 'pogiako') || (username === 'Micheal' && password === 'arturo' || (username === 'Maam' && password === 'MataasMagBigayNgGrade'))) {    
            alert('Login successful! Press Ok to Continue.');
            setTimeout(() => {
                window.location.href = 'JoyStick_Home.html';
            }, 1000);
        } else {
            alert('Invalid username or password');
        }
        
        const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
    });
});


//- - - - - - - - - - - - - - - - -> Log Out

function logout() {
    alert('Logging Out... Press Ok to Continue.');
    setTimeout(() => {
        window.location.href = 'JoyStick_LoginRegister.html';
    }, 1000);
};

//- - - - - - - - - - - - - - - - -> Show Cart Panel

document.getElementById('toggle-button').addEventListener('change', function() {
    var panel = document.querySelector('.panel');
    if (this.checked) {
        panel.classList.add('active');
    } else {
        panel.classList.remove('active');
    }
});

//- - - - - - - - - - - - - - - - -> Add Item To The Panel When The Product Is Selected
//                                   And The Indication That That Product Is Selected

document.addEventListener('DOMContentLoaded', function() {
    function updateCheckedItems() {
        const checkedItems = document.querySelectorAll('.product-checkbox:checked');
        const checkedItemsList = document.getElementById('checked-items');
        checkedItemsList.innerHTML = '';
        let totalAmount = 0;

        checkedItems.forEach(function(item) {
            const listItem = document.createElement('li');
            const img = document.createElement('img');
            const text = document.createElement('span');
            const trashIcon = document.createElement('i');

            const itemName = item.dataset.name;
            const itemPrice = parseFloat(item.dataset.price);
            const itemImg = item.dataset.img;

            img.src = itemImg;
            text.textContent = `${itemName} - Php. ${itemPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

            trashIcon.className = 'bx bxs-trash';
            trashIcon.addEventListener('click', function() {
                listItem.remove();
                item.checked = false;
                updateTotalAmount();
                updateProductAppearance(item);
            });

            listItem.appendChild(img);
            listItem.appendChild(text);
            listItem.appendChild(trashIcon);

            checkedItemsList.appendChild(listItem);

            totalAmount += itemPrice;
        });

        document.getElementById('total-amount-value').textContent = totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function updateTotalAmount() {
        const checkedItems = document.querySelectorAll('.product-checkbox:checked');
        let totalAmount = 0;

        checkedItems.forEach(function(item) {
            const itemPrice = parseFloat(item.dataset.price);
            totalAmount += itemPrice;
        });

        document.getElementById('total-amount-value').textContent = totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function updateProductAppearance(checkbox) {
        const productDiv = checkbox.closest('.product');
        const label = productDiv.querySelector('.addlabel');
        if (checkbox.checked) {
            label.textContent = 'ADDED TO CART';
            productDiv.classList.add('selected');
        } else {
            label.textContent = 'ADD TO CART';
            productDiv.classList.remove('selected');
        }
    }

    const checkboxes = document.querySelectorAll('.product-checkbox');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            updateCheckedItems();
            updateProductAppearance(checkbox);
        });
    });

    const productContainers = document.querySelectorAll('.product');
    productContainers.forEach(function(product) {
        product.addEventListener('click', function() {
            const checkbox = product.querySelector('.product-checkbox');
            checkbox.checked = !checkbox.checked;
            updateCheckedItems();
            updateProductAppearance(checkbox);
        });
    });

    updateTotalAmount();
});


document.addEventListener('DOMContentLoaded', function() {

    //- - - - - - - - - - - - - - - - -> Flickering Of The Home Text To Not Block The Videos

    var heading = document.querySelector('.H-content h1');
    var isTransparent = true;

    setInterval(function() {
        if (isTransparent) {
            heading.style.opacity = '0.50'; 
        } else {
            heading.style.opacity = '0'; 
        }
        isTransparent = !isTransparent;
    }, 5000);


    //- - - - - - - - - - - - - - - - -> Adding Of Items To The Cart/Selected Item/s

    var checkoutButton = document.querySelector('.checkout-button');
    var userIdInput = document.querySelector('.checkout input[type="text"]');

    checkoutButton.addEventListener('click', function() {
        var userId = userIdInput.value.trim();


        // add in the future an if statement if there are ordered items before checking out or not
        if (userId.length < 3 || userId.indexOf('#') < 1 || userId.indexOf('#') === userId.length - 1) {
            alert('Please enter a valid User ID with at least 1 character before and after the "#"');
            return;
        }        
    });

        var checkboxes = document.querySelectorAll('.product-checkbox');    
        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', updateCheckedItems);
        });
});

//- - - - - - - - - - - - - - - - -> Video Rotation After Every End

const videos = ["assets/yt5s.io-Enter the Tigris __ VALORANT Lunar New Year 2022-(1080p).mp4", 
"assets/yt5s.io-Myst Bloom Bundle Trailer - VALORANT-(1080p) - 1.mp4",
"assets/yt5s.io-Myst Bloom Bundle Trailer - VALORANT-(1080p) - 2.mp4",
"assets/yt5s.io-Myst Bloom Bundle Trailer - VALORANT-(1080p) - 3.mp4",
"assets/yt5s.io-Myst Bloom Bundle Trailer - VALORANT-(1080p) - 4.mp4",
"assets/yt5s.io-Myst Bloom Bundle Trailer - VALORANT-(1080p) - 5.mp4",
"assets/Kuronami Bundle (1080p) - 1.mp4",  
"assets/Kuronami Bundle (1080p) - 2.mp4",  
"assets/Kuronami Bundle (1080p) - 3.mp4",  
"assets/yt5s.io-Weaponized Perfection __ Prime 2.0 Skin Reveal Trailer - VALORANT-(1080p).mp4",
"assets/yt5s.io-YOURE IN __ XER0FANG Skin Reveal Trailer - VALORANT-(1080p) - 1.mp4",
"assets/yt5s.io-YOURE IN __ XER0FANG Skin Reveal Trailer - VALORANT-(1080p) - 2.mp4",
"assets/yt5s.io-YOURE IN __ XER0FANG Skin Reveal Trailer - VALORANT-(1080p) - 3.mp4",
"assets/yt5s.io-Play with FORCE __ BlastX Skin Reveal Trailer - VALORANT-(1080p).mp4"
];
const videoElement = document.getElementById("myVideo");
let currentVideoIndex = 0

videoElement.addEventListener("ended", changeVideo);

function changeVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
}


//- - - - - - - - - - - - - - - - -> MOUSE TRACKER

const circleElement = document.querySelector('.circle');

const mouse = { x: 0, y: 0 }; 
const previousMouse = { x: 0, y: 0 }
const circle = { x: 0, y: 0 }; 

let currentScale = 0; 
let currentAngle = 0; 

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const speed = 0.20;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;

  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  const scaleValue = (mouseVelocity / 150) * 0.5;
  currentScale += (scaleValue - currentScale) * speed;

  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
  window.requestAnimationFrame(tick);
}

tick();

//- - - - - - - - - - - - - - - - -> Href Link Hightlight Whenever The Site Is At That Area

document.querySelectorAll('.navbar-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });

        document.querySelectorAll('.navbar-menu a[href^="#"]').forEach(anchor => {
            anchor.classList.remove('active');
        });
        this.classList.add('active');
    });
});


window.addEventListener('scroll', () => {
    const currentSection = document.querySelectorAll('section[id]').item(Array.from(document.querySelectorAll('section[id]')).findIndex(section => section.getBoundingClientRect().top >= 0));

    document.querySelectorAll('.navbar-menu a').forEach(anchor => {
        anchor.style.color = '';
        anchor.style.textShadow = '';
    });

    if (currentSection) {
        const correspondingLink = document.querySelector(`.navbar-menu a[href="#${currentSection.getAttribute('id')}"]`);
        if (correspondingLink) {
            correspondingLink.style.color = 'red';
            correspondingLink.style.textShadow = '2px 2px 4px red'; 
        }
    }
});

//- - - - - - - - - - - - - - - - -> Product Selected Indication



