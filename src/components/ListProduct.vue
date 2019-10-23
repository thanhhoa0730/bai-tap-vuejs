<template>
  <div class="list-product" v-show="isActive">
    <div class="cl-search">
      <input class="cl-input" placeholder="Search Product"></input>
    </div>
    <div class="cl-nav-button-add">
      <div class="row cl-row-nav-button">
        <div class="col-9">
          <div class="cl-nav-filter">
            <ul class="cl-ul-nav-filter shadow">
              <li class="cl-li-item-nav" v-for="(itemNavs, index) in itemNav" :key="index">{{itemNavs}}</li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="cl-button-add">
            <button type="button" class="btn cl-btn-add" @click="activeAddProduct">+ Add Product</button>
          </div>
        </div>
      </div>
    </div>
    <div class="cl-list-product">
      <div class="cl-table-list shadow">
        <table class="table cl-table-border">
          <thead>
            <tr class="cl-row-title-list">
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Caterogy</th>
              <th scope="col">Price</th>
              <th scope="col">Inventory</th>
            </tr>
          </thead>
          <tbody>
            <tr class="cl-item-row-list" 
            v-for="questions in question" :key="questions.id">
              <th scope="row">
                <input class="text cl-input-list" id="check_box" type="checkbox">
              </th>
              <td>{{questions.category}}</td>
              <td>{{questions.type}}</td>
              <td>{{questions.difficulty}}</td>
              <td>{{questions.question}}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      question: Array,
      activeAddProduct: Function,
      isActive: Boolean
    },
    data: function() {
      return {
        itemNav: {
          obj1: 'Publish(5)',
          obj2: 'Unpublish(0)',
          obj3: 'Waiting for approve(2)',
          obj4: 'Reject(0)',
          obj4: 'Draft(1)', 
        }
      }
    },
    methods: {
    }
  }
</script>
<style>
  .cl-button-add {
    display: flex;
    justify-content: flex-end;
  }
  .cl-search {
  width: 100%;
  }
  .cl-search::after {
    content: ".";
    visibility: hidden;
    display: block;
    clear: both;
  }
  .cl-input {
    border: none;
    border-bottom: 1px solid #e6e7f0;
    float: left;
    width: 100%;
    background-color: transparent;
    
  }
  .cl-input:focus {
    outline: none;
    border-bottom: 1px solid #7009ff;
    transition: 1s;
  }
  .cl-ul-nav-filter{
    list-style: none;
    padding-inline-start: 0;
    background-color: #ffffff;
    display:flex;
    justify-content: space-around;
    border-radius: 6px;
  }
  .cl-li-item-nav {
    padding: 10px 10px;
  }
  .clear {
    clear: both;
  }
  .cl-btn-add {
    border: 1px solid #7009ff !important;
  }
  .cl-btn-add:hover {
    background-color: #7009ff;
    color: #ffffff !important;
  }
  .cl-btn-add:focus {
    box-shadow: 0 0 0 0.2rem #7009ff !important;
  }
  .cl-table-list {
    background-color: #ffffff;
    border-radius: 6px;
  }
  .cl-row-title-list th {
    border-bottom: 0 !important;
    border-top: 0 !important; 
  }
  .cl-row-title-list, .cl-item-row-list {
    border-bottom: 1px solid #e6e7f0;
  }
  .cl-item-row-list td, th {
    border-top: none !important;
  }
  .cl-table-border {
    border-collapse: collapse !important;
  }
  .cl-input-list {
    background-color: #7009ff !important;
  }
</style>