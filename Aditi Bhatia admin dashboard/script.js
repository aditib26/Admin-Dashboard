var options = {
    series: [
      {
        name: "Cupcakes",
        data: [98, 105, 134, 156, 161, 158, 163, 160, 166],
      },
      {
        name: "Cakes",
        data: [140, 134, 146, 165, 178, 187, 193, 202, 214],
      },
      {
        name: "Cookies",
        data: [350, 210, 260, 260, 350, 300, 270, 390, 400],
      },
      
    ],
    backgroundColor: ["red", "blue", "green", "blue", "red", "blue"],
    chart: {
      type: "bar",
      height: 250, 
      sparkline: {
        enabled: true, 
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "squared",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["September", "October", "November", "December", "January", "February", "March", "April", "May"],
    },
    yaxis: {
      title: {
        text: "Quantity",
      },
    },
    fill: {
      opacity: 1,
    },
     tooltip: {
       y: {
         formatter: function (val) {
           return  val + "-pieces";
         },
       },
     },
   };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  
  // Sidebar Toggle Codes;
  
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
  }
  
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
  }

