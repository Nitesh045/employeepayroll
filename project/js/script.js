window.addEventListener('load', function () {
  let inputName = document.getElementById('nameInput');
  let profile1 = document.getElementsByName('pro');
  let gender = document.getElementsByName('gender');
  let degination = document.getElementsByClassName('checkbox');
  let salary = document.getElementById('income');
  let joindate = document.getElementById('day');
  let joinmonth = document.getElementById('months');
  let joinyear = document.getElementById('year');
  let textArea = document.getElementById('textArea');

  let profileimge = '';
  let jobDetails = [];



  console.log('hello')
  const form = document.getElementById('myform');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('click')
    // console.log(profile1)

    // console.log(degination)
    // geting image profile


    for (let i = 0; i < profile1.length; i++) {
      if (profile1[i].checked) {
        //console.log(profile1[i].value);
        profileimge = profile1[i].value;


      }
    }

    for (let i = 0; i < degination.length; i++) {
      if (degination[i].checked) {
        console.log(degination[i].value);
        jobDetails.push(degination[i].value)

      }
    }
    let genderValue = ""
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        //console.log(degination[i].value);
        genderValue = gender[i].value

      }
    }



    // console.log(inputName.value)
    // console.log(salary.value)
    // console.log(joindate.value);
    // console.log(joinmonth.value);
    // console.log(joinyear.value);
    // console.log(textArea.value);
    // console.log(genderValue);
    // console.log(profileimge)

    if (inputName.value == "") {

      document.getElementById('pname').style.display = "block";
      return;
    } else if (genderValue == "") {
      document.getElementById("pgender").style.display = "Block"
      return

    } else if (profileimge == "") {
      document.getElementById("pimg").style.display = "Block"

      return
    } else if (jobDetails == "") {
      document.getElementById("pjob").style.display = "Block"
      return
    } else if (salary.value == 0) {
      document.getElementById("pslary").style.display = "Block"
      return;

    } else if (joinmonth.value == 0) {
      document.getElementById("pyear").style.display = "Block"
      return

    } else {
      let details = {

        name: inputName.value,
        gender: genderValue,
        img: profileimge,
        jobDetails: JSON.stringify(jobDetails),
        salary: salary.value,
        joindate: {
          joinD: joindate.value,
          joinM: joinmonth.value,
          joinY: joinyear.value
        },
        notes: textArea.value
      }

      console.log(details)
      $.ajax({
        type: "POST",

        url: "http://localhost:3000/formdata",
        data: JSON.stringify(details),
        success: function (data) {
          console.log(data)
        }
      })

    }

  })

})


// fetching details from json 
