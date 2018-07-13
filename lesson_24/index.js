class Email {
    constructor() {
        this.email = document.getElementById('email');
        this.email.onchange = this.emailTest.bind(this);
        this.regExp = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    }

    emailTest () {
        if (!this.regExp.test(this.email.value)) {
            this.email.style.border = '2px solid rgba(255, 0, 0, 0.4)';
            this.email.style.background = 'rgba(255, 0, 0, 0.05)';
        } else {
            this.email.style.border = '2px solid lightgreen';
            this.email.style.background = '';
        }
    }
}
const email = new Email();

class Phone {
    constructor() {
        this.phone = document.getElementById('phone');
        this.phone.onchange = this.phoneTest.bind(this);
        this.regExp = /^\+38(\(0\d\d\)|0\d\d)\d{3}?[ -]?\d{2}[ -]?\d{2}$/gm
        // this.regExp = /^\+\d\d(\(\d{3}\)|\d{3})\d{3}(\-|\s)?\d{2}(\-|\s)?\d{2}$/;
    }

    phoneTest () {
        if (!this.regExp.test(this.phone.value)) {
            this.phone.style.border = '2px solid rgba(255, 0, 0, 0.4)';
            this.phone.style.background = 'rgba(255, 0, 0, 0.05)';
        } else {
            this.phone.style.border = '2px solid lightgreen';
            this.phone.style.background = 'rgba(125, 191, 95, 0.1)';
        }
    }
}
const phone = new Phone();

class TextArea {
    constructor () {
        this.regExp = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        this.content = document.getElementById('content');
        this.search = document.getElementById('search');

        this.search.onclick = this.searchEmails.bind(this);
    }

    searchEmails () {
        if(this.list) {
            this.list.remove();
        }
        this.emailList = this.content.value.match(this.regExp);
        if(this.emailList) {
            this.list = document.createElement('ol');
            cycle: for (let i = 0; i < this.emailList.length; i++){
            	for (let k = 0; k < i; k++) {
            		if (this.emailList[i] === this.emailList[k]) {
            			continue cycle;
            		}
            	}
                let li = document.createElement('li');
                li.id = this.emailList[i];
                li.textContent = this.emailList[i];
                this.list.appendChild(li);
            };
            document.body.appendChild(this.list);
        }
    }
}
const textArea = new TextArea();