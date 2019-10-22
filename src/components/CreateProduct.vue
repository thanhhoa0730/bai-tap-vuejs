<template>
  <div class="create-product">
    <div class="row cl-row-button">
      <div class="col-lg-4">
        <div class="cl-button-back">
          <span class="cl-icon-arrow-l"></span><span>All product</span>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="cl-button-gr">
          <button type="button" class="btn btn-cl btn-overide">Cancel</button>
          <button type="button" class="btn btn-cl btn-overide">Save Draft</button>
          <button type="button" class="btn btn-dark btn-overide">submit</button>
        </div>
      </div>
    </div>
    <div class="cl-gr-card">
      <div class="row cl-row-card">
        <div class="col-lg-8">
          <div class="cl-card-left shadow">
            <div class="cl-input">
              <p class="cl-p-title">Product Name</p>
              <input class="cl-input-product-name" placeholder="product name">
            </div>
            <div class="cl-summernote">
              <div id="summernote">Hello Summernote</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="cl-card-right shadow">
            <div class="cl-input-r">
              <p class="cl-p-title-r">Product Type</p>
              <input class="cl-input-r" placeholder="Product Type">
            </div>
            <div class="cl-input-r cl-input-r-vendor">
              <p class="cl-p-title-r">Vendor</p>
              <input class="cl-input-r" placeholder="Vendor">
            </div>
            <div class="cl-input-r cl-input-r-tags">
              <p class="cl-p-title-r">Tags</p>
              <input class="cl-input-r" placeholder="Tags">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cl-upload-img">
      <div class="row ">
        <div class="col-lg-8">
          <div class="cl-gr-form shadow">
            <div class="cl-up-image">
              <span class="cl-pro-img">Product Images</span>
              <div cl="cl-up-gr-r">
                <label class="cl-lb-btn btn" for="up_image">
                  <span class="cl-icon-svg"></span><span class="cl-submit">Upload image</span>
                  <input hidden="hidden" name="file" type="file" id="up_image" @change="uploadImage">
                </label>
              </div>
            </div>
            <div class="cl-show-img">
              <div class="cl-img-files">
                <label class="cl-img-click" for="up_image">
                  <div class="cl-img-hover">
                    <span class="cl-bg-img-files"></span>
                    <input hidden="hidden" name="file" type="file" id="up_image" @change="uploadImage">
                  </div>
                </label>
              </div>
              <!-- list show image -->
              <div class="cl-list-img">
                <ul class="cl-ul-img">
                  <li class="cl-li-img" v-for="(image, index) in images" :key="index">
                    <img class="cl-w-img" :src="image" multiple accept="image/*">
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cl-form-add">
      <div class="row cl-row-form">
        <div class="col-lg-8">
          <div class="cl-col-form-add shadow">
            <h6 class="d-flex font-weight-bold">Product Variants</h6>
            <div class="row">
              <div class="col-lg-4">
                <div class="cl-list-input">
                  <div class="cl-inp-l">
                    <input class="cl-inp-op-name" type="text" v-for="(n, index) in counter" :key="index" v-if="index <= 2">
                  </div>
                </div>
                <div class="cl-inpu-f-add">
                  <p class="cl-p-title-f-add font-weight-bold">Option name</p>
                  <p class="cl-title-Warehouse">Warehouse</p>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="cl-list-input">
                  <div class="cl-inp-r">
                    <input-tag class="cl-inp-op-value" 
                    type="text" placeholder="Add option..."
                    v-for="(n, index) in counter" :key="index" v-if="index <= 2" ></input-tag>
                  </div>
                </div>
                <div class="cl-inpu-f-add-value">
                  <p class="cl-p-title-f-add font-weight-bold">Option value</p>
                  <!-- <input class="cl-input-product-name-f-add" 
                  placeholder="Option value" 
                  value="viet nam store 1" 
                  data-role="tagsinput"
                  v-model="tags"> -->
                  <div class="cl-border-bottom">
                    <input-tag class="cl-input-product-name-f-add" 
                   
                    ></input-tag>
                  </div>
                </div>
              </div>
            </div>
            <button id="addInput" class="cl-add-item-f d-flex" @click="counter++">+ Add variant option</button>
            <h6 class="cl-h6-f-add font-weight-bold d-flex">Modify The Variants To Be Created:</h6>
            <div class="cl-checkbox-f-add d-flex">
              <input class="text" id="check_box" type="checkbox">
              <label class="cl-lb-f-add font-weight-bold" for="check_box">
                <span>select <span style="color: #7009ff">0</span> variants</span>
              </label>
            </div>
            <div class="cl-table">
              <table class="table table-borderless">
                  <div class="test_item">
                    <tr class="cl-tr-title">
                      <th scope="col">#</th>
                      <th scope="col" v-show="activeVariant">Variant</th>
                      <th scope="col">Warehouse</th>
                      <th scope="col">Price</th>
                      <th scope="col">Sku</th>
                      <th scope="col">Inventory</th>
                    </tr>
                  </div>
                  <div class="test d-flex">
                    <th scope="row"><input class="text" id="check_box" type="checkbox"></th>
                    <td ></td><br/>
                    <tr>        
                    <td class="cl-td-border" v-for="(optionValues,i) in optionValue" :key="i">{{optionValues.optionTitle}}</td>
                    <td class="cl-td-border">abc</td>
                    <td class="cl-td-border">abc</td>
                    <td class="cl-td-border">abc</td>
                  </tr>  
                  </div>             
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      uploadImage: Function,
      imageData: String,
      images: Array,
      question: Array
    },
    data: function() {
      return {
        activeVariant: false,
        optionValue: [
          {optionTitle: 'viet nam store 1'},
          {optionTitle2: 'viet nam store 2'}
        ],
        valueVariant: [],
        counter: 0
      }
    },
    computed: {
      
    },
    methods: {
      clickAdd() {
        
      },
      addItem() {
        // this.arrayAdd.unshift(this.valueVariant);
        // this.activeVariant = true;
      }
    }    
  }
  $(document).ready(function(){
    $('.cl-img-click').click(function(){
      $('.cl-img-hover').css('display','none')
    });
    //summernot
    $('#summernote').summernote();
    //add input
    //khai báo số khung giới hạn input
    // var max_input = 3;
    // var class_input_l = $('.cl-add-int-l');// lớp bao ngoài
    // var class_input_r = $('.cl-add-int-r')
    // var button_add = $('#addInput');// nút +add
    // var x=1;
    // $(button_add).click(function(e){
    //   e.preventDefault();
    //   if(x <= max_input) {
    //     x++;
    //     $(class_input_l).append('<div class="cl-inp-l"><input class="cl-inp-op-name" type="text"></div>')
    //     $(class_input_r).append('<div class="cl-inp-r"><input-tag class="cl-inp-op-value" type="text" placeholder="Add option..."></input-tag></div>')
    //   }
    // })
  });
