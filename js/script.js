var isSidebarOpen = false;

var sidebarWidth = document.documentElement.style.getPropertyValue('--sidebar-width');
var sidebarPadding = document.documentElement.style.getPropertyValue('--sidebar-padding');

window.onload = function() {
    setSidebarParameters();
  };

  function setSidebarParameters(){
        document.getElementById("sidebar-id").style.width = "0";
        document.getElementById("sidebar-id").style.padding = "0";
        document.getElementById("main-id").style.marginLeft = "0";
  }

function openCloseNav() {

    if(isSidebarOpen == false){
        document.getElementById("sidebar-id").style.width = sidebarWidth;
        document.getElementById("sidebar-id").style.padding = sidebarPadding;
        document.getElementById("main-id").style.marginLeft = sidebarWidth;
    }else{
        document.getElementById("sidebar-id").style.width = "0";
        document.getElementById("sidebar-id").style.padding = "0";
        document.getElementById("main-id").style.marginLeft = "0";
    }

    console.log(isSidebarOpen);
    isSidebarOpen = !isSidebarOpen;
    
  }
