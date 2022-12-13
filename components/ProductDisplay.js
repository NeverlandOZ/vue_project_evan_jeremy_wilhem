/* Project by Evan Zanzucchi Wilhem Harat and Jeremy Sellam 13/12/2022 */

app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `
   <div class="product-display">
        
    <div class="product-container">
      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">
        <h1>{{ productName }}</h1>
        <p v-if="visible">You can catch him !</p>
        <p v-else>He is not here anymore...</p>
        <p>dangerous: {{ dangerous }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div class="color-circle"
          v-for="(variant, index) in variants" 
          :key="variant.id"
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateProduct(index)"
          >
        </div> 

        <button class="button" v-on:click="addToPokeball" 
          :disabled="!visible"
          :class="{ disabledButton: !visible }"
          >
        Add to pokeball
        </button>
      </div>
    </div>

    <review-list :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview" ></review-form>
  </div>
   `,
  data() {
    return {
      product: 'Pokemon',
      brand: 'Catch the',
      selectedVariant: 0,
      details: ['60% fire', '20% electric', '20% water', 'Gender-male'],
      variants: [
        {
          id: 2234,
          color: 'orange',
          image: './assets/images/charmander.png',
          quantity: 10
        },
        {
          id: 2235,
          color: 'yellow',
          image: './assets/images/pikachu.png',
          quantity: 0
        },
        {
          id: 2236,
          color: 'skyblue',
          image: './assets/images/squirtle.png',
          quantity: 0
        }
      ],
      reviews: [],
      tabs: ['review-form', 'review-list'],
      activeTab: 'review-form'
    }
  },
  methods: {
    addToPokeball() {
      this.$emit('add-to-pokeball', this.variants[this.selectedVariant].id)
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    productName() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    visible() {
      return this.variants[this.selectedVariant].quantity
    },
    dangerous() {
      if (this.premium) {
        return 'Yes'
      }
      return 2.99
    }
  }
})
