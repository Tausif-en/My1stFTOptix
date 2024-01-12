var dom = document.getElementById('container');
var myChart = echarts.init(dom, 'dark', {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: [
            'Direct',
            'Marketing',
            'Search Engine',
            'Email',
            'Union Ads',
            'Video Ads',
            'Baidu',
            'Google',
            'Bing',
            'Others'
        ]
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                position: 'inner',
                fontSize: 14
            },
            labelLine: {
                show: false
            },
            data: [
                { value: $01, name: 'Search Engine' },
                { value: $02, name: 'Direct' },
                { value: $10, name: 'Marketing', selected: true }
            ]
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                length: 30
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
                { value: $06, name: 'Baidu' },
                { value: $02, name: 'Direct' },
                { value: $03, name: 'Email' },
                { value: $07, name: 'Google' },
                { value: $04, name: 'Union Ads' },
                { value: $08, name: 'Bing' },
                { value: $05, name: 'Video Ads' },
                { value: $09, name: 'Others' }
            ]
        }
    ]
};


    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
