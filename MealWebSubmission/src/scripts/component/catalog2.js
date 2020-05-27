class Catalog2 extends HTMLElement {
   connectedCallback(){
        this.render();
   }
 
   render() {
       this.innerHTML = `
            <div class="flex-cont">
                <div id="receiptlist">
                    <img class="imgfood" src="https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg">
                    <div class="finfo">
                    <h2>Lasagne</h2>
                    </div>
                </div>
            </div>
            <div class="flex-cont">
                <div id="receiptlist">
                    <img class="imgfood" src="https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg">
                    <div class="finfo">
                    <h2>Timbits</h2>
                    </div>
                </div>
            </div>
            <div class="flex-cont">
                <div id="receiptlist">
                    <img class="imgfood" src="https://www.themealdb.com/images/media/meals/1525876468.jpg">
                    <div class="finfo">
                    <h2>Wontons</h2>
                    </div>
                </div>
            </div>
            <div class="flex-cont">
                <div id="receiptlist">
                    <img class="imgfood" src="https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg">
                    <div class="finfo">
                    <h2>Kafteji</h2>
                    </div>
                </div>
            </div>
        `;
        }
}

customElements.define("cata2-bar", Catalog2);