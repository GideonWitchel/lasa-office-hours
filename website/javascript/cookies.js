// Functions related to setting, getting, and managing cookies

function initCookies() {
    let cookieVal = getCookie("classes");
    if (cookieVal == null){
        for (let i = 0; i < classes.length; i++) {
            toggled.add(i);
        }
    }
    else{
        let arr = cookieVal.split(",");
        for (let i = 0; i < arr.length; i++) {
            toggled.add(parseInt(arr[i]))
        }
    }
    setCookie("classes",getCookieString(),"365")
}

function getCookieString() {
    return Array.from(toggled).join(',')
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    let cookieArr = document.cookie.split(";");

    // Loop through the name=value pairs
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        // Find the correct cookie
        if(name === cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}
