    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    // doesn't perfectly work with our tricks, disable it
    selectedMode: false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '70%'],
      // adjust the start angle
      startAngle: 180,
      label: {
        show: true,
        formatter(param) {
          // correct the percentage
          return param.name + ' (' + param.percent * 2 + '%)';
        }
      },
      data: [
        { value: $01, name: 'Search Engine' },
        { value: $02, name: 'Direct' },
        { value: $03, name: 'Email' },
        { value: $04, name: 'Union Ads' },
        { value: $05, name: 'Video Ads' },
        {
          // make an record to fill the bottom 50%
          value: $01 + $02 + $03 + $04 + $05,
          itemStyle: {
            // stop the chart from rendering this piece
            color: 'none',
            decal: {
              symbol: 'none'
            }
          },
          label: {
            show: false
          }
        }
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
