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

    let result = await response;
    // console.log("1");
    console.log(result);
    // console.log("2");
});