<template>
    <div>
        {{message}}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import {Resolve} from '@dvolper/tsdi'
    import {TestDependency} from '@/test-dependency'

    @Component
    export default class TestComponent extends Vue {
        @Resolve
        private readonly _test: TestDependency

        public get message(): string {
            if (!this._test) return ''
            return this._test.test()
        }
    }
</script>
