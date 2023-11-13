<template>
    <div>
        <canvas ref="Element"/>
    </div>
</template>

<script setup lang="ts">
    import { IDatasets, IOptions } from '../interfaces'
    import { ref, onMounted, PropType } from 'vue'
    import Chart from 'chart.js/auto';
    const Element = ref(null)
    const instance = ref(null)

    const props = defineProps({
        data: {
            type: Object as PropType<IDatasets>,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        options: {
            type: Object as PropType<IOptions>,
            required: false
        }
    })

    onMounted(() => {
        instance.value = new Chart(Element.value, {
            type: props.type,
            data: props.data,
            options: props.options || {}
        })
    })

    defineExpose({
        Element,
        instance
    })
</script>