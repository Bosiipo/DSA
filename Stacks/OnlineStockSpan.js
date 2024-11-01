class StockSpan {
  constructor(){
    this.stack = [];
  }

  next (price){
    let span = 1;
    while(this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price){
      let lastSpan = this.stack.pop()[1];
      span += lastSpan;
    }
    this.stack.push([price, span]);
    return span;
  } 
}

const stock = new StockSpan();

stock.next(95);


// class StockSpan {
//   constructor() {
//     this.stack = [
//       [60, 1]
//     ];
//   }

//     next(price) {
//       debugger
//       let span = 1;
//       console.log("run");
//       while (
//         this.stack.length > 0 &&
//         this.stack[this.stack.length - 1][0] <= price
//       ) {
//         debugger;
//         let lastSpan = this.stack.pop()[1];
//         span += lastSpan;
//       }
//       this.stack.push([price, span]);
//       return span;
//     }
 
// }

// const stock = new StockSpan();

// stock.next(95);