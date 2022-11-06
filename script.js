const trackList = document.getElementById('trackList');
const submitbutton = document.getElementById('btnsubmit');
const trackId = document.getElementById('trackId');
const trackName = document.getElementById('trackName');
const trackTitle = document.getElementById('trackTitle');
const trackDuration = document.getElementById('trackDuration');
let lastindex = 0;

submitbutton.addEventListener('click', () => {
    if (trackId.value == '') {
        alert('Please enter track id');
    } else if (trackName.value == '') {
        alert('Please enter track name');
    } else if (trackTitle.value == '') {
        alert('Please enter track title');
    } else if (trackDuration.value == '') {
        alert('Please enter track duration');
    }
    if (trackId.value !== '' && trackName.value !== '' && trackTitle.value !== '' && trackDuration.value !== '') {
        let tableBody = document.getElementById("table-body");
        let th = document.createElement("th");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let row = document.createElement("tr");
        th.innerHTML = trackId.value;
        td1.innerHTML = trackName.value;
        td2.innerHTML = trackTitle.value;
        td3.innerHTML = trackDuration.value;
        td4.innerHTML = "<input type='button' id='delete-" + (lastindex + 1) + "' class='btn btn-danger shadow rounded' value='Delete' onclick = 'deleteRow(this)' />";
        row.appendChild(th);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        tableBody.appendChild(row);
        trackId.value = '';
        trackName.value = '';
        trackTitle.value = '';
        trackDuration.value = '';

    }
})

const deleteRow = (row) => {
    let d = row.parentNode.parentNode.rowIndex;
    trackList.deleteRow(d);
}

window.onload = () => {}