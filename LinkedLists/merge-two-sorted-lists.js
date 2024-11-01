import { LinkedList, Node } from "./module.mjs";

const l1 = new LinkedList(1);
l1.append(2);
l1.append(4);

const l2 = new LinkedList(1);
l2.append(3);
l2.append(4);

let h1 = l1.head;
let h2 = l2.head;

var mergeTwoLists = function(l1, l2) {
  debugger;
  let list = new LinkedList().head;
  let answer = list;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      list.next = new LinkedList(l1.value).head;
      l1 = l1.next;
    } else {
      list.next = new LinkedList(l2.value).head;
      l2 = l2.next;
    }
    list = list.next;
  }

  if (l1 !== null) return list.next = new LinkedList(l1);
  if (l2 !== null) return list.next = new LinkedList(l2);

  return answer.next;
};

mergeTwoLists(h1, h2);
