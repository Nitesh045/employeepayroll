// // removing local storage 
 localStorage.removeItem('key');

// declaring some global variables 
let t_body = $('#list')
let table = $('#uldiv')
let searchValue='';









// delete function here.........................
function delfun(id) {
  console.log(id);
  $.ajax({
    type: 'DELETE',
    url: `https://employeeapi-qgnn.onrender.com/deldata/${id}`,
    success: function (result) {

      location.reload();
      console.log('Item deleted successfully');
    },
    error: function (error) {

      console.log('Error deleting item:', error);
    }
  })
}

// edit function here..................here
function editfun(id) {
  console.log(id)
  localStorage.setItem('key', id)

  window.location.href = '../html/addemployee.html'
}





// getting data by server ................here
function appenddata() {
  console.log("searchValue", searchValue);
  $.ajax({
    type: "get",
    url: "https://employeeapi-qgnn.onrender.com/home",
    success: function (data) {
      data.map((x) => {
        if (x.name.toLowerCase().includes(searchValue.toLowerCase())) {
          
         

          let text =
            `
                      <tr id="list" class="trbody" style="background-color: white; ">
                            <td class="tcol"><img class="img-profile" src=" ${x.img}"</td>
                            
                            <td class="tcol">
                            
                            ${x.name}
                            </td>
                            <td class="tcol">${x.gender}</td>
                            <td class="tcol tcolmapJob"> 
                           
                              ${x.jobDetails.map((d) => `<span class="spam-class" >${d}</span>${' '}`).join('')}
                            </td>
                            <td class="tcol"><i  class="fa-solid fa-indian-rupee-sign ind-rupees"
                                    style="font-size: small;"></i>${x.salary}
                            </td>
                            <td class="tcol">${x.joinD} -${x.joinM}-${x.joinY}</td>
                            <td class="tcol">
                                <button id="del" onclick="delfun('${x._id}')"><i class="fa-solid fa-trash-can"></i></button>
                                <button id="edit" onclick=editfun('${x._id}')><i class="fa-solid fa-pencil"></i></button>
                            </td>
                        </tr>`;

          table.append(text);
        }
      });
    },
    error: function (error) {
      console.log('Error fetching data:', error);
    }
  });
};
appenddata();
$('#serachInput').keyup(function(){
  searchValue = $(this).val();
  table.empty();  // Clear existing table content before appending new data
  appenddata();   // Call appenddata function to render the table with the updated search value
});

$('#searchbarlogo').click(function(){ 
  if ($('#serachInput').css('visibility') == 'hidden') {
    $('#serachInput').css('visibility', 'visible');
  } else {
    $('#serachInput').css('visibility', 'hidden');
  }
});


$(window).resize(function() {
  if (window.innerWidth <= 600) {
    $('#btn-addUser').html('<i class="fa-solid fa-plus"></i>');
  } else {
    // Reset inner HTML if the window width is greater than 400 pixels
    $('#btn-addUser').html('<i class="fa-solid fa-plus"></i><span>Add User</span>');
  }
});

