import Typesense from 'typesense';
//
// let client = new Typesense.Client({
//     'nodes': [{
//         'host': 'http://localhost', // where xxx is the ClusterID of your Typesense Cloud cluster
//         'port': 8108,
//         'protocol': 'https'
//     }],
//     'apiKey': 'xyz',
//     'connectionTimeoutSeconds': 2
// })
//
//
// const recipe = {
//     'name': 'recipe',
//     'fields': [
//         {'name': 'name', 'type': 'string'},
//         {'name': 'ingredients', 'type': [
//                 {'name': 'name', 'type': 'string'},
//                 {'name': 'subIngredient', 'type': [
//                         {'name': 'name', 'type': 'string'}
//                     ]}
//             ]}
//     ]
// }
//
// // const recipe = {
// //     'name': 'recipe',
// //     'fields': [
// //         {'name': '.*', 'type': 'auto'}
// //     ]
// //
// // }
//
// client.collections().create(recipe)
//
// export {client, recipe}
