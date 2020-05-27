class FoodItem extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set food(food) {
        this._food = food;
        this.render();
    }
    
    render() {
        this.shadowDOM.innerHTML = `
                <style>
                * {
                    margin: 0,
                    padding: 0,
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }

                .image-art-food {
                    width: 700px;
                    height: 500px;
                    object-fit: cover;
                    object-position: center;
                }

                .food-info {
                    padding: 24px;
                }

                .food-info > h2 {
                    font-weight: lighter;
                }

                .food-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
                </style>
                <img class="image-art-food" src="${this._food.strMealThumb}" alt="Image Art">
                <div class="food-info">
                <h2>${this._food.strMeal}</h2>
                <p>${this._food.strInstructions}</p>
                </div>`;
    }
}

customElements.define("food-item", FoodItem);