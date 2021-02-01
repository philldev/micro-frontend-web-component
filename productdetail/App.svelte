<style>
.product-detail {
  margin-top: 16px;
  min-height: 500px;
}
.product-detail-image {
  height: 350px;
  margin-bottom: 16px;
}
.product-detail-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.product-detail-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
}
.product-detail-desc {
  font-size: 14px;
  margin-bottom: 16px;
}
.product-detail-price {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 16px;
}
</style>
<script>
import { onDestroy } from 'svelte';

 let product = null

 const selectProduct = (e) => {
    product = e.detail
  };

  window.addEventListener("select:product", selectProduct, {
    capture: true,
    once: false,
  });

  onDestroy(()=>{
    window.removeEventListener('select:product', selectProduct)
  })
</script>

<div class="product-detail">
  {#if product}
    <div class='product-detail-image'>
      <img src={product.image} alt="" />
    </div>
    <div class='product-detail-title'>{product.title}</div>
    <div class='product-detail-desc'>{product.description}</div>
    <div class='product-detail-price'>$ {product.price}</div>
    <team-cart-addtocart-component
            product={JSON.stringify(product)}
          ></team-cart-addtocart-component>
    {:else}
    <div class="">Please Select a Product!</div>
    {/if}
</div>
    