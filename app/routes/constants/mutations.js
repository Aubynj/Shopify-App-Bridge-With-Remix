
export const CREATE_PRODUCT_MUTATIONS = `#graphql
    mutation populateProduct($input: ProductInput!) {
    productCreate(input: $input) {
        product {
            id
            title
            handle
            status
            variants(first: 10) {
                edges {
                    node {
                        id
                        price
                        barcode
                        createdAt
                    }
                }
            }
        }
    }
}`

export const CREATE_ORDER_MUTATIONS = ``

