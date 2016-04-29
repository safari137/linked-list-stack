function Node(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
}

function Stack() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    
    this.add = function(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    
    this.forEach = function(cb) {
        var node = this.head;
        var index = 0;
        
        while(node !== null) {
            cb(node.data, index++, this.length);
            node = node.next;
        }
    }
    
    this.forEachReverse = function(cb) {
        var node = this.tail;
        var index = this.length-1;
        
        while (node !== null) {
            cb(node.data, index--, this.length);
            node = node.previous;
        }
    }
    
    this.pop = function() {
        if (this.tail == null)
            return null;
        
        var popped = this.tail;
        this.tail = this.tail.previous;
        this.tail.next = null;
        this.length--;
        
        return popped;
    }
    
    this.top = function() {
        return this.tail;
    }
    
    this.size = function() {
        return this.length;
    }
    
    this.isEmptyStack = function() {
        return this.length < 1;
    }
}