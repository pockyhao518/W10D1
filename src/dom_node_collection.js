class DOMNodeCollection{
    constructor(array){
        this.array = array;

    }

    forEach(callback){
        for(let i = 0; i < this.length; i++){
            callback(this[i])
        }
    }

    html(args) {
        if (typeof args === 'string') {
            this.forEach((el) => {
                el.innerHTML = args;
            });
        } else if (this.array.length > 0) {
            return this.array[0].innerHTML;
        }
    }

    empty() {
        this.html('');
    }

    append(args){
        if (typeof args === 'string'){
            debugger
            this.array.forEach(el => {
                el.innerHTML += args;
            })
        }

        
    }

}
module.exports = DOMNodeCollection