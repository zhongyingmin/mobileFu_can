<template>
    <div class="mallList">
        11
        <ul>
            <li v-for="(item,index) in data" :key="index">{{item.title}}:金额:{{item.content}}<span>添加</span></li>
        </ul>
    </div>
</template>
<script>
import {getList} from '@/api/goods'
export default {
    data(){
        return{
            data:[]
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            let _this=this;
            getList().then(res=>{
                console.log(res)
                _this.data=res
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mallList{
    width: 100%;
    min-height: 100%;
}
</style>