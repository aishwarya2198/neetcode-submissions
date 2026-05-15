class Node {
    constructor(key, val){
        this.val = val;
        this.key = key;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        // to store Least Recently Used 
        this.left = new Node(0, 0);
        // to store most recently used
        this.right = new Node(0, 0);
        this.hmap = new Map();
        this.capacity = capacity;
        this.left.next = this.right;
        this.right.prev = this.left;

    }

    insert(node){
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    remove(node){
        const prev = node.prev;
        const nxt = node.next;
        prev.next = nxt;
        nxt.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.hmap.has(key)){
            // remove the node and insert it to right side as most recently used
            let node = this.hmap.get(key);
            this.remove(node);
            this.insert(node); 
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.hmap.has(key)){
            this.remove(this.hmap.get(key));
        }
        const newNode = new Node(key, value);
        this.hmap.set(key, newNode);
        this.insert(newNode); 
        if(this.hmap.size > this.capacity){
            const lru = this.left.next;
            this.remove(lru);
            this.hmap.delete(lru.key);
        }
    }
}
