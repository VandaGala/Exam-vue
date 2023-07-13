<script>
import { ref } from 'vue';
import StudentGrade from './StudentGrade.vue';
export default {
    components: { StudentGrade },
    props: ['studentsArr'],
    
    setup({studentsArr}, context) {
        let themeOfClass = ref('');
        let dateOfClass = ref('');
        let myGrade = ref('');
        let validBool = ref(true);
        let dopStyle = ref({
            border: '2px solid red'
        });
        let addGrades = () => {
            if(themeOfClass.value && dateOfClass.value) {
                validBool.value = true;
                studentsArr.forEach(elem => {
                    elem.grades.forEach(el => {
                        if(el.theme == '') {
                            el.theme = themeOfClass.value;
                            el.date = dateOfClass.value
                        }
                    })
                }); 
                context.emit('newArrAll', studentsArr);
                themeOfClass.value = '';
                dateOfClass.value = '';
            } else {
                validBool.value = false;
            }
        }
        let newArr = (arr) => {
            studentsArr = arr;
        }
        return {
            themeOfClass,
            dateOfClass,
            addGrades,
            myGrade,
            newArr,
            validBool,
            dopStyle
        }
    }
}
</script>

<template>
  <div class="add-grades">
    <div class="li-student dop">
        <input type="text" placeholder="enter theme" v-model="themeOfClass" class="input-theme" :style="validBool ? {border: 'none'} : dopStyle">
        <input type="date" class="input-date" v-model="dateOfClass" :style="validBool ? {border: 'none'} : dopStyle">
    </div>
    <div class="list-and-btn">
        <div class="list-students">
            <ul class="list-of-students" id="list-stud">
                <StudentGrade v-for="student of studentsArr" :studentAddGrade="student" :studentArrForAdd="studentsArr" class="li-student" @newArrOfStudents="newArr"></StudentGrade>
            </ul>
        </div>
        <button class="save" @click="addGrades">Save</button>        
    </div>
  </div>
</template>

<style scoped>
.dop {
    padding: 10px;
    border: none;
    background-color: #e5e5e2;
}
#list-stud {
    border: none;
}
.input-theme {
    width: 70%;
    padding: 6.5px 8px;
    border-radius: 5px;
    border: none;
}
.input-theme:focus {
    outline: none;
}
.input-date {
    width: 25%;
    padding: 5px;
    border-radius: 5px;
    border: none;
}
.input-date:focus {
    outline: none;
}
.list-and-btn {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
}
.save {
    width: fit-content;
    font-size: 14px;
    padding: 5px 15px;
    border: none;
    border-radius: 2px;
    background-color: #d3a063;
    color: #662405;
    font-weight: 600;
    align-self: center;
    transition: 0.4s;
}
.save:hover {
    background-color: #662405;
    color: #d3a063;
}
.add-grades {
    border: 2px solid #662405;
    z-index: 2;
}
.list-students {
    height: 85%;
    overflow-y: scroll;
}
.list-students::-webkit-scrollbar {
    width: 3px; 
}

.list-students::-webkit-scrollbar-thumb {
    background-color: #2c373f46;
}

.list-students::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd00;
}
</style>
