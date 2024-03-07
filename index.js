const BaseUrl= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"
const dropDowns=document.querySelector(".dropdown select")

for(let select of dropDowns){
    for(currCode in countryList){
        // console.log(code)
        let newOption=document.createElement("option")
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption)
    }
}