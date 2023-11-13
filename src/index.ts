import VueChart from './components/VueChart.vue'

export default {
    install: (app: any, options: any) => {
        app.component('VueChart', VueChart)
        app.provide('VueChart', options)
    }
}

export { VueChart }