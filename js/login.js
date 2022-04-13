var passp = "root"
function user1() {
    var user = document.getElementById('name').value;
    var pass = document.getElementById('password').value;
    if (user == "student" && pass == passp) {
        window.open("project.html");

    } else {
        alert('incorrect username or password');
    }
}

function rese() {
    var oldP = document.getElementById("oldpass").value;
    var newP = document.getElementById("newpass").value;
    var confirmP = document.getElementById("confirmpass").value;

    if (oldP != "" && newP != "" && confirmP != "") {
        if (oldP == passp) {
            if (oldP != newP) {
                if (newP == confirmP) {
                    alert("Password Changed Sucesfully");
                    passp = newP.value;
                    return true;
                }
                else {
                    alert("Confirm password is not same as you new password.");
                    return false;
                }
            }
            else {
                alert(" This Is Your Old Password,Please Provide A New Password");
                return false;
            }
        }
        else { alert("Old Password Incorrect.") }
    }

    else {
        alert("All Fields Are Required");
        return false;
    }
}
