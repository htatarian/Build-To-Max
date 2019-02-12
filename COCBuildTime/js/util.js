/**
 * File Name: util.js
 *
 * Revision History:
 *       Sabbir Ahmed, 2019-01-31 : Created
 */

// documentation : https://jqueryvalidation.org/documentation/

function getCurrentAge(dob) {
    var year = Number(dob.substr(0, 4));
    var month = Number(dob.substr(5, 2)) -1;
    var day = Number(dob.substr(8,2));

    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--;
    }
    return age;

}

function doValidate_frmAddFriendEnemy() {
    var form = $("#frmAddFriendEnemy");
    form.validate({
        rules:{
            txtNameAdd:{
                required: true,
                minlength: 2
            },
            txtFullNameAdd: {
                required: true,
                rangelength: [2, 10]
            },
            txtDOBAdd:{
                required: true,
                agecheck: true
            }

        },
        messages:{
            txtNameAdd:{
                required: "You must enter name",
                minlength: "Name must be at least 2 characters long"
            },
            txtFullNameAdd: {
                required: "Full name is required",
                rangelength: "Full name must be 2-10 characters long"
            },
            txtDOBAdd:{
                required: "You must specify DOB",
                agecheck: "You must be at least 2 years old"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("agecheck",
        function(value, element){
            var age = getCurrentAge(value);
            if (age >= 2) {
                return true;
            }
            return false;
        },
        "Our custom age checker"
    );

function doValidate_frmExtra() {
    var form = $("#frmExtra");
    form.validate({
        rules:{
            txtPassword:{
                required: true,
                minlength: 8,
                passwordcheck: true
            },
            txtVerifyPassword:{
                required: true,
                equalTo: "#txtPassword"
            },
            txtURL:{
                required: true
            },
            txtEmail:{
                required: true,
                emailcheck: true
            },
            txtNumber:{
                required: true,
                min: 10,
                max: 99
            }
        },
        messages:{
            txtPassword:{
                required: "You must enter password",
                minlength: "Password must be at least 8 characters long",
                passwordcheck: "Must contain 1 cap and 1 number"
            },
            txtVerifyPassword:{
                required: "Please re-enter password",
                equalTo: "Passwords don't match, re-enter"
            },
            txtURL:{
                required: "Please enter a valid url"
            },
            txtEmail:{
                required: "You must enter email",
                emailcheck: "Email must be a Conestoga email"
            },
            txtNumber:{
                required: "You must enter a number",
                min: "Must be at least 10",
                max: "Must be at most 99"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("passwordcheck",
    function(value, element){
        var regex = /([A-Za-z\d]*[A-Z]+[A-Za-z\d]*[\d]+[A-Za-z\d]*)|([A-Za-z\d]*[\d]+[A-Za-z\d]*[A-Z]+[A-Za-z\d]*)/;
        return this.optional(element) || regex.test(value);
    },
    "Custom password checker");


jQuery.validator.addMethod("emailcheck",
    function(value, element){
        var regex = /^.+conestogac.on.ca$/;
        return this.optional(element) || regex.test(value);
    },
    "Custom email checker");