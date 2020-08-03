<template>
    <div>
        <test-component/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import TestComponent from '@/test-component.vue'

    @Component({
        components: {
            TestComponent
        }
    })
    export default class App extends Vue {
    }
</script>
