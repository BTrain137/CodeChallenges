class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let hash = this._hash(key);
    if(!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
    // console.log(this.data, hash)
    return hash;
  }

  get(key) {
    let hash = this._hash(key);
    for(let i = 0; i < this.data[hash].length; i+=1) {
      // console.log("get", this.data[hash][i]);
      if(this.data[hash][i][0] === key) {
        return this.data[hash][i];
      } 
    }
    return "not founded";
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.get('grapes')
// console.log(myHashTable.data)
