<template>
  <!-- v-show="isActivePagination" đóng tạm-->
  <div id="createProduct" class="create-product" >
    <div class="row cl-row-button">
      <div class="col-lg-4">
        <div class="cl-button-back">
          <span class="cl-icon-arrow-l"></span><span @click="backAllProduct">All product</span>
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
            <div class="cl-input-pr">
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
            <div class="cl-title-h6 d-flex">
              <h6 class=" font-weight-bold">Product Variants</h6>
              <h6 class="cl-p-title-f-add font-weight-bold" style="padding-left: 87px">Option value</h6>
            </div>
              <!-- <div class="col-lg-4">
                <div class="cl-list-input">
                  <div class="cl-inp-l" v-for="(n, index) in counter" :key="index" >
                    <input class="cl-inp-op-name" type="text">
                  </div>
                </div>
                <div class="cl-inpu-f-add">
                  <p class="cl-p-title-f-add font-weight-bold">Option name</p>
                  <p class="cl-title-Warehouse">Warehouse</p>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="cl-list-input">
                  <div class="cl-inp-r" 
                    v-for="(n, index) in counter" :key="index"  >
                    <input-tag class="cl-inp-op-value" :before-adding="onAddtag"
                    type="text" placeholder="Add option..."
                    v-model="options[index]"
                    ></input-tag>
                    <div class="cl-style-delete">
                      <div class="cl-border">
                        <button class="cl-icon-delete"></button>
                      </div>  
                    </div>
                  </div>
                </div>
                <div class="cl-inpu-f-add-value">
                  <p class="cl-p-title-f-add font-weight-bold">Option value</p>
                  <div class="cl-border-bottom">
                    <input-tag class="cl-input-product-name-f-add"                     
                    v-model="optionValue">
                    </input-tag>
                  </div>
                </div>
              </div> -->             
              <template v-for="(item, index) in listinput">
                <div class="row" :key="`input_index_${index}`">
                  <div class="col-lg-4">
                    <div class="cl-list-input">
                      <div class="cl-inp-l">
                        <input v-model="item.option_name" class="cl-inp-op-name" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="cl-list-input">
                      <div class="cl-inp-r"  @keyup.enter="onOptionEnter">
                        <input-tag class="cl-inp-op-value" 
                        type="text" placeholder="Add option..."
                        v-model="options[index]"
                        ></input-tag>
                        <div class="cl-style-delete">
                          <div class="cl-border">
                            <button class="cl-icon-delete"></button>
                          </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>    

               <template>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="cl-list-input">
                      <div class="cl-inp-l">
                        <input v-model="option_name" class="cl-inp-op-name" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="cl-list-input">
                      <div class="cl-inp-r" >
                        <input-tag class="cl-inp-op-value"                      
                        type="text" placeholder="Add option..."
                        v-model="option_value"></input-tag>
                        <div class="cl-style-delete">
                          <div class="cl-border">
                            <button class="cl-icon-delete"></button>
                          </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>  

            <button id="addInput" class="cl-add-item-f d-flex" @click="addVariant">+ Add variant option</button>
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
                  <tr class="cl-tr-title">
                      <th scope="col">#</th>
                    <th scope="col" v-show="activeVariant">Variant</th>
                    <th scope="col">Warehouse</th>
                    <th scope="col">Price</th>
                    <th scope="col">Sku</th>
                    <th scope="col">Inventory</th>
                  </tr>
                </thead>
                <tbody>                 
                  <tr v-for="option in options" :key="option.id">
                    <th scope="row"><input class="text" id="check_box" type="checkbox"></th>
                    <td class="cl-td-border" v-show="activeVariant">{{option}}</td>
                    <td class="cl-td-border">{{option_value}}</td>
                    <td class="cl-td-border"></td>
                    <td class="cl-td-border"></td>
                    <td class="cl-td-border"></td>
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
      question: Array,
      //isActivePagination: Boolean, đóng tạm
      backAllProduct: Function
    },
    data: function() {
      return {
        activeVariant: false,
        optionValue: [] ,
        valueVariant: [],
        counter: 0,
        showCreate: false,
        option_value: ['viet nam 1' , 'viet nam 2'],
        option_name : 'warehouse',
        options:[],
        listinput:[]
      }
    },
    computed: {
    },
    methods: {
      addVariant() {
        if( this.listinput.length < 3){
          this.listinput.unshift({
          })
        }
      },
      onOptionEnter() {
        this.activeVariant = true;
        if(this.listinput.option_value==1)
        {
          this.options = this.listinput;
        }        
        return arr.reduce((a, b) =>
          a.map(x => b.map(y => x.concat(y)))
          .reduce((a, b) => a.concat(b), []), [[]]);        
        var arr = this.options;
        console.log('onOptionEnter(arr)'+ ' ' +onOptionEnter(arr))
      },
    }  
  }
  $(document).ready(function(){
    $('.cl-img-click').click(function(){
      $('.cl-img-hover').css('display','none')
    });
    //summernot 
    $('#summernote').summernote();
  });
</script>
<style>
  .cl-td-border {
    border: 1px solid #e6e7f0 !important;
    width: 25%;
    border-radius: 6px;
    margin: 0 15px;
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
    margin-bottom: 50px;
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
    border: none !important;
    padding-left: 0 !important;
    padding-top: 0 !important
  }
  .cl-input-product-name-f-add input {
    background-color: #7009ff;
  }
  .cl-input-product-name-f-add:focus {
    border-bottom: 1px solid #7009ff;
    transition: 0.3s;
    outline: none;
  }
  .vue-input-tag-wrapper.cl-input-product-name-f-add .input-tag {
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
    border: 2px solid #757575;
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
    padding: 7px 0px
  }
  .cl-inp-op-value {
    width: 100%;
    border: none !important;
    font-size: 14px;
    padding: 0px !important;
  }
  .cl-inp-op-value .new-tag {
    margin-bottom: 0px !important;
    margin-top: 0px !important;
  }
  .cl-inp-op-value .input-tag {
    background-color: #e9e9eb !important;
    border: 1px solid #dddddd !important;
    color: #4d4f5c !important;
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
  .cl-inp-r:nth-child(2) {
    margin-top: 15px
  }
  .cl-inp-r:nth-child(3) {
    margin-top: 15px
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
  .cl-inp-l:nth-child(2) {
    margin-top: 15px
  }
  .cl-inp-l:nth-child(3) {
    margin-top: 15px
  }
  .vue-input-tag-wrapper .new-tag {
    margin-bottom: 0;
    margin-top: 0;
  }
  .cl-icon-delete {
    background-image: url("../assets/trash-alt-solid.svg");
    background-repeat: no-repeat;
    width: 17px;
    height: 20px;
    border: none;
    background-color: transparent  
  }
  .cl-style-delete {
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 0;
  }
  .cl-border {
    display: flex;
    padding: 5px 10px;
    border: 1px solid #e6e7f0;
    border-radius: 6px;
    position: absolute;
    bottom: 0;
  }
  .cl-border:hover {
    background-color: #e6e7f0;
    cursor: pointer;
  }
</style>