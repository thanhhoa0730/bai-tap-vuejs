<template>
  <div class="create-product">
    <div class="row cl-row-button">
      <div class="col-lg-4">
        <div class="cl-button-back">
          <span>&#x3c;<span>All product</span></span>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="cl-button-gr">
          <button type="button" class="btn btn-primary btn-overide">Cancel</button>
          <button type="button" class="btn btn-primary btn-overide">Save Draft</button>
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
            <div class="cl-input-dropdown">
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
        <div class="col-8">
          <div class="cl-gr-form shadow">
            <div class="cl-up-image">
              <span class="cl-pro-img">Product Images</span>
              <div cl="cl-up-gr-r">
                <label class="cl-lb-btn" for="up_image">
                  <span class="cl-icon-svg"></span><span class="cl-submit">Upload image</span>
                  <input hidden="hidden" name="file" type="file" id="up_image" @change="uploadImage"></input>
                </label>
              </div>
            </div>
            <div class="cl-show-img">
              <div class="cl-list-img">
                <ul class="cl-ul-img">
                  <li class="cl-li-img" v-for="(image, index) in images" :key="index">
                    <img :src="image" multiple accept="image/*">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cl-form-add">
      <div class="row">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      uploadImage: Function,
      imageData: String,
      images: Array
    },
    data: function() {
      return {
        
      }
    },
    computed: {
      
    },
    methods: {
      
    }
    
  }
  $(document).ready(function() {
    $('#summernote').summernote();
  });
</script>
<style scoped>
  .cl-button-back {
    font-weight: bold;
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
  .cl-p-title-r {

  }
  .cl-gr-card {
    margin-top: 50px;
  }
  .cl-p-title, .cl-input-product-name, .cl-p-title-r {
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
  .cl-p-title, .cl-p-title-r {
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
    background-image: url(/img/upload-solid.2643a50b.svg);
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
  .cl-img {
    width: 200px;
  }
  .cl-ul-img {
    display: flex;
    list-style: none;
    padding-left: 0;
  }
</style>