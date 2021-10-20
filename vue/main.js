let app = new Vue({
	el:'#app',
	data:{
		books:[
			{
				id:1,
				name:'《天龙八部》',
				date:'2021-08-18',
				price:20.00,
				count:1
			},{
				id:2,
				name:'《天龙八部》',
				date:'2021-08-18',
				price:30.00,
				count:1
			},
			{
				id:3,
				name:'《天龙八部》',
				date:'2021-08-18',
				price:19.00,
				count:1
			},
			{
				id:4,
				name:'《天龙八部》',
				date:'2021-08-18',
				price:50.00,
				count:1
			}
		]
		
	},	
	methods:{
		increment(i){
			this.books[i].count++;
		},
		decrement(i){
			if(this.books[i].count === 0 ) return false;
			this.books[i].count--;
			
		},
		getFinalPrice(price){
			return '￥'+price.toFixed(2);
		},
		remove(i){
			 this.books.splice(i,1);
		}
	},
	computed:{
		totalPrice(){
			// let totalPrice = 0;
			// for(let item  of this.books){	
			// 	console.log(index);
			//     totalPrice += item.price*item.count;
			// }
			// for(let index  in this.books){
			// 	console.log(index);
			//     totalPrice += this.books[index].price*this.books[index].count;
			// }
			 let totalPrice =  this.books.reduce((pre,n)=>{
				return pre+n.price*n.count;
			},0);
			return totalPrice;
		}
	},
	filters:{
		showPrice(price){
			return '￥'+price.toFixed(2);
		}
	}
})

let nums = [10,20,30,40,50];
let total = nums.reduce((prevalue,n)=>{
	return prevalue+n;
},50);
let newnums = nums.map((n)=>{
	return n*2;
});
let new2value = nums.filter((n)=>{
	return n < 50;
})
console.log('total='+total);
console.log('newnums='+newnums);
console.log('new2value='+new2value);

let promise1 = Promise.resolve('promise1');

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 2000, 'promise2');
});
let promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'promise3');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});