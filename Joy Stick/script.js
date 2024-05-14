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
            alert('Invalid username or password');d
        }
    });
});

function logout() {
    alert('Logging Out... Press Ok to Continue.');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
};

document.getElementById('toggle-button').addEventListener('change', function() {
    var panel = document.querySelector('.panel');
    if (this.checked) {
        panel.classList.add('active');
    } else {
        panel.classList.remove('active');
    }
});

function updateCheckedItems() {
    var checkedItems = document.querySelectorAll('.product-checkbox:checked');
    var checkedItemsList = document.getElementById('checked-items');
    checkedItemsList.innerHTML = '';
    checkedItems.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.textContent = item.dataset.name + ' - Php.' + item.dataset.price;
        checkedItemsList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('.product-checkbox');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var checkedItems = document.querySelectorAll('.product-checkbox:checked');
            var checkedItemsList = document.getElementById('checked-items');
            var totalAmount = 0;

            checkedItemsList.innerHTML = '';
            checkedItems.forEach(function(item) {
                var itemName = item.dataset.name;
                var itemPrice = parseFloat(item.dataset.price);
                totalAmount += itemPrice;

                var listItem = document.createElement('li');
                listItem.textContent = itemName + ': Php. ' + itemPrice.toFixed(2);
                checkedItemsList.appendChild(listItem);
            });
            document.getElementById('total-amount-value').textContent = totalAmount.toFixed(2);
        });
});

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

const videos = ["assets/yt5s.io-Enter the Tigris __ VALORANT Lunar New Year 2022-(1080p).mp4", "assets/yt5s.io-Play with FORCE __ BlastX Skin Reveal Trailer - VALORANT-(1080p).mp4", 
"assets/yt5s.io-GREATNESS __ Valiant Hero Skin Reveal Trailer - VALORANT-(1080p).mp4", "assets/yt5s.io-YOURE IN __ XER0FANG Skin Reveal Trailer - VALORANT-(1080p).mp4",
"assets/yt5s.io-Weaponized Perfection __ Prime 2.0 Skin Reveal Trailer - VALORANT-(1080p).mp4", "assets/yt5s.io-Myst Bloom Bundle Trailer - VALORANT-(1080p).mp4"];
const videoElement = document.getElementById("myVideo");
let currentVideoIndex = 0;

videoElement.addEventListener("ended", changeVideo);

function changeVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
}
