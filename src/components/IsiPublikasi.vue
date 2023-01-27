<template>
 
       
            <div class="card shadow card-product">
              <div class="blog-box">
                <img :src="publikasi.url_sampul" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    <p><strong>{{ publikasi.create_date.substring(0, 4) }}</strong></p><br />
                    <strong>{{ publikasi.judul }}</strong>
                  </h5>
                  <p>{{ publikasi.deskripsi.substring(0, 50) + "..." }}</p>
                  <!-- <Popper content="This is the Popper content">
                  <button class="btn btn-secondary">Detail</button>
                  </Popper> -->
                  <button class="btn btn-secondary">Detail</button>
                  <!-- <router-link class="btn btn-success" :to="'/publikasi/'+product.dokumen_id"><b-icon-cart></b-icon-cart> Download</router-link> -->
                  <!-- <vue-awesome-paginate
                    v-model="currentPage"
                    :page-count="37"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="clickCallback"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :container-class="'pagination'"
                    :page-class="'currentPage-item'"
                  >
                  </vue-awesome-paginate> -->
                </div>
              </div>
            </div>
          
     
</template>

<script>

export default {
  name: "IsiPublikasi",
  props: ["publikasi"],
  
};
</script>
