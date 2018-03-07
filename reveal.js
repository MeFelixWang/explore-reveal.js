//line
function drawLine() {
    var chart = echarts.init(document.getElementById('line'), 'macarons');
    var mockData = Mock.mock({
        "chartData|2-10": [
            {
                "cate": () => {
                    return Mock.Random.province()
                },
                "data|7": [
                    () => {
                        return Mock.Random.integer(0, 3000)
                    }
                ]
            }
        ]
    });
    var dataLegend = [];
    var dataSeries = [];
    for (var i = 0; i < mockData.chartData.length; i++) {
        var item = mockData.chartData[i];
        dataLegend.push(item.cate);
        var tmpObj = {
            name: item.cate,
            type: "line",
            stack: "总量",
            areaStyle: {normal: {}},
            data: item.data
        };
        dataSeries.push(tmpObj)
    }
    chart.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: dataLegend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: dataSeries
    });
}

//polar
function drawPolar() {
    var chart = echarts.init(document.getElementById('polar'), 'macarons');
    var mockData = Mock.mock({
        "chartData|2-10": [
            {
                "cate": () => {
                    return Mock.Random.province()
                },
                "data|7": [
                    () => {
                        return Mock.Random.integer(0, 3000)
                    }
                ]
            }
        ]
    });
    var dataLegend = [];
    var dataSeries = [];
    for (var i = 0; i < mockData.chartData.length; i++) {
        var item = mockData.chartData[i];
        dataLegend.push(item.cate);
        var tmpObj = {
            name: item.cate,
            type: "bar",
            stack: "总量",
            coordinateSystem: 'polar',
            data: item.data
        };
        dataSeries.push(tmpObj)
    }
    chart.setOption({
        angleAxis: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: dataLegend
        },
        radiusAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            z: 10
        },
        polar: {},
        series: dataSeries
    })
}

//tree
function drawTree() {
    var chart = echarts.init(document.getElementById('tree'), 'macarons');
    var mockData = Mock.mock({
        "chartData|2-10": [
            {
                "name": () => {
                    return Mock.Random.last()
                },
                "children|0-10": [
                    {
                        "name": () => {
                            return Mock.Random.last()
                        },
                        "children|0-10": [
                            {
                                "name": () => {
                                    return Mock.Random.last()
                                },
                                "children|0-10": [
                                    {
                                        "name": () => {
                                            return Mock.Random.last()
                                        },
                                        "value|1-10000": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });
    chart.setOption({
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                data: mockData.chartData,
                top: '10%',
                bottom: '10%',
                layout: 'radial',
                symbol: 'emptyCircle',
                symbolSize: 7,
                initialTreeDepth: 3,
                animationDurationUpdate: 750
            }
        ]
    });
}

//color
function drawColor() {
    var chart = echarts.init(document.getElementById('color'), 'macarons');
    var mockData = Mock.mock({
        "chartData|10-25": [
            {
                "name": () => {
                    return Mock.Random.first()
                },
                "itemStyle": {
                    "color": () => {
                        return Mock.Random.color()
                    }
                },
                "children|0-2": [
                    {
                        "name": () => {
                            return Mock.Random.first()
                        },
                        "itemStyle": {
                            "color": () => {
                                return Mock.Random.color()
                            }
                        },
                        "children|0-5": [
                            {
                                "name": () => {
                                    return Mock.Random.first()
                                },
                                "itemStyle": {
                                    "color": () => {
                                        return Mock.Random.color()
                                    }
                                },
                                "value|1": 1
                            }
                        ]
                    }
                ]
            }
        ]
    });
    chart.setOption({
        series: {
            type: 'sunburst',
            highlightPolicy: 'ancestor',
            data: mockData.chartData,
            radius: [0, '95%'],
            sort: null,
            levels: [{}, {
                r0: '15%',
                r: '35%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    rotate: 'tangential'
                }
            }, {
                r0: '35%',
                r: '70%',
                label: {
                    align: 'right'
                }
            }, {
                r0: '70%',
                r: '72%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {
                    borderWidth: 3
                }
            }]
        }
    })
}

//map
function drawScatter() {
    var chart = echarts.init(document.getElementById('scatter'), 'macarons');
    var mockData = Mock.mock({
        "chartData|100-1000": [
            [
                () => {
                    return Mock.Random.float(100, 200, 2, 2)
                },
                () => {
                    return Mock.Random.float(0, 150, 2, 2)
                }
            ]
        ]
    });
    console.log(JSON.stringify(mockData.chartData));
    chart.setOption({
        xAxis: {
            scale: true
        },
        yAxis: {
            scale: true
        },
        series: [
            {
                type: 'effectScatter',
                symbolSize: 20,
                data: [
                    [172.7, 105.2],
                    [153.4, 42]
                ]
            },
            {
                type: 'scatter',
                data: mockData.chartData
            }
        ]
    })
}

//延迟绘制
function delayDraw(drawFunc) {
    setTimeout(function () {
        drawFunc()
    }, 300)
}

//初始化
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    width: 960,
    height: "90%",
    transition: 'slide' // none/fade/slide/convex/concave/zoom
});

//切换监听
Reveal.addEventListener('slidechanged', function (event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    console.log(event.currentSlide.dataset.title);
    var title = event.currentSlide.dataset.title;
    switch (title) {
        case "line":
            delayDraw(drawLine);
            break;
        case "polar":
            delayDraw(drawPolar);
            break;
        case "color":
            delayDraw(drawColor);
            break;
        case "tree":
            delayDraw(drawTree);
            break;
        case "scatter":
            delayDraw(drawScatter);
            break;
    }
});

