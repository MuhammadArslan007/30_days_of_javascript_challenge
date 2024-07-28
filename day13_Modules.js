//Tasks/Activities
//Activity1 Creating and Exporting Modules

// const mathop = require('./Modules_MathOperation.js')
import {add} from './modules/Modules_MathOperation.js'
import { obj } from './modules/module_obj.js';

console.log(add(3,4));
obj.greeting()
console.log(obj.age)

//Activity2 Named and Default Export
import exDefault from './modules/defaultExport.js';
console.log(exDefault.name);
exDefault.logName("Muhammad Arslan")


import { greeting, PI as pie } from './modules/namedExport.js';

console.log(pie);

greeting()

//Activity3 Importing Entire Moudle

import * as entireModule from './modules/exportEntireModule.js'
console.log(entireModule.totalPrice);
entireModule.dicountByCoupon('Sale')
console.log(entireModule.totalPrice);

//Activity4 Using-Third party Module

import axios from 'axios';
// "description"

const apiUrl = 'https://dummyjson.com/products/1'
async function useAxios(url){
    try {
        const respone = await axios.get(url)
        console.log(respone.data.reviews);

    } catch (error) {
        console.log("something wrong",error);
        return null;
    }
    
}

useAxios(apiUrl)