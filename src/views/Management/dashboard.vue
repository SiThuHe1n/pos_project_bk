<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-lg-4 mb-3">
                <h3>Last 7 Days Sale Report</h3>
                <Line :data="data" :options="option" />
            </div>
            <div class="col-md-6 col-lg-4 mb-3">
                <h3>Monthly Sale Report</h3>
                <Line :data="data" :options="option" />
            </div>
            <div class="col-md-8 col-lg-4 mb-3" >
                <h3>Top 5 Sale Item</h3>
                <Bar :data="data2" :options="option2"  style="height:400px;" />
            </div>
            <div class="col-md-4 mb-3 d-flex justify-content-center" style="height:400px;" >
                <div>
                    <h3>Profit</h3>
                <Pie :data="dat3" :options="option2" />
                </div>
          
            </div>
     

        </div>


    </div>
</template>

<script>

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { Line,Bar,Pie } from 'vue-chartjs'





ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)


export default {
    data () {
        

        return {

       dat3 : {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
},


           data2 : {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
   
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10]
    }
  ]
},

 option2 : {
  responsive: true,
  maintainAspectRatio: true
},







            data:{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
},
   
  option:{
    responsive: true,
  maintainAspectRatio: true,
  tension: 0.3
  }


        }
    },
    components: {
        Bar,Line,Pie
  },
}
</script>

<style lang="scss" scoped>

</style>