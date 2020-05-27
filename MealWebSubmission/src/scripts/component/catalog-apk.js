class CataBar extends HTMLElement {
   connectedCallback(){
        this.render();
   }
 
   render() {
        this.innerHTML = `
            <div class="flex-cont">
                <div id="receiptlist">
                    <img class="imgfood" src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg">
                    <div class="finfo">
                    <h2>Corba</h2>
                    </div>
                </div>
            </div>
            <div class="flex-cont">
                <div id="receiptlist">
                    <img class="imgfood" src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg">
                    <div class="finfo">
                    <h2>Kumpir</h2>
                    </div>
                </div>
            </div>
            <div class="flex-cont">
                <div id="receiptlist">
                    <img class="imgfood" src="https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg">
                    <div class="finfo">
                    <h2>Dal fry</h2>
                    </div>
                </div>
            </div>
            <div class="flex-cont">
                <div id="receiptlist">
                    <img class="imgfood" src="https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg">
                    <div class="finfo">
                    <h2>Poutine</h2>
                    </div>
                </div>
            </div>
        `;
        
   }
}

customElements.define("catalog-bar", CataBar);