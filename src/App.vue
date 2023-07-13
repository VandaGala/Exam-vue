<script>
import Class from './components/Class.vue'
import { ref } from 'vue';
export default {
  components: { Class },
  setup() {
    let students = ref(JSON.parse(localStorage.getItem('studentsArr')));
    let studentsBegin = ref([
      {
          name: 'Alan Rickman',
          age: '21.02.1946',
          avatar: 'https://storage.yvision.kz/images/user/redneckstyle/3B5X4Ok7dArQT5sN9E3oncbdsA3vzz.jpg',
          id: 1,
          grades: [
              {
                  theme: 'First theme',
                  grade: 5,
                  date: '12.02.2023'
              },
              {
                  theme: 'Second theme',
                  grade: 4,
                  date: '22.02.2023'
              }
          ]
      },
      {
          name: 'Salma Hayek',
          age: '02.09.1966',
          avatar: 'https://cdni-vm.servicecdn.ru/2021.06/original/1200_60c226b382682c5563bf39cc.jpg',
          id: 2,
          grades: [
              {
                  theme: 'First theme',
                  grade: 4,
                  date: '12.02.2023'
              },
              {
                  theme: 'Second theme',
                  grade: 3,
                  date: '22.02.2023'
              }
          ]
      },
      {
          name: 'Antony Hopkins',
          age: '31.12.1937',
          avatar: 'https://s3.wi-fi.ru/cp3o/uPv52wMuT9ypr4Nvc4vMdSMW?response-content-type=image%2Fjpeg',
          id: 3,
          grades: [
              {
                  theme: 'First theme',
                  grade: 5,
                  date: '12.02.2023'
              },
              {
                  theme: 'Second theme',
                  grade: 5,
                  date: '22.02.2023'
              }
          ]
      },
      {
          name: 'Kathy Bathes',
          age: '28.06.1948',
          avatar: 'https://www.kino-teatr.ru/news/14607/134855.jpg',
          id: 4,
          grades: [
              {
                  theme: 'First theme',
                  grade: 4,
                  date: '12.02.2023'
              },
              {
                  theme: 'Second theme',
                  grade: 5,
                  date: '22.02.2023'
              }
          ]
      },
      {
          name: 'Willem Dafoe',
          age: '22.07.1955',
          avatar: 'https://www.kino-teatr.ru/person/428/4494.jpg',
          id: 5,
          grades: [
              {
                  theme: 'First theme',
                  grade: 3,
                  date: '12.02.2023'
              },
              {
                  theme: 'Second theme',
                  grade: 4,
                  date: '22.02.2023'
              }
          ]
      },
      {
          name: 'Cate Blanchett',
          age: '14.05.1969',
          avatar: 'https://s5.afisha.ru/mediastorage/87/e1/b48fe293114f446ba5360c86e187.jpg',
          id: 6,
          grades: [
              {
                  theme: 'First theme',
                  grade: 4,
                  date: '12.02.2023'
              },
              {
                  theme: 'Second theme',
                  grade: 5,
                  date: '22.02.2023'
              }
          ]
      },
    ]);
    if(!students.value) {
        students.value = studentsBegin.value;
          localStorage.setItem('studentsArr', JSON.stringify(studentsBegin.value))
    };
    let newArr = students.value;
    let newArrAll = (arr) => {
        let newArr = arr;
        newArr.forEach(elem => {
            console.log(elem);
            elem.grades.forEach((el, index) => {
                if(el.theme == '') {
                    elem.grades.splice(index, 1)
                }
            })
        })
      localStorage.setItem('studentsArr', JSON.stringify(arr));
    }
    return {
        students,
        newArr,
        newArrAll,
    }
  }
}
</script>

<template>
    <div class="main-container">
        <div class="links">
            <router-link to="/class" class="link">This group</router-link>
            <router-link to="/group" class="link">Add grades</router-link>    
        </div>
        <div class="plug">Welcome!</div>
        <div class="router">
            <router-view :studentsArr="newArr" @newArrAll="newArrAll"></router-view>        
        </div>
    </div>


</template>

<style>
#app {
    display: flex;
    flex-direction: column;
    width: 35%;
  }
  body {
    place-items: flex-start;
    padding: 100px;
    background-color: antiquewhite;
  }
.links {
  display: flex;
}
a {
    background-color: #d3a063;
    color: #662405;
    padding: 3px 20px;
    font-weight: 600;
}
a:hover {
    background-color: #662405;
    color: #d3a063;
}
.router {
    background-color: #e5e5e2;
}
.main-container {
    position: relative;
}
.plug {
    width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e2;
    position: absolute;
    font-weight: 900;
    font-size: 48px;
    color: gray;
    z-index: -1;
}
</style>
