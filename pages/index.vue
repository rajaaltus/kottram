<template>
  <div>
    <div class="container mx-auto">
      <Hero />
    </div>
    <Welcome />
    <div id="product" class="dark:bg-gray-900 bg-gray-200">
      <LazyProductCta :product="homeProducts[selectedIndex]" :currentKey="0" @prev="prev" @next="next" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import gql from "graphql-tag";
import { print } from "graphql/language/printer";
const QUERY = gql`
  query {
    products {
      features
      name
      price
      quality_standards
      recommended_for
      spec_id
      image_name
      uuid
      specification {
        color
        features
        length
        sizes
      }
    }
  }
`;
export default {
  data() {
    return {
      homeProducts: [],
      selectedIndex: 0,
    };
  },
  async asyncData({ app }) {
    let result = await app.$hasura({
      query: print(QUERY),
    });
    return { homeProducts: result.data.products };
  },
  methods: {
    prev(emittedKey) {
      if (this.homeProducts.length > 0 && this.homeProducts.length - 1 < this.selectedIndex) this.selectedIndex--;
      else this.selectedIndex = 0;
    },
    next(emittedKey) {
      // console.log("emitted Key", emittedKey);
      // console.log("total products: " + this.homeProducts.length, "selected Index: " + this.selectedIndex);
      if (this.homeProducts.length > 0 && this.homeProducts.length - 1 > this.selectedIndex) this.selectedIndex++;
      else this.selectedIndex = 0;
      // console.log("total products: " + this.homeProducts.length, "selected Index: " + this.selectedIndex);
    },
  },
};
</script>
