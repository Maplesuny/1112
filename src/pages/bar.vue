<template>
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: '800px', height: '500px' }"></div>
    <!-- <div>{{ ddddat }},{{ dddday }}</div> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
export default {
  setup () {
    let ddddat = ref([]);
    let dddday = ref([]);
    let rangeX = ref([]);
    let rangeY = ref([]);
    let last_dataX;
    let last_dataY;

    onMounted(() => {
      const chartDom = document.getElementById("myEcharts");
      const myChart = echarts.init(chartDom);
      let option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
        toolbox: {
          right: 10,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
            mytools: {
              show: true,
              title: "Nick",
              icon: "M12,0A12,12 0 0,1 24,12A12,12 0 0,1 12,24A12,12 0 0,1 0,12A12,12 0 0,1 12,0M12,2A10,10 0 0,0 2,12C2,14.4 2.85,16.6 4.26,18.33L18.33,4.26C16.6,2.85 14.4,2 12,2M12,22A10,10 0 0,0 22,12C22,9.6 21.15,7.4 19.74,5.67L5.67,19.74C7.4,21.15 9.6,22 12,22Z",
              onclick: function () {
                // alert(ddddat.value[0]);
                // myChart.dispatchAction({
                //   type: "brush",
                //   areas: [
                //     {
                //       brushType: "rect",
                //       range: [],
                //     },
                //   ],
                // });
              },
            },
          },
        },
        brush: {
          id: "brush",
          geoIndex: "all",
          seriesIndex: "all",
          brushLink: "all",
          toolbox: ["rect", "keep", "lineX", "clear"],
          inBrush: {
            opacity: 1,
            symbolSize: 20,
          },
          removeOnClick: false,
          // 調整是否可平移
          transformable: true,
          throttleType: "debounce",
          throttleDelay: 1000,
          //   brushMode: 'multiple',
          brushStyle: {
            borderWidth: 3,
            color: "rgba(245,39,56,0)",
            borderColor: "rgba(220,20,57,0.8)",
          },
        },
        dataZoom: [
          {
            type: "inside",
            moveOnMouseMove: false,
          },
        ],
      };
      //   myChart.on("mouseover", function (params) {
      //     let brushComponent = params;
      //     console.log("y軸", option.series[0].data[params.dataIndex]);
      //   });
      myChart.on("brush", function (params) {
        console.log("bruss", params);
        let array_num = params.areas.length;
        // debugger
        last_dataX = params.areas[0].range[0];
        last_dataY = params.areas[0].range[1];
        // let minX = params.areas[array_num - 1].range[0][0];
        // let maxX = params.areas[array_num - 1].range[0][1];
        // let minY = params.areas[array_num - 1].range[array_num - 1][0];
        // let maxY = params.areas[array_num - 1].range[array_num - 1][1];
        console.log("aa", array_num);
        ddddat.value = last_dataX;
        dddday.value = last_dataY;
      });
      option && myChart.setOption(option);
    });
    return { ddddat, dddday };
  },
};
</script>
