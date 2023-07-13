<script>
import { ref } from 'vue'
export default {
props: [ 'studentAddGrade', 'studentArrForAdd' ],
setup({studentAddGrade, studentArrForAdd}, context) {
    let myGrade = ref('');
    let addOneGrade = (id) => {
            let obj = {
                theme: '',
                date: '',
                grade: myGrade.value
            }
            studentArrForAdd.forEach(elem => {
                if(elem.id == id) {
                    elem.grades.push(obj)
                }
            });
            context.emit('newArrOfStudents', studentArrForAdd)
        }
    return {
        myGrade,
        addOneGrade
    }
}
}
</script>

<template>
    <div class="box" :id="studentAddGrade.id">
        <span class="name-student">{{ studentAddGrade.name }}</span>
        <select class="select-grade" v-model="myGrade" @change="addOneGrade(studentAddGrade.id)">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>         
    </div>
 
</template>

<style scoped>
.select-grade {
    border: none;
}
.select-grade:focus {
    outline: none;
}
</style>