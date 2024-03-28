
// get all doc which is required

let valuelocal = localStorage.getItem('key');
let inputName = $('#nameInput');

let salary = $('#income');
let joindat = $('#day');
let joinmonth = $('#months');
let joinyear = $('#year');
let textArea = $('#textArea');
// console

let profileimge = '';

// adding eventhandler on form ................here

const form = $('#myform');
form.on('submit', function (e) {
    e.preventDefault();

    let jobDetails = [];


    $('input[type="checkbox"]:checked').map(function () {
        return (
            jobDetails.push(this.value)
        )
    });

    
    let profileValue = $('input[name="pro"]:checked').val();
    let genderValue = $('input[name="gender"]:checked').val();
    console.log(genderValue, profileValue, jobDetails)
    if (inputName.val() == "") {

        $('#pname').css("display", "block");
        return;
    } else if (genderValue == undefined) {
        $("#pgender").css("display", "block");
        return

    } else if (profileValue == "") {
        $("#pimg").css("display", "block")

        return
    } else if (jobDetails.length <= 0) {
        $("#pjob").css("display", "block")
        return
    } else if (salary.val() == 0) {
        $("#pslary").css("display", "block")
        return;

    } else if (joinmonth.val() == 0) {
        $("#pyear").css("display", "block")
        return

    } else {

        let details = {

            name: inputName.val(),
            gender: genderValue,
            img: profileValue,
            jobDetails: JSON.stringify(jobDetails),
            salary: salary.val(),
            joindate: {
                joinD: joindat.val(),
                joinM: joinmonth.val(),
                joinY: joinyear.val()
            },
            notes: textArea.val()
        }


        // put method if data have in local storage 
        if (valuelocal) {

            $.ajax({
                type: "PUT",

                url: `https://employeeapi-qgnn.onrender.com/formupdate/${valuelocal}`,
                data: {
                    name: inputName.val(),
                    gender: genderValue,
                    img: profileValue,
                    jobDetails: jobDetails,
                    salary: salary.val(),

                    joinD: joindat.val(),
                    joinM: joinmonth.val(),
                    joinY: joinyear.val(),

                    notes: textArea.val()
                },
                success: function (data) {
                    console.log(data)
                    localStorage.removeItem('key')
                    window.location.href = '../index.html'
                }
            })

        } else {
            $.ajax({
                type: "POST",

                url: "https://employeeapi-qgnn.onrender.com/submitdata",
                data: {
                    name: inputName.val(),
                    gender: genderValue,
                    img: profileValue,
                    jobDetails: jobDetails,
                    salary: salary.val(),

                    joinD: joindat.val(),
                    joinM: joinmonth.val(),
                    joinY: joinyear.val(),

                    notes: textArea.val()
                },
                success: function (data) {
                    window.location.href = '../index.html'
                }
            })
        }

    }

})

// edit function intial getting data from server 

if (valuelocal) {
    console.log(valuelocal);
    $('#subBtn').css('display', 'none')
    $('#updatebtn').css('display', 'block')
    $.ajax({
        type: 'get',
        url: `https://employeeapi-qgnn.onrender.com/formdatabyId/${valuelocal}`,
        success: function (details) {
             setvaluetoForm(details);
           
        }
    })

    function setvaluetoForm(details) {
        inputName.val(details.data?.name);
        // if (data.gender == "male") {

        // }
        let job = details.data?.jobDetails
        console.log(job);
        console.log(details.data?.img)
        let profileValue = $('input[name="pro"]');
        let genderValue = $('input[name="gender"]');
        // console.log(genderValue)
        //console.log(profileValue[0].value)
        for (let i = 0; i < profileValue.length; i++) {
            // console.log(i);
            if (profileValue[i].value == details.data?.img) {
                profileValue[i].checked = true
            }
        }


        for (let i = 0; i < genderValue.length; i++) {
            if (genderValue[i].value == details.data?.gender) {
                genderValue[i].checked = true
            }
        }

        //    for job 
        let checkedValues = $('input[type="checkbox"]')
        console.log(checkedValues[0].value)

        for (let i = 0; i < job.length; i++) {

            if (job[i] == checkedValues[i].value) {
                checkedValues[i].checked = true
            }

        }

        salary.val(details.data?.salary)
        let date = details.data?.joinD
        console.log(date)
        joindat.val(date)

        let month = details.data?.joinM
        joinmonth.val(month)


        let year = details.data?.joinY
        textArea.val(details.data.notes)
    }
}

// handling cancle btn
$('#canclebtn').on('click', function () {
    window.location.href = "../index.html";
})