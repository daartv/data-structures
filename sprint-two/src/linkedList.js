var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity: O(1)
  list.addToTail = function(value) {
    var addedTail = Node(value);
    if (!list.head) {
      list.head = addedTail;
    }
    if (list.tail) {
      list.tail.next = addedTail;
    }
    list.tail = addedTail
  };
  // Time complexity: O(1)
  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var currHead = list.head;
    list.head = list.head.next;
    return currHead.value;
  };
  // Time complexity: O(1) ... because we only checked for the head and tail
  list.contains = function(target) {
   var node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
   };
   return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var linkedList = LinkedList();