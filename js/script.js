window.onload = function(){
    
    var userPlus = document.getElementById("addUser");
    var addModal = document.getElementById("modalAddUser");
    

    userPlus.addEventListener("click", () => {
        addModal.classList.add("show");
        addModal.style.display = "block";
    })
    
    window.addEventListener("click", (event)=> {
        if (event.target == addModal) {
          addModal.style.display = "none";
        }
    });
    
fetchdata();
};


var idglobal,globbal;
// function rowheader(){
//     var rowio=document.createElement('tr');
//             rowio.id='tableHeadings';
//             row.innerHTML=
//             '<th class="name">Name</th>'+
//             '<th class="age">Age</th>'+
//             '<th class="state">State</th>'+
//             '<th class="functions">Functions</th>'
//             document.getElementById('table').appendChild(row);   
// }
function fetchdata(){
    var xhttp = new XMLHttpRequest();
    var peddodu=document.getElementById('table');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
         {
            var op=JSON.parse(this.responseText);
            var i=0;
            document.getElementById('table').innerHTML = ""; 
            var roiioop=document.createElement('tr');
            roiioop.id='tableHeadings';
            roiioop.innerHTML=
            '<th class="name">Name</th>'+
            '<th class="age">Age</th>'+
            '<th class="state">State</th>'+
            '<th class="functions">Functions</th>'
            
            document.getElementById('table').appendChild(roiioop); 
            // peddodu.innerHTML='';
           
            // rowheader();
op.forEach(function(insider){
var row=document.createElement('tr');

id1=insider.id;
row.classList.add("rowid"+insider.id);
let ui="rowid"+insider.id;
row.innerHTML=

'<td class=name>'+insider.name+'</td>'+
'<td class=age>'+ insider.age+'</td>'+
'<td class=state>'+insider.state+'</td>' +
'<td> <button class="edit" onclick="editUser('+id1+')"><i class="fa-solid fa-pen-clip"></i></button><button class="deleteB" onclick="deleteUser('+id1+')" ><i class="fa-solid fa-trash-can"></i></button></td>';
idglobal=id1;
peddodu.appendChild(row);
});
// alert(idglobal);

console.log(idglobal);
}
};
xhttp.open("GET","https://65f94b78df1514524611109d.mockapi.io/hellothere", true);
xhttp.send();
}


function editfromthehtml(){
    var addModall = document.getElementById("modalEditUser");
    let x=document.getElementById('inputname').value;
    let y=document.getElementById('inputage').value;
    let z=document.getElementById('inputstate').value;
     let dataofuser={
        "name":x,
        "age": y,
         "state":z,
         "id":globbal
    };
    var xhrp = new XMLHttpRequest();
    xhrp.open('PUT',"https://65f94b78df1514524611109d.mockapi.io/hellothere/"+globbal,true);
    xhrp.setRequestHeader('Content-type','application/json');
    addModall.style.display = "none";
    xhrp.send(JSON.stringify(dataofuser));
    alert('Row Updated By using Edit Operation');
    fetchdata();
}

function editUser(idofuser){ 
    var userPlus = document.getElementById("addUser");
    var addModall = document.getElementById("modalEditUser");
    addModall.classList.add("show");
    addModall.style.display = "block";
    let yi=document.querySelector(".rowid" + idofuser);
    document.getElementById('inputname').value=yi.querySelector('.name').textContent;
    document.getElementById('inputage').value=yi.querySelector('.age').textContent;
    globbal=idofuser;
     document.getElementById('inputstate').value=yi.querySelector('.state').textContent;
}

function deleteUser(id12)
{
     //   alert(id12);
    var modal = document.getElementById("deleteModal");
    modal.classList.add("show");
    modal.style.display = "block";
     let yi=document.querySelector(".rowid"+id12);
    
    document.getElementById('userDeleted').innerHTML=yi.querySelector('.name').textContent;
    var cancelDelete=document.querySelectorAll(".deleteCancel");
    cancelDelete.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            modal.style.display = usernamefromdata;
        });
    });
    
    var confirmDelete = document.querySelector(".confirmDelete");
    confirmDelete.addEventListener("click", ()=>{
        var xhttttp=new XMLHttpRequest();
        modal.style.display = "none";
        
        let sampler=".rowid"+id12;
        document.querySelector(sampler).remove();
        xhttttp.open("DELETE","https://65f94b78df1514524611109d.mockapi.io/hellothere/"+id12,true);
        xhttttp.send();

        if(xhttttp.readyState==4&&xhttttp.status==200){
            
    //         document.getElementById('table').innerHTML = ""; 
    // var roioop=document.createElement('tr');
    // roioop.id='tableHeadings';
    // roioop.innerHTML=
    // '<th class="name">Name</th>'+
    // '<th class="age">Age</th>'+
    // '<th class="state">State</th>'+
    // '<th class="functions">Functions</th>'
    
    // document.getElementById('table').appendChild(roioop); 
        fetchdata();
  
        }
    });
}

 function addUser(){
    var nameofuser=document.getElementById('inputName').value;
        var ageofuser=document.getElementById('inputAge').value;
        var stateofuser=document.getElementById('inputState').value;
        const userdata={
            "name":nameofuser,
            "age":ageofuser,
            "state":stateofuser,
        };  
        console.log(JSON.stringify(userdata));
        var  xhtttp=new XMLHttpRequest();
        xhtttp.open("POST","https://65f94b78df1514524611109d.mockapi.io/hellothere", true);
        xhtttp.setRequestHeader('Content-Type', 'application/json');
        // alert(xhtttp.readyState);
xhtttp.onreadystatechange=function(){
    if(xhtttp.readyState==4&& xhtttp.status==201)
    {
        fetchdata();
}
};
document.getElementById('addUserForm').reset();
xhtttp.send(JSON.stringify(userdata));
let adder=document.getElementById('modalAddUser');
adder.style.display = "none";

}