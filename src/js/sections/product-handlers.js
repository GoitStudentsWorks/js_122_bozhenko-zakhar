import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import { fetchAllProducts, fetchCategories, fetchProductsByCategory } from "./product-api";
import { clearProducts, renderCategories, renderProducts } from "./product-render-function";
import { getScreenType, getLimitByScreenType, debounce} from "./product-helpers";
import { refs } from "./product-refs";

export const initCategories = async () => {
    try {
        const categories = await fetchCategories();

        const allCategory = {
            _id: 'all',
            name: 'Всі',
        };

        renderCategories([allCategory, ...categories]);

        const firstBtn = document.querySelector('.categories__btn');
        if (firstBtn) {
            firstBtn.classList.add('categories__btn-active');
        }
    } catch (error) {
        console.log(error);
        iziToast.error({ message: 'Oops, something went wrong!' })
    }
};

let currentScreenType = getScreenType();
let currentPage = 1;  
        
// ===============Прослуховувач resize=============
export const handleResize = debounce(async () => {
    const newScreenType = getScreenType();
    if (newScreenType === currentScreenType) return;

    currentScreenType = newScreenType;
    currentPage = 1;

    await initProducts();
}, 300);

window.addEventListener('resize', handleResize);

// =============================//
export const initProducts = async () => {
    try {
        const limit = getLimitByScreenType(currentScreenType);
        const {animals} = await fetchAllProducts(currentPage, limit);
        console.log(animals);
        
        refs.productlist.innerHTML = '';
        renderProducts(animals);
    } catch (error) {
        console.log(error);
        iziToast.error({message: 'Oops, something went wrong!' })
        
    }
}
// =============================================
export const getProductsByCategory = async (e) => {
    if (e.target.nodeName !== 'BUTTON') return;
    console.log(e.target);
    
    const category = e.target.dataset.categoryId;
    
    clearProducts();
    try {
        const {animals} = await fetchProductsByCategory(category);
        console.log(animals);
        renderProducts(animals)
    } catch (error){
        console.log(error);
        iziToast.error({message: 'Oops, something went wrong!' })
    }
}
refs.categoryList.addEventListener('click', getProductsByCategory);