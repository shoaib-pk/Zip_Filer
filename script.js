const form= document.querySelector("form"),
fileInput = form.querySelector(".file_input");

form.addEventListener("click", ()=>{
fileInput.click();
});


function zipFiles() {
    var filesInput = document.getElementById("fileInput");
    var files = filesInput.files;

    var zip = new JSZip();
    if(files.length>0)
    {
      for (var i = 0; i < files.length; i++) {
      var file = files[i];
      zip.file(file.name, file);
    }

    zip.generateAsync({ type: "blob" })
      .then(function(content) {
      saveAs(content, "files.zip");
    });
    }
    else
    {
        swal({
            title: "OPPs!",
            text: "No File Is Selected.",
            timer: 2000
          });
    }
    
    
  }