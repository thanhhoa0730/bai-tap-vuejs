<template>
  <div class="list-product">
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
            <button type="button" class="btn btn-primary">+ Add Product</button>
          </div>
        </div>
      </div>
    </div>
    <div class="cl-list-product">
      <table class="table shadow">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Inventory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
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
    }
  }
</script>
<style scoped>
  .cl-search {
  width: 100%;
  /* display: flex; */
  }
  .cl-search::after {
    content: ".";
    visibility: hidden;
    display: block;
    clear: both;
  }
  .cl-input {
    border: none;
    border-bottom: 1px solid #7009ff;
    float: left;
    width: 100%;
  }
  .cl-ul-nav-filter{
    list-style: none;
    padding-inline-start: 0;
    background-color: #ffffff;
    display:flex;
    justify-content: center;
  }
  .cl-ul-nav-filter::after {
    content: ".";
    visibility: hidden;
    display: block;
    clear: both;
  }
  .cl-li-item-nav {
    float: left;
    padding: 10px 10px;
  }
  .cl-nav-filter {
    
  }
  .cl-row-nav-button {
      }
  .clear {
    clear: both;
  }
</style>