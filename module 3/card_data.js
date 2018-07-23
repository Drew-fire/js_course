
export default class CardData {
    constructor () {   
      this.inpCard = document.getElementById('inp1');
      this.inpName = document.getElementById('name');
      this.preloader = document.getElementById('preloader');
    }
  
    showPreloader() {
      this.inpCard.setAttribute('disabled', 'true');
      this.inpName.setAttribute('disabled', 'true');
      this.preloader.style.display = 'inline';
    }
  
    hidePreloader() {
      this.inpCard.removeAttribute('disabled');
      this.inpName.removeAttribute('disabled');
      this.preloader.style.display = 'none';
    }
  
    setTable(obj) {
          if(this.table){
              this.table.remove();
              this.clearBtn.remove();
          }
          this.table = document.createElement('table');
          this.table.setAttribute('id', 'tab');
          for (let i in obj) {
              let tr = document.createElement('tr');
              let td1 = document.createElement('td');
              let td2 = document.createElement('td');
              td1.textContent = i.charAt(0).toUpperCase() + i.substr(1);
              td2.textContent = obj[i] || "Unknown";
              tr.appendChild(td1);
              tr.appendChild(td2);
              this.table.appendChild(tr);
          }
          document.body.appendChild(this.table);
          this.createClearBtn();
    }
    createClearBtn() {
            this.clearBtn = document.getElementById('clearBtn');
            this.clearBtn.id = 'clear';
            this.clearBtn.textContent = 'clear';
            this.clearBtn.onclick = () => {
            this.table.remove();
            this.cardCache = {};
            this.clearBtn.remove();
      }
    }
  }