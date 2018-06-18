class Todo {
    constructor() {
        this.input = document.getElementById('input');
        this.ul = document.getElementById('ul');
        this.doneCheck = false;
        this.counter = counter;
    }

    createTask() {
        if (this.input.value) {

        this.li = document.createElement('li');
        this.li.appendChild(document.createTextNode(this.input.value));

        this.delBtn = document.createElement('button');
        this.delBtn.setAttribute('class', 'delete');
        this.delBtn.onclick = this.deleteTask.bind(this);
        this.delBtn.innerHTML ='&#10006;';

        this.li.appendChild(this.delBtn);
        this.ul.appendChild(this.li);
        lockCash[this.counter] = this.input.value;
        localStorage.setItem('lockCash', JSON.stringify(lockCash));
        counter ++;

    } else {
        
        alert('Enter the correct name please!');
    }
}
    
    deleteTask() {
    this.li.remove();
    delete lockCash[this.counter];
    localStorage.setItem('lockCash', JSON.stringify(lockCash));

    }

}

const taskArr = [];
const lockCash = [];
let counter = 0;


const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    taskArr.push(new Todo().createTask());
});

