Simple Vue3 wrapper for [Chart.js](https://www.chartjs.org/)

#Install
`npm i vue3-chartjs-master`


#Example

```html
<!-- html -->
<vue-chart ref="allUserChart" :data="data" :type="bar" :options="options"/> 
```

```js
//import 
import { VueChart }                 from 'vue3-chartjs-master' 

// all properties from Chart.js possible
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
}

// all properties from Chart.js possible
const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}

//get canvas Element
const elm = VueChart.value.Element

// get Chart.js instance with all methodes from Chart.js
const inst = VueChart.value.instance
```