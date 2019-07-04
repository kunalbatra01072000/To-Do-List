if(document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded',ready);
}
else{
    ready();
}

function ready(){
    var removeBtns=document.getElementsByClassName('delbtn');
    for(var i=0;i<removeBtns.length;i++){
        var removeBtn=removeBtns[i];
        removeBtn.addEventListener('click',removeJob);
    }
    var AddJobbtn=document.getElementsByClassName('AddButton')[0];
    console.log(AddJobbtn);
    AddJobbtn.addEventListener('click',AddJobToList);
}
function AddJobToList(event){
    var button=event.target;
    var InputBox=button.parentElement.parentElement;
    var Job=InputBox.getElementsByClassName('Job')[0].value;
    var Starttime=InputBox.getElementsByClassName('Start-time')[0].value;
    var Endtime =InputBox.getElementsByClassName('End-time')[0].value;
    var JobItem=document.createElement('div');
    JobItem.classList.add('table-content');
    JobItem.classList.add('table-col');
    var JobContents=`<div class="Sno">${serialNo()} </div>
    <div class="Job">${Job} </div>
    <div class="Start-time">${Starttime} </div>
    <div class="End-time">${Endtime}</div>
    <div class="Status"><input type="checkbox" ></div>
    <div class="Remove"><button type="button" class="delbtn">Delete</button></div>`;
    JobItem.innerHTML=JobContents;
    console.log(JobItem);
    document.getElementsByClassName('Table')[0].appendChild(JobItem);
    JobItem.getElementsByClassName('delbtn')[0].addEventListener('click',removeJob);

}

function serialNo(){
    var rows=document.getElementsByClassName('table-col');
    var count=rows.length;
    return count;
    
}

function removeJob(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.parentElement.remove();
   
}