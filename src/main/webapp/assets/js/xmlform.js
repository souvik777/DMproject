let login_form = document.getElementById('xml-form');

login_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    // alert("hello ");
    document.getElementById("xml-form").style.whiteSpace = "nowrap";
    let txt=document.getElementById('xml-text').value;

    console.log(txt);
    let response = await fetch('api/xmldata/processing', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            xml_txt:txt,
        })
    });

    // let result = await response;
    let allElements = await response.json(); // read response body and parse as JSON
    console.log(allElements);

    for(let i=0;i<allElements.length;i++) {
        let para = document.createElement("P");
        let drpDown = document.createElement("button");
        para.innerText = allElements[i];
        drpDown.setAttribute("id","drpDn");
        document.body.appendChild(para);
        document.body.appendChild(drpDown);
    }
    var optionValues= [[1,"masking"],[2,"swapping"],[3,"pseudonomyzation"]];


});