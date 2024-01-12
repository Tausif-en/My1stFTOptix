    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['Uses', 'Limit', 'Access']
  },
  xAxis: [
    {
      type: 'category',
      data: ['Search Engine', 'Direct', 'Email', 'Union Ads', 'Video Ads', 'Baidu', 'Google'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Limit',
      min: 0,
      max: 100,
      interval: 50,
      axisLabel: {
        formatter: '{value} MB'
      }
    },
    {
      type: 'value',
      name: 'Access',
      min: 0,
      max: 100,
      interval: 5,
      axisLabel: {
        formatter: '{value} MB'
      }
    }
  ],
  series: [
    {
      name: 'Uses',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' MB';
        }
      },
      data: [
        $01, $02, $03, $04, $05, $06, $07
      ]
    },
    {
      name: 'Limit',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' MB';
        }
      },
      data: [
        70, 70, 70, 80, 80, 50, 50
      ]
    },
    {
      name: 'Access',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' MB';
        }
      },
      data: [$01, $02, $03, $04, $05, $06, $07]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);