</script>
<style scoped>
  .cl-tr-title {
    display: inline-table;
    width: 100%;
  }
  .cl-icon-arrow-l {
    background-image: url("../assets/chevron-left-solid.svg");
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  } 
  .cl-button-back {
    font-weight: bold;
    display: flex;
    cursor: pointer;
  }
  .cl-button-gr {
    display: flex;
    justify-content: flex-end;
  }
  .btn-overide {
    margin-left: 10px;
    margin-right: 10px;
  }
  .cl-card-left,.cl-card-right {
    background-color: #ffffff;
    padding: 30px 30px;
    border-radius: 6px;
  }
  .cl-gr-card {
    margin-top: 50px;
  }
  .cl-p-title, .cl-input-product-name, .cl-p-title-r,.cl-p-title-f-add {
    display: flex;
  }
  .cl-input-product-name, .cl-input-r {
    border: none;
    border-bottom: 1px solid #e6e7f0;
    width: 100%;
  }
  .cl-input-product-name::placeholder {
    opacity: 0.5;
    font-size: 14px;
    text-transform: capitalize;
  }
  .cl-p-title, .cl-p-title-r, .cl-p-title-f-add {
    margin-block-end: 0;
  }
  .cl-input-r-vendor, .cl-input-r-tags {
    margin-top: 30px;
  }
  .cl-input-r::placeholder {
    opacity: 0.5;
    font-size: 14px;
    text-transform: capitalize;
  }
  input.cl-input-product-name:focus {
    outline: none;
    border-bottom: 1px solid #7009ff;
    transition: 0.3s;
  }
  input.cl-input-r:focus {
    outline: none;
    border-bottom: 1px solid #7009ff;
    transition: 0.3s;
  }
  .cl-input-product-name-f-add {
    border: none;
    padding: 0;
  }
  .cl-input-product-name-f-add:focus {
    border-bottom: 1px solid #7009ff;
    transition: 0.3s;
    outline: none;
  }
  .vue-input-tag-wrapper .input-tag {
    background-color: #e9e9eb;
    border: 1px solid #dddddd;
    color: #4d4f5c;
  }
  .cl-border-bottom {
    border-bottom: 1px solid #e6e7f0;
  }
  .note-children-container {
    display: none!important;
    border-bottom: 1px solid #7009ff;
  }
  .cl-up-image {
    display: flex;
    justify-content: space-between;
  }
  .cl-gr-form {
    background-color: #ffffff;
    padding: 30px 30px;
    border-radius: 6px;
  }
  .cl-pro-img {
    font-weight: bold;
  }
  .cl-icon-svg {
    background-image: url("../assets/upload-solid.svg");
    height: 20px;
    background-repeat: no-repeat;
    width: 20px;
    position: absolute;
  }
  .cl-submit {
    margin-left: 25px;
  }
  .cl-lb-btn {
    cursor: pointer;
  }
  .cl-lb-btn:hover {
    background-color: #7009ff;
    color: #ffffff
  }
  .cl-img {
    width: 200px;
  }
  .cl-ul-img {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    padding-left: 0;
  }
  .btn-cl {
    border: 1px solid #8080804f;
    background-color: #ffffff;
  }
  .btn-cl:hover {
    background-color: #7009ff;
    color: #ffffff;
  }
  .cl-summernote {
    margin-top: 20px;
  }
  .cl-bg-img-files {
    background-image: url("../assets/file-image-regular.svg");
    background-repeat: no-repeat;
    width: 75px;
    height: 100px;  
    position: absolute;
    opacity: 0.5;
  }
  .cl-img-files {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cl-img-hover {
    width: 150px;
    height: 150px;
    /* background-color: #efefef; */
    display: flex;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    border-radius: none; 
  }
  .cl-img-hover:hover{
    background-color: #efefef;
  }
  .cl-img-hover:hover .cl-bg-img-files {
    opacity: 0.8;
  }
  .cl-img-click {
    cursor: pointer;
  }
  .cl-w-img {
    max-width: 100%;
    max-height: 50%;
  }
  .cl-li-img {
    padding: 0px 10px;
  }
  .cl-col-form-add {
    background-color: #ffffff;
    margin-top: 50px;
    padding: 30px 30px;
    border-radius: 6px;
  }
  /* .cl-inpu-f-add-value {
    padding: 0px 50px;
  } */
  .cl-add-item-f {
    color: #7009ff;
    /* //padding-top: 30px; */
    margin-bottom: 0;
    background: transparent;
    border: none;
  }
  .cl-add-item-f:focus {
    outline: none;
  }
  .cl-h6-f-add {
    padding: 30px 0px;
  }
  .cl-lb-f-add {
    padding-left: 15px;
    margin-bottom: 0
  }
  #check_box {
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 2px solid #757575
  }
  .cl-td-border {
    border: 1px solid #e6e7f0;
    margin: 0px 15px;
    border-radius: 15px;
  }
  .table {
    border-collapse: inherit;
  }
  .cl-title-Warehouse {
    display: flex;
    border-bottom: 1px solid #e6e7f0;
    width: 100%;
    font-size: 14px;
    color: #000000;
    margin-bottom: 0;
    padding: 2px 0px
  }
  .cl-inp-op-value {
    width: 100%;
    border: none;
    /* border-bottom: 1px solid #e6e7f0; */
    font-size: 14px;
  }
  .cl-inp-op-value::placeholder {
    opacity: 0.5
  }
  .cl-inp-op-value:focus {
    outline: none;
    border-bottom: 1px solid #7009ff;
  }
  .cl-inp-r {
    /* padding: 0px 50px; */
    width: 100%;
    border-bottom: 1px solid #e6e7f0;
  }
  .cl-inp-r:focus {
    border-bottom: 1px solid #7009ff;
  }
  .cl-inp-op-name {
    border: none;
    border-bottom: 1px solid #e6e7f0;
    width: 100%;
  }
  .cl-inp-op-name:focus {
    outline: none;
    border-bottom: 1px solid #7009ff;
  }
  .cl-inp-l {
    width: 100%;
  }
</style>