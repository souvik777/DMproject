let login_form = document.getElementById('xml-form');

login_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();

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

    let allElements = await response.json(); // read response body and parse as JSON
    console.log(allElements);

    for(let i=0;i<allElements.length;i++) {
        let para = document.createElement("P");
        //let drpDown = document.createElement("button");
        para.innerText = allElements[i];
        //drpDown.setAttribute("id", "drpDn");
        document.getElementById("2").appendChild(para);
        //document.body.appendChild(drpDown);

        let values = ["masking", "swapping", "pseudonomyzation"];

        let select = document.createElement("select");
        select.name = "masking";
        select.id = "masking"

        for (const val of values) {
            var option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            select.appendChild(option);
        }

        var label = document.createElement("label");
        label.innerHTML = "Choose your technique: "
        label.htmlFor = "masking";
        document.getElementById("2").appendChild(label).appendChild(select);
    }
});