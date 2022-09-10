const labels = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'hsl(10, 79%, 65%)',
      hoverBackgroundColor: 'hsl(186, 34%, 60%)',
      borderColor: 'rgb(255, 99, 132)',
      data: [17.45 ,34.91 , 52.36 , 31.07 , 23.39 , 43.28 , 25.48],
      borderRadius: 5,
      borderSkipped: false,
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,             
        tooltips:{
            callbacks:{
                title: function (tooltipItems) {
                    return tooltipItems[0].formattedValue;
                  }
            }
        },
        plugins: {
            legend: {
                display: false ,
            },
            tooltip: {
                displayColors: false , 
                enabled: true,
                usePointStyle: true,
                backgroundColor:'hsl(25, 47%, 15%)',      
                color: 'hsl(33, 100%, 98%)',        
                bodyFont: {
                    size: '24'
                },
                callbacks: { 
                  // To change title in tooltip
                  title: (data) => { return "" } ,
            
                  // To change label in tooltip
                  label: (data) => { 
                    console.log(data);
                    return "$"+data.formattedValue;
                  }
                },
              },
        },
        scales: {            
            y: {
                beginAtZero: true,
                weight:1,
                grid: {
                    display: false ,
                    borderColor: 'white',
                },
                ticks: {
                    display: false
                },
                
            },
            x: {
                grid: {
                  display: false ,                  
                  borderColor: 'white',
                },                                
            }            
        }
        
    }
  };

  const myChart = new Chart(
    document.getElementById('spendingChart'),
    config
  )