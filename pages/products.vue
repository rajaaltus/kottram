<template>
  <div class="container mx-auto mt-10 text-gray-800 dark:text-gray-400">
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <h1 class="font-bold tracking-wider text-4xl text-gray-300 py-2">{{ index + 1 }}.{{ product.name }}</h1>
        <p>{{ product.features }}</p>

        <h2>Sizes:</h2>
        {{ product.specification.features }}
        <!-- <li v-for="(size, index) in product.specification.sizes" :key="index">
            {{ size }}
          </li> -->
      </li>
    </ul>
  </div>
</template>

<script>
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
      // products: [],
    };
  },
  async asyncData({ app }) {
    const { data } = await app.$hasura({
      query: print(QUERY),
    });
    return { products: data.products };
  },
  computed: {
    filteredProducts() {
      return this.products;
    },
  },
};
</script>
