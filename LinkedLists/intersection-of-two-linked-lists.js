import { LinkedList, Node } from "./module.mjs";

const l1 = new LinkedList(4);
l1.append(1);
l1.append(8);
l1.append(4);
l1.append(5);

const l2 = new LinkedList(5);
l2.append(6);
l2.append(1);
l2.append(8);
l2.append(4);
l2.append(5);

let h1 = l1.head;
let h2 = l2.head;

var getIntersectionNode = function (headA, headB) {
  // debugger;
  let a = headA;
  let b = headB;

  while (a !== b) {
    if (a === b) {
      return a;
    }

    if (a === null) {
      a = b;
    }

    if (b === null) {
      b = a;
    }
  }
  return a;
};

getIntersectionNode(h1, h2);
