<template>
    <Button 
    @click="handleClick"
    class="el-button"
    :class="[
    type?'el-button--'+type:'',
    {
        'is-round':round,
        'is-circle':circle,
        'is-plain':plain
    }
    ]"
    >
        {{type}}-{{tit}}
        <slot></slot>
    </Button>
</template>
<script>
// props检查 解构出来 
// vue 怎么做
export default {
    data(){
        return {
            tit:'hello'
        }
    },
    props: {
        type: {
            type:String,
            default: 'default'
        },
        round: Boolean,
        plain: Boolean,
        circle: Boolean
    },
    created(){
        console.log(this.type,this.tit);
        
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style lang="stylus">

</style>