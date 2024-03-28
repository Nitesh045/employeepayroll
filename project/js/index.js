let t_body = document.getElementById('list');
console.log(t_body)
let table = document.getElementById('uldiv');
console.log(table)

// async function() {
//     try {
//         await fetch('http://localhost:3000/formdata')
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data)
//                 appenddata(data);
//             })
//             .catch((e) => console.log(e))

//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchdata();

$( async function(){
     $.ajax({
        type:"get",
        url:"http://localhost:3000/formdata",
        success:function(data){
            appenddata(data);
        }
     })
})

function appenddata(data) {
    let ul = document.createElement('ul');
    data.map((x) => {
        console.log("hello")
        // JSON.parse(x);
        let text =
            `
            <tr id="list" class="trbody" style="background-color: white; ">
                            <td class="tcol">
                            <spam><img class="img-profile" src=" ${x.img}"</spam>
                            ${x.name}
                            </td>
                            <td class="tcol">${x.gender}</td>
                            <td class="tcol"> 
                              ${JSON.parse(x.jobDetails)?.map((d)=>{
                               return(
                                `<spam class="spam-class">${d}</spam>`
                               )
                                
                              })}
                            </td>
                            <td class="tcol"><i class="fa-solid fa-indian-rupee-sign"
                                    style="font-size: small;"></i>${x.salary}
                            </td>
                            <td class="tcol">${x.joindate?.joinD},${x.joindate?.joinM},${x.joindate?.joinY}</td>
                            <td class="tcol">
                                <button id="del" ><i class="fa-solid fa-trash-can"></i></button>
                                <button><i class="fa-solid fa-pencil"></i></button>
                            </td>
                        </tr>
   `

        // ul.appendChild(text)
        table.innerHTML = table.innerHTML + text;

    })
}