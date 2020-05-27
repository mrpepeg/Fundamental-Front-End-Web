import '../component/intro-sf.js';
import '../component/food-list.js';
import '../component/search-bar.js';
import DataSource from '../datas/sources.js';

const main = () => {
    const searchElement = document.querySelector("src-bar");
    //const buttonSearchElement = document.querySelector("#srcBtnElement");
    const foodListElement = document.querySelector("food-list");

    const onButtonSearchClicked = () => {
        DataSource.searchFood(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        foodListElement.foods = results;
    };

    const fallbackResult = message => {
        foodListElement.renderError(message);
    };
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;