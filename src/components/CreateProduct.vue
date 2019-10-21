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
              <input class="cl-input-product-name" placeholder="product name"></input>
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
              <input class="cl-input-r" placeholder="Product Type"></input>
            </div>
            <div class="cl-input-r cl-input-r-vendor">
              <p class="cl-p-title-r">Vendor</p>
              <input class="cl-input-r" placeholder="Vendor"></input>
            </div>
            <div class="cl-input-r cl-input-r-tags">
              <p class="cl-p-title-r">Tags</p>
              <input class="cl-input-r" placeholder="Tags"></input>
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
                  <input hidden="hidden" name="file" type="file" id="up_image" @change="uploadImage"></input>
                </label>
              </div>
            </div>
            <div class="cl-show-img">
              <div class="cl-img-files">
                <label class="cl-img-click" for="up_image">
                  <div class="cl-img-hover">
                    <span class="cl-bg-img-files"></span>
                    <input hidden="hidden" name="file" type="file" id="up_image" @change="uploadImage"></input>
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
                <div class="cl-list-input"  v-for="(valueInput, index) in valueInputs" :key="index">
                  <div class="cl-inp-l">
                    <input class="cl-inp-op-name" type="text" v-model="valueInput[index]">
                  </div>
                </div>
                <div class="cl-inpu-f-add">
                  <p class="cl-p-title-f-add font-weight-bold">Option name</p>
                  <!-- <input class="cl-input-product-name-f-add" placeholder="Warehouse"></input> -->
                  <p class="cl-title-Warehouse">Warehouse</p>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="cl-list-input"  v-for="(valueInput, index) in valueInputs" :key="index">
                  <div class="cl-inp-r">
                    <input class="cl-inp-op-value" type="text" placeholder="Add option..." v-model="valueInput[index]">
                  </div>
                </div>
                <div class="cl-inpu-f-add-value">
                  <p class="cl-p-title-f-add font-weight-bold">Option value</p>
                  <input class="cl-input-product-name-f-add" placeholder="Option value">
                </div>
              </div>
            </div>
            <button class="cl-add-item-f d-flex" @click="clickAdd()">+ Add variant option</button>
            <h6 class="cl-h6-f-add font-weight-bold d-flex">Modify The Variants To Be Created:</h6>
            <div class="cl-checkbox-f-add d-flex">
              <input class="text" id="check_box" type="checkbox">
              <label class="cl-lb-f-add font-weight-bold" for="check_box">
                <span>select <span style="color: #7009ff">0</span> variants</span>
              </label>
            </div>
            <div class="cl-table">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Warehouse</th>
                    <th scope="col">Price</th>
                    <th scope="col">Sku</th>
                    <th scope="col">Inventory</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><input class="text" id="check_box" type="checkbox"></th>
                    <td class="cl-td-border">
                      <span>Mark</span></td>
                    <td class="cl-td-border"><span>Mark</span></td>
                    <td class="cl-td-border"><span>Mark</span></td>
                    <td class="cl-td-border"><span>Mark</span></td>
                  </tr>                 
                </tbody>
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
      
    },
    data: function() {
      return {
        valueInputs: [],
        // optionName: " ",
        // optionValue: " "
      }
    },
    computed: {
      
    },
    methods: {
      clickAdd() {
        this.valueInputs.push(this.valueInputs.length+1)

      }
    }
    
  }
  $(document).ready(function(){
    $('.cl-img-click').click(function(){
      $('.cl-img-hover').css('display','none')
    })
  });
  $(document).ready(function() {
    $('#summernote').summernote();
  });
</script>
<style scoped>
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
  .cl-input-product-name, .cl-input-r, .cl-input-product-name-f-add {
    border: none;
    border-bottom: 1px solid #e6e7f0;
    width: 100%;
  }
  .cl-input-product-name::placeholder {
    opacity: 0.5;
    font-size: 14px;
    text-transform: capitalize;
  }
  .cl-input-product-name-f-add::placeholder {
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
  input.cl-input-product-name-f-add:focus {
    outline: none;
    border-bottom: 1px solid #7009ff;
    transition: 0.3s;
  }
  .note-children-container {
    display: none!important;
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
  .cl-inpu-f-add-value {
    padding: 0px 50px;
  }
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
    color: #e6e7f0;
    margin-bottom: 0;
    padding: 2px 0px
  }
  .cl-list-input {
    display: flex;
  }
  .cl-inp-op-value {
    width: 100%;
    border: none;
    border-bottom: 1px solid #e6e7f0;
    font-size: 14px;
    opacity: 0.5;
    padding-top: 5px;
  }
  .cl-inp-op-value:focus {
    outline: none;
    border-bottom: 1px solid #7009ff;
  }
  .cl-inp-r {
    padding: 0px 50px;
    width: 100%;
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