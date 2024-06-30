const textarea = document.querySelector("textarea");
const fileName = document.querySelector(".FileName");
 const selectMenu = document.querySelector(".select");
const saveBtn = document.querySelector(".saveBtn");





selectMenu.addEventListener("change", ()=>{
  let selectedOption = selectMenu.options[selectMenu.selectedIndex].text.split(" ")[0];
  saveBtn.textContent= `Save as ${selectedOption} file`
  
})

saveBtn.addEventListener("click",( )=>{
  
  const blob = new Blob([textarea.value],{type:selectMenu.value})
  let fileUrl = URL.createObjectURL(blob)
  let link = document.createElement("a")
  link.href = fileUrl
  link.download = fileName.value
  link.click();
  
  
  
  
})