<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <list-product></list-product> đóng tạm-->
    <create-product
      :uploadImage="uploadImage"
      :imageData="imageData"
      :images="images"
      :question="question"
    >
    </create-product> 
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ListProduct from './components/ListProduct'
import CreateProduct from './components/CreateProduct'
export default {
  name: 'app',
  components: {
    //HelloWorld
    ListProduct,
    CreateProduct
  },
  data: function() {
    return {
      imageData: "", // lưu trữ hình ảnh dưới dạng base64,
      images: [],
      question: []
    }
  },
  methods: {
    uploadImage(event) {
      var input = event.target;
      if(input.files && input.files[0]) {
        // tạo 1 function FileReader để đọc img và chuyển nó qua base 64
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
          this.images.push(this.imageData)
        } 
        reader.readAsDataURL(input.files[0]);      
      }
    }
  },
  mounted () {
    // this.$axios
    // .get('https://opentdb.com/api.php?amount=10&category=27&type=multiplev')
    // .then(response => (this.question = response.data.results))
    // console.log(this.$axios)
    fetch('https://opentdb.com/api.php?amount=1', {
      method:'get'
    })
    //lấy data
    .then((response)=>{
      return response.json()
    })
    .then((jsondt)=> {
      this.question = jsondt.results
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px 60px;
  background-color: #f0f0f7;
}

</style>
