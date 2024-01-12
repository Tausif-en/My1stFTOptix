    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  title: [
    {
      text: 'Radial Polar Bar Label Position (middle)'
    }
  ],
  polar: {
    radius: [30, '80%']
  },
  radiusAxis: {
    max: 100
  },
  angleAxis: {
    type: 'category',
    data: ['Search Engine', 'Direct', 'Email', 'Union Ads', 'Video Ads'],
    startAngle: 75
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [$01, $02, $03, $04, $05],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  },
  animation: false
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);