document.addEventListener("DOMContentLoaded", function(event) {
    // Replace this data with the user's actual quiz results
    var userResults = {
        Visual: 5, // Replace with the user's Visual result
        Auditory: 16, // Replace with the user's Auditory result
        Kinesthetic: 80 // Replace with the user's Kinesthetic result
    };

    var data = Object.values(userResults);

    var options = {
        chart: {
            type: 'donut' // Change the chart type to 'donut'
        },
        series: data, // Assign the values directly to the series
        labels: Object.keys(userResults), // Set the categories as labels
        dataLabels: {
            enabled: false,
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
});

document.addEventListener("DOMContentLoaded", function(event) {
    var userResults = {
        '?': 5.123456, // Replace with the user's Visual result
        '??': 16.098765, // Replace with the user's Auditory result
        '???': 80.451627 // Replace with the user's Kinesthetic result
    };

    var data = Object.values(userResults);

    var options = {
        chart: {
            type: 'donut' // Change the chart type to 'donut'
        },
        series: data, // Assign the values directly to the series
        labels: Object.keys(userResults), // Set the categories as labels
        dataLabels: {
            enabled: false
        },
        colors: ['#666666', '#999999', '#CCCCCC'], // Use shades of gray for the colors
        legend: {
            position: 'top' // Place the legend at the bottom of the chart
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();
});



