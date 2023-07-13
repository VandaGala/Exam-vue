<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import Student from './Student.vue';
export default {
    components: { Student },
    props: ['infoSt'],
    setup(props) {
        let myTheme = ref('');
        let myDate = ref('');
        let bool = ref(false);
        let addProfileBool = ref(false);
        let getInfo = (theme, date) => {
            myTheme.value = theme;
            myDate.value = date
            bool.value = true;
        };
        let state = reactive({
            addProfileBool: false
        });

        let addProfile = () => {
            state.addProfileBool = true;
        };
        let closeCart = () => {
            state.addProfileBool = false;
        };
        let closeInfo = (date, theme) => {
            myTheme.value = '';
            myDate.value = '';
            bool.value = false;
        };
        let unicBoolData = (data) => {
            state.addProfileBool = false;
        }
        return {
            getInfo,
            bool,
            closeInfo,
            myDate,
            myTheme,
            addProfile,
            addProfileBool,
            state,
            closeCart,
            unicBoolData
        }
    }
}
</script>

<template>
<div class="li-student" @click="addProfile">
    <span>{{infoSt.name}}</span>
        <ul class="list-of-grades" >
            <li v-for="(grade) of infoSt.grades" class="li-grade">
                <span class="hov" @mouseover="getInfo(grade.theme, grade.date)" @mouseout="closeInfo(grade.date, grade.theme)">
                {{ grade.grade }}                            
                </span>
            </li>
            <div class="dop-info" v-if="bool">
                    <span class="info">{{ myDate }}</span>
                    <span class="info">{{ myTheme }}</span>                            
            </div>
        </ul>
</div>
<Student v-if="state.addProfileBool" :infoOneStudent="infoSt" class="student-profile" @closeCartInfo="closeCart" @unicBool="unicBoolData"></Student>
</template>

<style>
.hov {
    padding: 3px 5px;
    /* border: 1px solid gray; */
    cursor: pointer;
    font-weight: 600;
}
.dop-info {
    width: fit-content;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    position: absolute;
    top: 8px;
    left: 120px;
    color: #fff;
    /* background-color: aqua; */
}

/* .info {

} */
</style>