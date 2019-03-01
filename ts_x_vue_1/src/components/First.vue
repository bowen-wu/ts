<template>
    <div>
        I am First component
        <hello-world />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
    components: {
        HelloWorld
    }
})

export default class First extends Vue{}
</script>

