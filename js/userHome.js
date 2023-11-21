// Get the email from the URL
const urlParams = new URLSearchParams(window.location.search);
const emailFromUrl = urlParams.get('email');

console.log('Email from URL:', emailFromUrl);

var userInfo = [];

//document.getElementById("cur-page").innerHTML = "hello world";

setTimeout(async () => {
    userInfo = await getRowByEmail(emailFromUrl);
    console.log(userInfo);

    fullName = userInfo[0] + " " + userInfo[1];
    firstName = userInfo[0];

    setHeader(fullName);
    setProfileLink(firstName);


}, 10);

function setProfileLink(string) {
    console.log("setting profileLink to " + string);
    document.getElementById("cur-page").innerHTML = string;
}
function setHeader(string) {
    console.log("setting header to " + string);
    document.getElementById("dashHeader").innerHTML = string;
}