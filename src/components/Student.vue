<script>
import { ref } from 'vue';
export default {
  props: ['infoOneStudent'],
  setup({infoOneStudent}, context) {
    let unicBool = ref(true);
    let allStyle = ref({
        display: 'flex'
      });
    let forImg = {
      backgroundImage: `url(${infoOneStudent.avatar})`
    };
    let closeCart = () => {
      unicBool.value = false;
      context.emit('unicBool', unicBool.value);
    };
    let closeCartInfo = () => {
    }
    return {
      forImg,
      unicBool,
      closeCart,
      closeCartInfo,
      allStyle
    }
  }
    
}
</script>

<template>
  <div class="cart" v-if="unicBool">
    <div class="all-info">
      <div class="image-unic">
          <div class="img" :style="forImg">
          </div>
        </div>
      <div class="info-unic">
            <span class="name-unic"><span class="info-unic-string">Name:</span>  {{ infoOneStudent.name }}</span>
            <span class="age-unic"><span class="info-unic-string">Age:</span> {{ infoOneStudent.age }}</span>        
      </div>
    </div>

    <div class="table-unic">
      <div class="themes">
        <h3>Themes and grades:</h3>
        <ul :style="{paddingInlineStart: 0 + 'px', padding: 5 + 'px'}">
          <li v-for="theme of infoOneStudent.grades" class="li-list-grade">
            <span>{{ theme.theme }}</span>
            <span class="unic-grade">{{ theme.grade }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="grades">    
    </div>
    <button class="close" @click="closeCart" @closeCartInfo="closeCartInfo">x</button>
  </div>
</template>

<style scoped>
.cart{
  width: 99%;
  height: 97%;
  background-color: antiquewhite;
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 5px;
}
.image-unic {
  width: 100%;
  height: 70%;
}
.img {
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 5px;
}
h3 {
  padding: 0 3px;
  font-weight: 900;
}
.close {
  position: absolute;
  top: 5px;
  right: 6px;
  width: fit-content;
    font-size: 14px;
    padding: 5px 10px;
    border: none;
    border-radius: 2px;
    background-color: #d3a063;
    color: #662405;
    font-weight: 600;
    align-self: center;
    transition: 0.4s;
}
.close:hover {
  background-color: #662405;
    color: #d3a063;
}
.all-info {
  width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.info-unic {
  display: flex;
    flex-direction: column;
}
.info-unic-string {
  font-weight: 900;
}
.li-list-grade {
  display: flex;
  justify-content: space-between;
}
.table-unic {
  width: 60%;
  padding: 0 5px;
}
.unic-grade {

}
</style>
