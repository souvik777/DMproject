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

    let count=0;
    localStorage.setItem("len",allElements.length);
    for(let i=0;i<allElements.length;i++) {
        let para = document.createElement("P");
        para.innerText = allElements[i];
        document.getElementById("2").appendChild(para);
        //document.body.appendChild(drpDown);

        para.id = count.toString();
        console.log(para.id);
        let values = ["masking", "swapping", "pseudonomyzation"];

        count++;
        let select = document.createElement("select");
        select.name = "masking";
        select.id = count.toString();

        count++;
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
    //let button = document.createElement("button");
     //button.id="but";
    //document.getElementById("2").appendChild(button);

});

let buttontech = document.getElementById("xml-form2");
buttontech.addEventListener('submit',async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let len = localStorage.getItem("len");
    console.log(len);
    let specList = {};
    for (let i = 0; i < 2 * len; i++) {

        let id = i.toString();
        let a = document.getElementById(id).value;
        i++;
        id = i.toString();
        specList[a] = document.getElementById(id).value;
    }
    console.log(specList);
    let response = await fetch('api/xmldata/createspec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            specs: specList
        })
    }).then(
        response => {
            if (response['status'] === 203) {
                document.getElementById("login-success").style.display = "none";
                document.getElementById("login-alert").style.display = "block";

            } else {
                document.getElementById("login-alert").style.display = "none";
                document.getElementById("login-success").style.display = "block";
                document.getElementById("student-validation").reset();
            }
        }
    );
});
