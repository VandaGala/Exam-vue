<script>
import Student from './Student.vue';
import StudentList from './StudentList.vue';
import { ref } from 'vue';
export default {
    components: { Student, StudentList },
    props: ['studentsArr'],
    setup({studentsArr}, context) {
        let myTheme = ref('');
        let myDate = ref('');
        let move = (theme, date) => {
            myDate.value = date;
            myTheme.value = theme;
        }
        return {
            move,
            myDate,
            myTheme,
        }
    }
}
</script>

<template>
    <div class="container">
        <ul class="list-of-students">
            <li class="li-student" id="title">
                <span>Name</span>
                <span>Grades</span>
            </li>
            <StudentList v-for="student of studentsArr" :infoSt="student"></StudentList>
        </ul>        
    </div>

</template>

<style>
#title {
    padding: 7px;
    background-color: #727272;
    color: #fff;
}
.list-of-students {
    display: flex;
    flex-direction: column;
    list-style-type: np;
    padding-inline-start: 0;
    gap: 5px;
    padding: 5px;
    border-radius: 2px;
    position: relative;
    border: 2px solid #662405;

}
.li-student {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 2px 10px;
}
.list-of-grades {
    display: flex;
    list-style-type: none;
}
.li-grade {
    padding: 5px;
}
.passive {
    display: none;
}
.container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}

.container::-webkit-scrollbar {
    width: 3px; 
}

.container::-webkit-scrollbar-thumb {
    background-color: #2c373f46;
}

.container::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd00;
}
</style>